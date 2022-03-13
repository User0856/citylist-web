FROM node:latest AS builder

RUN mkdir -p /app

WORKDIR /app

COPY . .

# RUN apt install bash
RUN npm install
RUN npm run build --prod

# CMD ["npm", "start"]

FROM nginx:alpine
COPY src/nginx/etc/conf.d/default.conf /etc/nginx/conf/default.conf
COPY --from=builder app/dist/rest-client usr/share/nginx/html
