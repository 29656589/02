FROM node:14 as build
WORKDIR /app

COPY package.json .
RUN npm --registry=https://registry.npmmirror.com install
COPY . /app
RUN npm run build

# 生产容器
FROM nginx:1.16.0-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
