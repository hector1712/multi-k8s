FROM node:16-alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install -g npm@8.5.2
RUN npm install -g create-react-app
RUN npm install --save react react-dom
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
#Causa 504 Gateway Time-out
COPY --from=builder /app/build /usr/share/nginx/html