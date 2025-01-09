import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobView from "@/views/jobs/JobView.vue";
import JobDetailView from "@/views/jobs/JobDetailView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about-us',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobView
  },
  {
    path: '/jobs/:id',
    name: 'job-detail',
    component: JobDetailView,
    props: true
  },
  // {
  //   path: 'all-jobs',
  //   redirect: '/jobs'
  // },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
