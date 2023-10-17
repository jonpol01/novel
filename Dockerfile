FROM node:18.18.1 AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* \
    pnpm-lock.yaml* pnpm-workspace.yaml \
    turbo.json ./

# If you are using npm:
RUN yarn global add pnpm && pnpm i
RUN pnpm build

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the project
RUN yarn global add pnpm && pnpm i
RUN pnpm build

# Production image, copy all the files and run next
EXPOSE 3000

# set port
ENV PORT 3000

# set hostname to localhost
ENV HOSTNAME "0.0.0.0"

# set NODE_ENV to production
CMD [ "pnpm", "dev" ]
