/*
 * @Description: 
 * @Author: linchen13
 * @Date: 2021-08-18 11:31:45
 * @LastEditTime: 2021-11-18 10:16:45
 * @LastEditors: linchen13
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts';
import './index.css'
import {
    Calendar,
    ConfigProvider,
  } from "vant";
  import 'vant/lib/index.css';
// import 'lib-flexible/flexible'
const app = createApp(App)
app.use(router)
app
  .use(Calendar)
  .use(ConfigProvider)
app.mount('#app')
