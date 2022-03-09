FROM node:14.4.0-alpine
WORKDIR "/app"
COPY ./package.json ./
RUN npm install -g npm@8.5.1
COPY . .
CMD ["npm", "run", "start"]