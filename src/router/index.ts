import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Clients from "../components/Clients.vue";
import Appointments from "../components/Appointments.vue";
import Users from "../components/Users.vue";
import App from "../App.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: App
  },
  {
    path: "/Clients",
    name: "Clients",
    component: Clients
  },
  {
    path: "/Users",
    name: "Users",
    component: Users
  },
  {
    path: "/Appointments",
    name: "Appointments",
    component: Appointments
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
