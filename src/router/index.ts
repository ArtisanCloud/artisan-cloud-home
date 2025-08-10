import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const Home = () => import('../pages/Home.vue');
const Products = () => import('../pages/Products.vue');
const ProductDetail = () => import('../pages/ProductDetail.vue');
const Cases = () => import('../pages/Cases.vue');
const CaseDetail = () => import('../pages/CaseDetail.vue');
const Contact = () => import('../pages/Contact.vue');

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home },
  { path: '/products', name: 'products', component: Products },
  { path: '/products/:slug', name: 'product-detail', component: ProductDetail },
  { path: '/cases', name: 'cases', component: Cases },
  { path: '/cases/:slug', name: 'case-detail', component: CaseDetail },
  { path: '/contact', name: 'contact', component: Contact }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});