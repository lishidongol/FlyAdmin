import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import router from "./router";

const app = createApp(App)

app.use(router)
app.use(ElementPlus, {
    size: 'small',
    zIndex: 3000,
    locale: zhCn
})
app.mount('#app')

