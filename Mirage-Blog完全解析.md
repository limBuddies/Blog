# Mirage-Blog 完全解析

**Mirage-Blog** 是基于 `Mirage-Starter-Kit` 实现的微型博客系统，实现了用户登录、注册，发帖、删贴、评论、删除评论等功能。其功能很少，代码流程简单，适合作为 `Vue.js` 与 `Express` 入门学习资料。本文将分别详解前端、后端代码实现，为理解代码、学习技术提供帮助。

+ Mirage-Blog 完全解析
  + 项目概述
    + 功能设计
    + 代码结构
  + 代码解读
    + 首页
    + 用户管理
    + 文章与评论
  + 总结

## 项目概述

### 功能设计

+ 用户访问网站显示主页，显示所有文章列表。

+ 点击文章标题可以进入文章详情页，显示文章标题、作者、内容、评论等信息。

+ 从导航栏可以进入登录页，登录页可以跳转到注册页。

+ 完成注册并登录后，可以在文章详情页进行评论。

+ 已登录的用户可以删除自己的文章或评论。

+ 登录后导航栏会出现登出按钮，并出现发布文章入口。

### 代码结构

以下代码树省略了部分文件：



+ web（前端代码）

  + public（静态文件）
    + favicon.ico（网站图标）
    + index.html（入口页面）

  + src（代码）
    + assets（图片等静态素材）
    + components（通用组件）
      + Navbar.vue（导航栏组件）
    + pages（页面组件）
      + About.vue（“关于”页面）
      + Compose.vue（“发表”页面）
      + Home.vue（主页）
      + Login.vue（”登录“页面）
      + NotFound.vue（”404“页面）
      + Signup.vue（”注册“页面）
      + Title.vue（文章详情页）
    + App.vue（根组件）
    + common.vue（全局常量定义）
    + main.js（Javascript 入口代码）
    + routes.js（路由表）
  + vue.config.js（环境配置文件）



+ server（后端代码）
  + bin（启动代码）
    + www.js（Javascript 入口代码）
  + controllers（控制器、请求处理函数）
    + article.js（文章相关操作）
    + comment.js（评论相关操作）
    + login.js（登录操作）
    + signup.js（注册操作）
    + token.js（登录口令暂存）
  + db（数据库代码）
    + db.js（初始化代码）
    + model.js（数据模型定义）
  + routes（路由）
    + api.js（接口路由表）
    + history.js（用于支持前端 history 模式的路由）
  + app.js（启动代码）



## 代码解读

解读不了。