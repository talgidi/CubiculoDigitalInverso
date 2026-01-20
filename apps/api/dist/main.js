import { createYoga, createSchema } from 'graphql-yoga';
import { createServer } from 'node:http';
import { prisma } from '@repo/db';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { redis } from "./redis.js";
const port = process.env.PORT || 4000;
const APP_SECRET = process.env.APP_SECRET || 'appsecret321';
// Helper to get userId from context
function getUserId(context) {
    const authHeader = context.request.headers.get('Authorization');
    if (authHeader) {
        const token = authHeader.replace('Bearer ', '');
        if (!token) {
            throw new Error('No token found');
        }
        const { userId } = jwt.verify(token, APP_SECRET);
        return userId;
    }
    throw new Error('Not authenticated');
}
const typeDefs = /* GraphQL */ `
  type User {
    id: ID!
    email: String!
    name: String
  }
  type AuthPayload {
    token: String!
    user: User!
  }
  type Query {
    me: User
    users: [User!]!
  }
  type Mutation {
    signup(email: String!, name: String, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }
`;
const resolvers = {
    Query: {
        me: async (_parent, _args, context) => {
            const userId = getUserId(context);
            const cacheKey = `user:${userId}`;
            // 1. Intentar obtener desde Redis
            const cachedUser = await redis.get(cacheKey);
            if (cachedUser) {
                return JSON.parse(cachedUser);
            }
            // 2. Obtener desde la base de datos
            const user = await prisma.user.findUnique({
                where: { id: userId },
            });
            if (!user) {
                return null;
            }
            // 3. Guardar en Redis (TTL 60s)
            await redis.set(cacheKey, JSON.stringify(user), {
                EX: 60,
            });
            return user;
        },
        users: () => prisma.user.findMany(),
    },
    Mutation: {
        signup: async (_parent, args) => {
            const password = await bcrypt.hash(args.password, 10);
            const user = await prisma.user.create({
                data: { ...args, password },
            });
            const token = jwt.sign({ userId: user.id }, APP_SECRET);
            return { token, user };
        },
        login: async (_parent, args) => {
            const user = await prisma.user.findUnique({ where: { email: args.email } });
            if (!user) {
                throw new Error('No such user found');
            }
            const valid = await bcrypt.compare(args.password, user.password);
            if (!valid) {
                throw new Error('Invalid password');
            }
            const token = jwt.sign({ userId: user.id }, APP_SECRET);
            return { token, user };
        },
    },
};
const schema = createSchema({
    typeDefs,
    resolvers,
});
const yoga = createYoga({ schema });
const server = createServer(yoga);
async function startServer() {
    await redis.connect();
    server.listen(port, () => {
        console.info(`Server is running on http://localhost:${port}/graphql`);
    });
}
startServer().catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
});
