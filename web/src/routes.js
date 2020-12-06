import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import Title from "@/pages/Title";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Compose from "@/pages/Compose";

// 应用路由表
export default [
    {path: '/', component: Home, meta: {title: '主页'}},
    {path: '/about', component: About, meta: {title: '关于'}},
    // 处理404情况
    {path: '/title', component: Title, meta: {title: '文章标题'}},
    {path: '/login', component: Login, meta: {title: '登录'}},
    {path: '/signup', component: Signup, meta: {title: '注册'}},
    {path: '/compose', component: Compose, meta: {title: '创作'}},
    {path: '*', component: NotFound, meta: {title: '404'}},
]