# Docker Setup for axios-docs

This document describes the Docker configuration for the axios-docs project.

## Quick Start

### Production Build & Run

```bash
# Build and run the production container
docker compose up prod

# Or build separately
docker compose build prod
docker compose up -d prod
```

### Development Mode

```bash
# Run development container with hot reload
docker compose up dev
```

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Multi-Stage Build                     │
├─────────────────────────────────────────────────────────┤
│  Stage 1: Builder                                        │
│  ├── node:20-alpine                                      │
│  ├── Install dependencies                                │
│  └── Build static site → /app/public                     │
├─────────────────────────────────────────────────────────┤
│  Stage 2: Production                                     │
│  ├── nginx:alpine                                        │
│  ├── Copy static files from builder                      │
│  └── Serve on port 8080                                  │
├─────────────────────────────────────────────────────────┤
│  Stage 3: Development                                    │
│  ├── node:20-alpine                                      │
│  ├── Volume mounts for live editing                      │
│  └── http-server on port 8080                            │
└─────────────────────────────────────────────────────────┘
```

## Files

| File                 | Purpose                           |
| -------------------- | --------------------------------- |
| `Dockerfile`         | Multi-stage build configuration   |
| `.dockerignore`      | Excludes files from build context |
| `docker-compose.yml` | Service orchestration             |
| `docker/nginx.conf`  | Production nginx configuration    |

## Best Practices Applied

### Security

- **Non-root user**: Runs as `appuser` (UID 1001)
- **Read-only filesystem**: Production container uses read-only root
- **No new privileges**: Security option prevents privilege escalation
- **Security headers**: X-Frame-Options, X-Content-Type-Options, etc.
- **Hidden nginx version**: `server_tokens off`

### Performance

- **Multi-stage builds**: Final image ~25MB vs ~1GB
- **Alpine base images**: Minimal footprint
- **Gzip compression**: Enabled for text-based assets
- **Cache headers**: Static assets cached for 1 year
- **Layer caching**: package.json copied before source

### Reliability

- **Health checks**: Built-in container health monitoring
- **Tini init**: Proper signal handling and zombie reaping
- **Restart policy**: `unless-stopped` for production

## Commands

### Build

```bash
# Build all stages
docker compose build

# Build specific stage
docker build --target production -t axios-docs:prod .
docker build --target development -t axios-docs:dev .
```

### Run

```bash
# Production
docker compose up prod
docker run -p 8080:8080 axios-docs:prod

# Development (with volume mounts)
docker compose up dev
```

### Debug

```bash
# Shell into running container
docker exec -it axios-docs-prod sh

# View logs
docker compose logs -f prod

# Check health
docker inspect --format='{{.State.Health.Status}}' axios-docs-prod
```

## Environment Variables

The development container supports:

| Variable   | Default       | Description      |
| ---------- | ------------- | ---------------- |
| `NODE_ENV` | `development` | Node environment |

## Ports

| Service     | Internal | External (default) |
| ----------- | -------- | ------------------ |
| Production  | 8080     | 8080               |
| Development | 8080     | 8080               |

## Volumes (Development)

| Host Path   | Container Path      | Purpose                 |
| ----------- | ------------------- | ----------------------- |
| `.`         | `/app`              | Source files            |
| (anonymous) | `/app/node_modules` | Preserve container deps |
