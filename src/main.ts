import {createApp, provide} from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App)
app.provide('user',{name:'lisi'})
app.mount("#app");
