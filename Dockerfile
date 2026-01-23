FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat
RUN corepack enable && corepack prepare pnpm@latest --activate

# 1. Prune: Scope to @repo/api and its deps
FROM base AS pruner
WORKDIR /app
COPY . .
RUN npx turbo prune --scope=@repo/api --docker

# 2. Builder: Install deps and build
FROM base AS builder
WORKDIR /app
ENV NODE_ENV=development

# Copy locked configuration
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

# Install dependencies
RUN pnpm install

# Copy source code and build
COPY --from=pruner /app/out/full/ .
RUN pnpm turbo build
RUN pnpm prune --prod

# 3. Runner: Setup production image
FROM base AS runner
WORKDIR /app

# Don't run as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Copy the entire app state from builder
COPY --from=builder --chown=nextjs:nodejs /app .

ENV PORT=4000
ENV NODE_ENV=production

EXPOSE 4000

CMD ["node", "apps/api/dist/main.js"]
