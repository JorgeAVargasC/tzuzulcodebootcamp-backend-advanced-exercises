FROM node

ENV NODE_ENV="docker"

WORKDIR /app

COPY package*.json .

RUN npm install

COPY /src .

EXPOSE 4000

CMD ["node","index.js"]