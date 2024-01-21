FROM node:alpine3.19
WORKDIR /app
COPY package.json .
RUN npm install
COPY . . 
EXPOSE 3100
CMD ["node", "index.js"]
