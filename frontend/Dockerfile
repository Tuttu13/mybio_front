FROM node:20-alpine

WORKDIR /apps/frontend

COPY . /apps/frontend

RUN npm install
RUN npm run build

CMD ["npm", "start"]
