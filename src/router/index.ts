import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../view/login.vue')
        }
        ,
        {
            path: '/layouts',
            component: () => import('../layouts/applayouts.vue'),
            meta: {
                requireAuth: true
            }
            ,
            children: [
                {
                    path: 'dashboard',
                    component: () => import('../view/dashboard.vue'),
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: 'profile',
                    component: () => import('../view/profile.vue'),
                    meta: {
                        requireAuth: true
                    }
                }
                ,
                {
                    path: 'users',
                    component: () => import('../view/users.vue'),
                    meta: {
                        requireAuth: true
                    }
                },
                {
                    path: 'produces',
                    component: () => import('../view/produces.vue'),
                    meta: {
                        requireAuth: true
                    }   
                },
                {
                    path: 'cart',
                    component: () => import('../view/cart.vue'),
                    meta: {
                        requireAuth: true
                    }
                },
            ]
        },
        {
            path: '/Notaken.vue',
            component: () => import('../view/Notaken.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('../view/404.vue')
        },
    ]
})
router.beforeEach((to)=>{
    if(to.meta.requireAuth && !localStorage.getItem('token2')){
        return '/Notaken.vue'
    }
    return true
})
export default router
