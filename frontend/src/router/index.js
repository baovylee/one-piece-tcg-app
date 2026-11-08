import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import PackOpeningView from "../views/PackOpenningView.vue";
import CollectionView from "../views/CollectionView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/packs',
        name: 'packs',
        component: PackOpeningView,
    },
    {
        path: '/collection',
        name: 'collection',
        component: CollectionView,
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router