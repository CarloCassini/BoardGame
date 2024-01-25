import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";

// importo il css di bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// importo le regole javascript di bootstap
import * as bootstrap from "bootstrap";

// collego il foglio di scss
import "./assets/scss/style.scss";

createApp(App).use(router).mount("#app");
