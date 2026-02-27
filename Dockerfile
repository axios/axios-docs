# ============================================
# Multi-stage Dockerfile for axios-docs
# ============================================
# Best practices applied:
# - Multi-stage builds for smaller final image
# - Non-root user for security
# - Layer caching optimization
# - .dockerignore for build context efficiency
# - Health checks for production readiness
# - Proper signal handling with tini
# ============================================

# ==================== BUILD STAGE ====================
FROM node:20-alpine AS builder

# Install build dependencies (sharp requires these)
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    vips-dev

# Set working directory
WORKDIR /app

# Copy package files first (layer caching)
COPY package*.json ./

# Install dependencies
# Using ci for reproducible builds
RUN npm ci --only=production=false

# Copy source files
COPY . .

# Build the static site
RUN npm run build

# ==================== PRODUCTION STAGE ====================
FROM nginx:alpine AS production

# Install tini for proper signal handling
RUN apk add --no-cache tini

# Create non-root user for nginx
RUN addgroup -g 1001 -S appgroup && \
    adduser -u 1001 -S appuser -G appgroup

# Copy custom nginx configuration
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Copy built static files from builder stage
COPY --from=builder /app/public /usr/share/nginx/html

# Set ownership
RUN chown -R appuser:appgroup /usr/share/nginx/html && \
    chown -R appuser:appgroup /var/cache/nginx && \
    chown -R appuser:appgroup /var/log/nginx && \
    touch /run/nginx.pid && \
    chown appuser:appgroup /run/nginx.pid

# Switch to non-root user
USER appuser

# Expose port 8080 (non-privileged port)
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8080/ || exit 1

# Use tini as init system
ENTRYPOINT ["/sbin/tini", "--"]

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

# ==================== DEVELOPMENT STAGE ====================
FROM node:20-alpine AS development

# Install build dependencies
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    vips-dev

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies including devDependencies
RUN npm ci

# Copy source files
COPY . .

# Expose development server port
EXPOSE 8080

# Start development server
CMD ["npm", "run", "server"]
