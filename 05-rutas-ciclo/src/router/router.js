import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-guard'

const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/*webpackChunkName: "Pokemon Layout"*/ '@/modules/pokemon/layouts/PokemonLayout'),
        children: [
            { 
                path: 'home',
                name: 'pokemon-home',
                component: () => import(/*webpackChunkName: "ListPage"*/ '@/modules/pokemon/pages/ListPage') 
            },
            { 
                path: 'about',
                name: 'pokemon-about',
                component: () => import(/*webpackChunkName: "AboutPage"*/ '@/modules/pokemon/pages/AboutPage') 
            },
            { 
                path: 'pokemonid/:id',
                name: 'pokemon-id',
                component: () => import(/*webpackChunkName: "PokemonPage"*/ '@/modules/pokemon/pages/PokemonPage.vue'),
                props: ( route ) => {
                    const { id } = route.params
                    return isNaN( Number(id) ) ? {id: 1} : { id: Number(id) }
                }
            },
            {
                path: '',
                name: 'pokemon-redirect',
                redirect: {name: 'pokemon-about'}
            },
        ]
    },  
    
    //DBZ: Layout

    {
        path: '/dbz',
        name: 'dbz',
        beforeEnter: [ isAuthenticatedGuard ],
        component: () => import(/*webpackChunkName: "DragonBallLayout"*/ '@/modules/dbz/layouts/DragonBallLayout'),
        children: [
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import(/*webpackChunkName: "Characters"*/ '@/modules/dbz/pages/Characters')
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import(/*webpackChunkName: "About"*/ '@/modules/dbz/pages/About')
            },
            {
                path: '',
                name: 'dbz-redirect',
                redirect: {name: 'dbz-characters'}
            },
        ]
    },
    {
        path: '',
        redirect: {name: 'pokemon-about'}
    },
        
    { 
        path: '/:pathMatch(.*)*',
        component: () => import(/*webpackChunkName: "PageNotFound"*/ '@/modules/shared/pages/NoPageFound') 
    },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

// Guard Global - Sincrono
// router.beforeEach( (from, to, next) {   

//     const random = Math.random() * 100
    
    // if (random > 50) {
    //     console.log('autenticado');
    //     next()
    // } else {
    //     console.log(random, 'Bloqueado por beforeEachGuard');
    //     next({name: 'pokemon-about'})
    // }

// })


//Guard Global - Asincrono
// const canAccess = () => {
//     return new Promise( resolve => {
//         const random = Math.random() * 100

//         if (random > 50) {
//             console.log('Autenticado - CanAccess');
//             resolve(true)
//         } else {
//             console.log(random, 'Bloqueado por beforeEachGuard - CanAccess');
//             resolve(false)
//         }
//     } )
// }

// router.beforeEach( async (to, from, next) => {
//     const authorized = await canAccess()

//     authorized
//         ? next()
//         : next({name: 'pokemon-about'})    
// })

export default router