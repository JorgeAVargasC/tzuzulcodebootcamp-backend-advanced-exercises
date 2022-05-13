FROM node

ENV NODE_ENV="docker"

WORKDIR /app

COPY package*.json .

RUN npm install

# Si se hace un cambio en /src se sincroniza en el contenedor
COPY /src ./src

EXPOSE 4000

CMD ["npm","run","dev"]