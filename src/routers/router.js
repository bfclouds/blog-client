import Vue from "vue"
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: () => import('views/Home')},
    {path: '/blog', component: () => import('views/Blog')},
    {path: '/about', component: () => import('views/About')},
    {path: '/login', component: () => import('components/common/Login')}
];

let router = new VueRouter({
    routes
});

export default router;
