import {createApp, defineAsyncComponent} from "vue";
import store from "./store.js"
import App from './App.vue'

// dev mode 防止 vite 去除 element-plus 的依赖，remote 无法找打 host's element-plus
import ElementPlus from 'element-plus'

// Uncaught ReferenceError: VueRouter is opnot defined
// VueRouter is not defined
// import {createRouter, createWebHashHistory} from 'vue-router'


// 1. 定义路由组件.
// 也可以从其他文件导入
// const Home = {template: '<div>Home</div>'}
//
// const HomeContent = defineAsyncComponent(() => import("home/Content"));
// const HomeButton = () => import("home/Button");
// const ElementPlus = () => defineAsyncComponent(import("home/ElementPlus.vue"));
// const HomeImages = () => defineAsyncComponent(import("home/Images"));
//
// const CommonLibCounter = defineAsyncComponent(() => import("common-lib/CommonCounter"));
// const CommonLibHeader = defineAsyncComponent(() => import("common-lib/CommonHeader"));

const RouterMainElementPlus = defineAsyncComponent(() => import("router-remote/ElementPlus"));

// // 2. 定义一些路由
// // 每个路由都需要映射到一个组件。
// // 我们后面再讨论嵌套路由。
// const routes = [
//     {path: '/', component: Home},
//     {path: '/common-lib-element', component: CommonLibHeader},
//     {path: '/home-images', component: ElementPlus},
// ]
//
// // 3. 创建路由实例并传递 `routes` 配置
// // 你可以在这里输入更多的配置，但我们在这里
// // 暂时保持简单
// const router = createRouter({
//     // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
//     history: createWebHashHistory(),
//     routes, // `routes: routes` 的缩写
// })

// 5. 创建并挂载根实例
const app = createApp(App)

app.component("router-host-element-plus", RouterMainElementPlus);

//确保 _use_ 路由实例使
//整个应用支持路由。
// app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount("#root");
