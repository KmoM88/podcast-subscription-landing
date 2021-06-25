# docker build . -t kmom/subs-page-podcast:1.0
# docker run -d --name subs-page-container --network host kmom/subs-page-podcast:1.0
FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install -g @ionic/cli
RUN npm install
RUN ionic build --prod -y
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /usr/local/app/www/ /usr/share/nginx/html/
EXPOSE 80
