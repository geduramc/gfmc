import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '@/components/contents/HomeComponent.vue'
import PortfolioComponent from '@/components/contents/PortfolioComponent.vue'
import routes from '@/assets/routes.json'

console.log(routes);

export default new createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeComponent
        },
        {
            path: '/Portfolio',
            name: 'Portfolio',
            component: PortfolioComponent
        }
    ]
})