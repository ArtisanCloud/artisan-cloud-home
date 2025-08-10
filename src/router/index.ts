import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const Home = () => import('../pages/Home.vue');
const Products = () => import('../pages/Products.vue');
const Cases = () => import('../pages/Cases.vue');
const Contact = () => import('../pages/Contact.vue');

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home },
  { path: '/products', name: 'products', component: Products },
  { path: '/cases', name: 'cases', component: Cases },
  { path: '/contact', name: 'contact', component: Contact }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});