import Vue from 'vue'
import VueRouter from 'vue-router'
import NsaHome from '../components/home/NsaHome'

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
  component: () => import('../components/about/NsaAbout.vue')
},
{
  path: '/project',
  name: 'Project',
  component: () => import('../components/project/NsaProject.vue')
},
{
  path: '/blog',
  name: 'Blog',
  component: () => import('../components/blog/NsaBlog.vue')
},
{
  path: '/blog/:post',
  name: 'Post',
  component: () => import('../components/blog/NsaPost.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {x:0, y: 0};
  },
  base: process.env.BASE_URL,
  routes
})

export default router
