import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from "@/views/Details.vue";
import Create from "@/views/Create.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/posts/:id',
        name: 'Details',
        component: Details,
        props: true
    },
    {
        path: '/create',
        name: 'Create',
        component: Create
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
