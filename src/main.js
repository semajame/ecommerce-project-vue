import "./assets/style.css";

import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";

import App from "./App.vue";

import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import router from "./router";

import ToastService from "primevue/toastservice";
import Toast from "primevue/toast"; // Import the Toast component

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.use(router);
app.use(ToastService);

app.component("Toast", Toast);
app.use(MotionPlugin);
app.mount("#app");
