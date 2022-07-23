import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '@/components/contents/HomeComponent.vue'
import PortfolioComponent from '@/components/contents/PortfolioComponent.vue'
import NewPostComponent from '@/components/contents/NewPostComponent.vue'

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
                admin: false
            }
        },
        {
            path: '/new-post',
            name: 'New Post',
            component: NewPostComponent,
            meta: {
                active: true,
                admin: false
            }
        }
    ]
})

//interceptors
let interceptors = [
    {
        name: "adminPage",
        validate: (route) => {
            if(route.meta.admin)router.push('/');
            return !route.meta.admin;
        }
    }
];

router.beforeEach((to, from, next) => {
    interceptors.forEach((item) => {
        if(!item.validate(to)) next(false);
        else next();
    });
});

export default router; 