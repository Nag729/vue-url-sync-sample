import { createApp } from "vue";
import { Quasar, Loading } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

import App from "./App.vue";
const app = createApp(App);

app.use(Quasar, {
  plugins: {
    Loading,
  },
});

app.mount("#app");
