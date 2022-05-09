import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
import Message from "@/views/Message";

import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/index'
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/message',
        name: 'Message',
        component: Message
    },
    {
        path: '/index',
        name: 'Index',
        component: Index
    }]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router