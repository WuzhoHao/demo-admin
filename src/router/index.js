import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/dashboard',
    children: [
      {
        path: '/sysRoleList',
        name: 'sysRoleList',
        component: () => import('../views/sysRoleList.vue')
      },
      {
        path: '/sysUserList',
        name: 'sysUserList',
        component: () => import('../views/sysUserList.vue')
      },
      {
        path: '/sysMenuList',
        name: 'sysMenuList',
        component: () => import('../views/sysMenuList.vue')
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/dashboard.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('token')) {
    if (to.name == 'login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (to.path != '/login') {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
