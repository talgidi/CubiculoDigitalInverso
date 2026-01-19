FROM node:18-alpine AS base

FROM base AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
# Set working directory
WORKDIR /app
# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate
# Copy entire monorepo
COPY . .
# Install dependencies
RUN pnpm install
# Generate prisma client
RUN pnpm --filter @repo/db exec prisma generate
# Build api
RUN pnpm --filter @repo/api build

FROM base AS runner
WORKDIR /app

# Don't run as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs
USER nodejs

COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages ./packages
COPY --from=builder /app/package.json ./package.json

EXPOSE 4000

CMD ["node", "dist/main.js"]
