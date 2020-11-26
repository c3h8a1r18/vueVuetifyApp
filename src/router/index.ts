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
    path: "/clients",
    name: "client",
    component: Clients
  },
  {
    path: "/users",
    name: "users",
    component: Users
  },
  {
    path: "/appointments",
    name: "appointments",
    component: Appointments
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
