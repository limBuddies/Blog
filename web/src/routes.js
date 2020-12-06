import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import Title from "@/pages/Title";
// 应用路由表
export default [
    {path: '/', component: Home, meta: {title: '主页'}},
    {path: '/about', component: About, meta: {title: '关于'}},
    // 处理404情况
    {path: '/title', component: Title, meta: {title: '文章标题'}},
    {path: '*', component: NotFound, meta: {title: '404'}},
]