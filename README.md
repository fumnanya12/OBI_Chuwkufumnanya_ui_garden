# UC Component Library – Assignment 13

Project Overview
This project extends the UI Component Library created in Assignment 12 by integrating automated code quality checks and Continuous Integration (CI) practices. The application uses React, TypeScript, Storybook, Vitest, ESLint, Prettier, Husky, GitHub Actions, Docker, and Nginx.

The purpose of this assignment is to ensure that all code committed to the project follows formatting standards, passes linting requirements, successfully passes automated tests, and can be deployed through a production Docker container.

## Prerequisites

The following software must be installed:

- Node.js 22or later
- npm
- Git
- Docker Desktop

Verify installations:

```bash
node -v
npm -v
git --version
docker --version
```

## Create Dockerfile

```bash
# Stage 1: Build the Storybook production files
FROM node:22-alpine AS build

WORKDIR /obi_fumnanya_ui_garden_build_checks

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build-storybook


# Stage 2: Serve the production files with Nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build \
  /obi_fumnanya_ui_garden_build_checks/storybook-static \
  /usr/share/nginx/html

EXPOSE 8018

CMD ["nginx", "-g", "daemon off;"]
```

## Create .dockerignore

```bash
node_modules
dist
.git
```

## Nginx Configuration

A custom Nginx configuration was created to:

- listen on port 8018
- serve Storybook static files
- support direct URL navigation

```bash
server {
    listen 8018;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Build Docker image

```bash
docker build -t <image name > .
```

## Run Docker container on port 8083

```bash
docker run --name <container name > -p 8018:8018 <image name >
```

Open:

```bash
http://localhost:8018
```
