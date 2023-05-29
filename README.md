# 个人账户管理系统

安装依赖

```shell
pnpm install
```

创建文件 .env

```
# 服务器启动端口
PORT=3000
```

创建文件 .env.dev 用户本地环境配置

```
MYSQL_HOST=
MYSQL_PORT=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DATABASE=
AES_KEY=
```

创建 .env.prod 生产环境配置

```
MYSQL_HOST=mysql-db
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DATABASE=quasar
AES_KEY=
```

## docker 部署

安装完 docker 后, 运行项目根目录下 `deploy.sh`

```shell
./deploy.sh
```

## 客户端访问 mysql 容器

```
127.0.0.1:3307
```

## 执行脚本命令

```
pnpm run execute [command]
```

## 特性

- [x] 钱包登录
- [x] 数据库每日备份
- [ ] 多链助记词, 由助记词衍生钱包
- [ ] 钱包资产
