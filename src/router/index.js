import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import ResetPassword from '../views/ResetPassword.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/reset',
    name: 'ResetPassword',
    component: ResetPassword
  }
]

const router = new VueRouter({
  routes
})

export default router