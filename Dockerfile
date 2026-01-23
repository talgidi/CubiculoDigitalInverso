FROM node:18-alpine AS base
WORKDIR /app

# Required for Prisma on Alpine
RUN apk add --no-cache libc6-compat

# Enable Corepack + fixed PNPM version
RUN corepack enable && corepack prepare pnpm@10.28.1 --activate


# =========================
# Builder
# =========================
FROM base AS builder

# Copy monorepo (context = root)
COPY . .

# Install deps
RUN pnpm install --frozen-lockfile

# Generate Prisma Client
RUN pnpm --filter @repo/db exec prisma generate

# Build API only
RUN pnpm --filter @repo/api build


# =========================
# Runner
# =========================
FROM base AS runner

# Non-root user
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nodejs
USER nodejs

# Copy only what runtime needs
COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 4000

CMD ["node", "apps/api/dist/main.js"]
