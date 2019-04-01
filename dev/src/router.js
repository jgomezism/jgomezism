import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/us",
      name: "us",
      // route level code-splitting
      // this generates a separate chunk (us.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "us" */ "./views/Us.vue")
    },
    {
      path: "/services",
      name: "services",
      component: () => import("./views/Services.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/Contact.vue")
    },
    {
      path: "/cases",
      name: "cases",
      component: () => import("./views/Cases.vue")
    },
    {
      path: "/docs",
      name: "docs",
      component: () => import("./views/Docs.vue")
    }
  ]
});