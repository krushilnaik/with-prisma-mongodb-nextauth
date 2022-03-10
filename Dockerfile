FROM node:16-alpine

WORKDIR /app

COPY package.json .

COPY prisma ./prisma

RUN npm install

EXPOSE 3000 5555

COPY . .

CMD [ "npm", "run", "dev" ]
