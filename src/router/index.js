/*import Vue from 'vue';*/
/*import VueRouter from 'vue-router';*/
import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import NotFound from '../views/NotFound.vue'

/*Vue.use(VueRouter);*/

const routes = [
    { path: '/', name: 'Home', component: defineAsyncComponent(() => import('../views/HomeView.vue')) },
    { path: '/personajes', name: 'Personajes', component: defineAsyncComponent(() => import('../views/PersonajeList.vue')), alias: ['/people', '/characters'] },
    { path: '/personaje/:personajeId', name: 'Personaje', component: defineAsyncComponent(() => import('../views/PersonajePerson.vue')), props: true },
    { path: '/contacto', name: 'Contacto', component: defineAsyncComponent(() => import('../views/ContactoForm.vue')) },
    { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound }
   // { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound } //con esta peticion funciona pero es mas lenta
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router
/*
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
*/