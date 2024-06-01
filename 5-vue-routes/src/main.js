import "./assets/main.css";
import router from "./router/index.js";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App).use(router);

app.mount("#app");
