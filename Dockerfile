FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat

FROM base AS builder
WORKDIR /app

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@10.28.1 --activate

# Copy monorepo
COPY . .

# Install deps (workspace-aware)
RUN pnpm install --frozen-lockfile

# Build DB first
RUN pnpm --filter @repo/db build

# Generate Prisma client
RUN pnpm --filter @repo/db exec prisma generate

# Build API
RUN pnpm --filter @repo/api build

FROM base AS runner
WORKDIR /app

# Non-root user
RUN addgroup -g 1001 -S nodejs \
    && adduser -S nodejs -u 1001
USER nodejs

# Copy only runtime artifacts

COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/apps/api/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 4000
CMD ["node", "dist/main.js"]
