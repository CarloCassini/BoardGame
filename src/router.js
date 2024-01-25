import { createRouter, createWebHistory } from "vue-router";
// vedi sotto
import AppHome from "./pages/AppHome.vue";
import AppList from "./pages/AppList.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      // in path troviamo l'url che vedremo anche nel browser
      path: "/",
      //   in name troviamo il nome della rotta. è il valore che verrà chiamato dai bottoni che implementano il tag <router-link :to="{name: 'home'}"> </router-link>
      name: "home",
      //quale componente apparirà a questa rotta? lo abbiamo importato nel file router.js? vedi sopra
      component: AppHome,
    },
    {
      // in path troviamo l'url che vedremo anche nel browser
      path: "/list",
      //   in name troviamo il nome della rotta. è il valore che verrà chiamato dai bottoni che implementano il tag <router-link :to="{name: 'home'}"> </router-link>
      name: "list",
      //quale componente apparirà a questa rotta? lo abbiamo importato nel file router.js? vedi sopra
      component: AppList,
    },
  ],
});
export { router };
