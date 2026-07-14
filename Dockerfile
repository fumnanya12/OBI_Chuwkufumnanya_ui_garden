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