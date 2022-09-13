import {createRouter, createWebHashHistory, RouteRecordRaw, createWebHistory} from "vue-router";
import {defineAsyncComponent} from "vue";
//createRouter函数中声明了一些全局钩子所需的变量和函数，如addRoute等；
//createWebHashHistory 路由模式路径带#号
//RouteRecordRaw类型校验，为了规范ts开发，增加路由对象类型限制
const routes:Array<RouteRecordRaw> = [
    {
        //以下按照自己的项目所需路径填写
        path:'/',
        name:'app',
        component:defineAsyncComponent(()=>import('./App.vue'))//路由懒加载，优化访问。
    }
];
const router = createRouter({
    history:createWebHashHistory(),//使用history模式，
    routes:routes,
});
export default router;
