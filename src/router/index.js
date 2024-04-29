import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import ResetPassword from '../views/ResetPassword.vue';
import SignUp from '../views/SignUp.vue';
import UserMainPage from '../views/UserMainPage.vue';
import SavingAccount from '../views/SavingAccount.vue';

Vue.use(VueRouter);

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
  },
  {
    path: '/user',
    name: 'UserMainPage',
    component: UserMainPage,
    children: [
      {
        path: '2-1',
        component: SavingAccount,
        meta: { title: 'savings account' }
      }
    ]
  },
  // {
  //   path: '/admin',
  //   component: AdminMainPage,
  //   children: [
  //     {
  //       path: 'user',
  //       component: UserManagement
  //     },
  //     {
  //       path: 'account',
  //       component: AccountManagement
  //     },
  //     {
  //       path: 'loan',
  //       component: LoanManagement
  //     }
  //   ]
  // }
];

const router = new VueRouter({
  routes
});

export default router;