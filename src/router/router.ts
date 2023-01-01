import { createRouter, createWebHistory, Router } from 'vue-router'
import HomeComponent from '../components/contents/HomeComponent.vue'
import PortfolioComponent from '../components/contents/PortfolioComponent.vue'
import NewPostComponent from '../components/contents/NewPostComponent.vue'

export default (): Router => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: HomeComponent,
        meta: {
          active: true,
          admin: false
        }
      },
      {
        path: '/portfolio',
        name: 'Portfolio',
        component: PortfolioComponent,
        meta: {
          active: true,
          admin: true
        }
      },
      {
        path: '/new-post',
        name: 'New Post',
        component: NewPostComponent,
        meta: {
          active: true,
          admin: true
        }
      }
    ]
  })

  // interceptors
  // const interceptors = [{
  //   name: 'adminPage',
  //   validate: (route: RouteLocation) => {
  //     const valid = Boolean(route.meta.admin)
  //     if (valid) void router.push('/')
  //     return false
  //   }
  // },
  // {
  //   name: 'unknown_path',
  //   validate: (route: RouteLocation) => {
  //     if (router.getRoutes().find(x => x.path === route.path) == null) void router.push('/')
  //     return true
  //   }
  // }]

  // router.beforeEach((to, _from, next) => {
  //   interceptors.forEach((item) => {
  //     if (!item.validate(to)) next(false)
  //     else next()
  //   })
  // })

  return router
}
