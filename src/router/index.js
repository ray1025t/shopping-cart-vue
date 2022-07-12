import Vue from 'vue'
import VueRouter from 'vue-router'
import ShoppingCart from './../views/ShoppingCart.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: 'shoppingCart'
  },
  {
    path: '/shoppingCart',
    name: 'shopping-cart',
    component: ShoppingCart
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('./../views/NotFound.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
