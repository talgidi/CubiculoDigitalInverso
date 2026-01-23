FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat

# ======================
# BUILDER
# ======================
FROM base AS builder
WORKDIR /app

# pnpm estable
RUN corepack enable && corepack prepare pnpm@10.28.1 --activate

# copiar monorepo completo
COPY . .

# instalar TODAS las dependencias del workspace
RUN pnpm install --frozen-lockfile

# build ordenado
RUN pnpm --filter @repo/db build
RUN pnpm --filter @repo/db exec prisma generate
RUN pnpm --filter @repo/api build

# ======================
# RUNNER
# ======================
FROM base AS runner
WORKDIR /app

# usuario no root (Back4App-friendly)
RUN addgroup -g 1001 -S nodejs \
    && adduser -S nodejs -u 1001
USER nodejs

# activar pnpm en runner
RUN corepack enable && corepack prepare pnpm@10.28.1 --activate

# copiar SOLO lo necesario para runtime
COPY --from=builder /app/apps/api/dist ./dist
COPY --from=builder /app/apps/api/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

# Copy built node_modules from the builder stage to avoid resolving workspace:* packages
# during a fresh install in the runner stage (this keeps the runtime identical to builder).
COPY --from=builder /app/node_modules ./node_modules

# If you still prefer to install in runner, you can uncomment the following line.
# RUN pnpm install --prod --frozen-lockfile

EXPOSE 4000
CMD ["node", "dist/main.js"]
