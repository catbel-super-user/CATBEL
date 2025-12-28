import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Dashboard from "../pages/Dashboard.vue";
import Buyer from "../pages/Buyer.vue";
import { useAuthStore } from "../store/auth";

const routes = [
  { path: "/", component: Login },

  {
    path: "/dashboard",
    component: Dashboard,
    meta: { roles: ["ADMIN", "MANAGER"] }
  },

  {
    path: "/buyer",
    component: Buyer,
    meta: { roles: ["BUYER"] }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to) => {
  const auth = useAuthStore();

  // Allow login page always
  if (to.path === "/") return true;

  // Not logged in
  if (!auth.user) return "/";

  // Role restriction
  if (to.meta.roles && !to.meta.roles.includes(auth.user.role)) {
    return "/";
  }

  return true;
});

export default router;
