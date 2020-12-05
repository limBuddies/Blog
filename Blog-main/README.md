# Blog

![Docker Image](https://github.com/limBuddies/Blog/workflows/Docker%20Image/badge.svg)

基于 Mirage-Starter-Kit 构建的微型博客。

![Mirage](mirage.png)

## 运行

### 后端

```bash
cd server
npm install
npm run start
```

### 前端

``` bash
cd web
npm install
npm run serve
```

### 联调

```bash
cd web
npm install
npm run build
cd ../server
mv public public_bk
mv ../web/dist public
npm install
npm run start
```
