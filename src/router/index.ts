/*
 * @Description: 
 * @Author: linchen13
 * @Date: 2021-11-06 17:51:08
 * @LastEditTime: 2021-11-09 19:22:10
 * @LastEditors: linchen13
 */
//现在创建router的方式与vue2.x的版本已经很不同了
import {createRouter, createWebHashHistory} from 'vue-router';
const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: () => import('../views/lessonCenter/index.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(), //替代之前的mode，是必须的
    routes
});
export default router;