FROM node:16

WORKDIR /usr/src/app

COPY . .
RUN npm ci
RUN npm run build
VOLUME [ "/usr/src/app" ]

CMD ["npm", "start"]