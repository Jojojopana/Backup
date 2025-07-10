FROM node:20

WORKDIR /app
COPY . .

ENV PUPPETEER_SKIP_DOWNLOAD true

RUN npm install

CMD ["npm", "start"]
