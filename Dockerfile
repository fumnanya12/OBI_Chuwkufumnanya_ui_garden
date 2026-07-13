FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8083

CMD ["npm", "run", "storybook", "--", "--host", "0.0.0.0", "--port", "8083"]