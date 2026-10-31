import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
  RouteRecordRaw,
} from "vue-router";

const Home = () => import("../pages/Home.vue");
const Products = () => import("../pages/Products.vue");
const ProductDetail = () => import("../pages/ProductDetail.vue");
const Cases = () => import("../pages/Cases.vue");
const CaseDetail = () => import("../pages/CaseDetail.vue");
const Contact = () => import("../pages/Contact.vue");
const ContactByEmail = () => import("../pages/ContactByEmail.vue");

const routes: RouteRecordRaw[] = [
  { path: "/", name: "home", component: Home },
  {
    path: "/services",
    name: "services",
    component: () => import("../pages/Services.vue"),
  },
  {
    path: "/developers",
    name: "developers",
    component: () => import("../pages/Developers.vue"),
  },
  { path: "/products", name: "products", component: Products },
  {
    path: "/products/powerx-base",
    alias: "/products/powerx",
    name: "powerx",
    component: () => import("../pages/PowerX.vue"),
  },
  { path: "/products/:slug", name: "product-detail", component: ProductDetail },
  { path: "/cases", name: "cases", component: Cases },
  { path: "/cases/:slug", name: "case-detail", component: CaseDetail },
  { path: "/contact", name: "contact", component: Contact },
  {
    path: "/contact-by-email",
    name: "contact-by-email",
    component: ContactByEmail,
  },
  { path: "/index.html", redirect: "/" },
  {
    path: "/:staticPath(.*)/index.html",
    redirect: (to) => ({
      path: `/${String(to.params.staticPath || "")}`,
      query: to.query,
      hash: to.hash,
    }),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../pages/NotFound.vue"),
  },
];

export const createSiteRouter = (server = false) =>
  createRouter({
    history: server ? createMemoryHistory() : createWebHistory(),
    routes,
    scrollBehavior(to, _from, savedPosition) {
      if (savedPosition) return savedPosition;
      if (to.hash) return { el: to.hash, top: 100 };
      return { top: 0 };
    },
  });
