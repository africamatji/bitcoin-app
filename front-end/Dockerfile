FROM node:18.13.0-alpine as build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN yarn install

COPY . .

RUN yarn run build

#create nginx server
FROM nginx:1.19-alpine as prod-stage
COPY --from=build /usr/src/app/dist/front-end /usr/share/nginx/html
#COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
