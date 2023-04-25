FROM node:18-alpine

# 设置工作目录
WORKDIR /app

RUN npm i -g pnpm

COPY . .

RUN pnpm i

RUN pnpm run build

# 暴露端口
EXPOSE 3000

# 启动应用程序
CMD [ "pnpm", "run", "start:prod" ]
