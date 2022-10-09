import "@quasar/extras/material-icons/material-icons.css";
import { Loading, Quasar } from "quasar";
import quasarLang from "quasar/lang/ja";
import "quasar/src/css/index.sass";
import { createApp } from "vue";
import router from "./router";

import App from "./App.vue";
const app = createApp(App);

app.use(router);
app.use(Quasar, {
  plugins: {
    Loading,
  },
  lang: quasarLang,
});

app.mount("#app");
