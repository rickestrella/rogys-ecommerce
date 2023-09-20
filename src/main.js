import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as VueRouter from 'vue-router'

import Index from "./pages/Index.vue"
import ShoppingCart from './pages/ShoppingCart.vue'
import Products from './pages/Products.vue'
import ProductDetail from './pages/ProductDetail.vue'
import Contact from './pages/Contact.vue'
import NotFound from './pages/NotFound.vue'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/cart',
            component: ShoppingCart
        },
        {
            path: '/contact',
            component: Contact
        },
        {
            path: '/products',
            component: Products
        },
        {
            path: '/products/:productId',
            component: ProductDetail,
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFound
        }
    ]
});

createApp(App)
    .use(router)
    .mount('#app')
