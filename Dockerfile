FROM nginx:1.17.1-alpine
COPY /dist/rest-client usr/share/nginx/html
