import Vue from 'vue'
import VueRouter from 'vue-router'
import NsaHome from '../views/NsaHome'

Vue.use(VueRouter)

const routes = [
{
  path: '/',
  name: 'Home',
  component: NsaHome
},
{
  path: '/about',
  name: 'About',
  component: () => import('../views/NsaAbout.vue')
},
{
  path: '/project',
  name: 'Project',
  component: () => import('../views/NsaProject.vue')
},
{
  path: '/blog',
  name: 'Blog',
  component: () => import('../views/NsaBlog.vue')
},
{
  path: '/blog/:post',
  name: 'Post',
  component: () => import('../views/NsaPost.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
