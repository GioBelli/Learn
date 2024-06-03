import "./assets/main.css";

import { createApp } from "vue";
import router from "./router/index.js";
import App from "./App.vue";

const app = createApp(App).use(router);

app.mount("#app");
