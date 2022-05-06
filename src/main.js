import { createApp } from 'vue'
import App from './App.vue'

import router from "./router";
import store from "@/store";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './mock'



// 设置路由拦截
router.beforeEach((to, from, next) => {
    let name = store.state.name
    // 如果cookie没有过期或者store中有name值,则允许访问直接通过。否则就让用户登录
    if (name) {
        store.commit('loginIn', name)
        console.log('0000000',store.state.name)
        next()
    } else {
        if (to.path === '/login') {
            console.log('----++',store.state.name)
            next()
        } else {
            next({
                name: 'Login'
            })
            store.commit('loginOut')
        }
    }
})

router.afterEach(() => {})
createApp(App).use(router).use(ElementPlus).use(store).mount('#app');
