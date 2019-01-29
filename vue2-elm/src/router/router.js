import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')

const shop = r => require.ensure([], () => r(require('../page/shop/shop')), 'shop')
const shopDetail = r => require.ensure([], () => r(require('../page/shop/children/shopDetail')), 'shopDetail')
const foodDetail = r => require.ensure([], () => r(require('../page/shop/children/foodDetail')), 'foodDetail')
const shopSafe = r => require.ensure([], () => r(require('../page/shop/children/children/shopSafe')), 'shopSafe')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'miste')
const food = r => require.ensure([], () => r(require('../page/food/food')), 'food')
const profile = r => require.ensure([], () => r(require('../page/profile/profile')), 'profile')

// const info = r => require.ensure([], () => r(require('../page/profile/children/info')), 'info')
// const setusername = r => require.ensure([], () => r(require('../page/profile/children/children/setusername')), 'setusername')
// const address = r => require.ensure([], () => r(require('../page/profile/children/children/address')), 'address')
// const add = r => require.ensure([], () => r(require('../page/profile/children/children/children/add')), 'add')
// const addDetail = r => require.ensure([], () => r(require('../page/profile/children/children/children/children/addDetail')), 'addDetail')

// const service = r => require.ensure([], () => r(require('../page/service/service')), 'service')
// const questionDetail = r => require.ensure([], () => r(require('../page/service/children/questionDetail')), 'questionDetail')
export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/home'
        },
        //首页城市列表页
        {
            path: '/home',
            component: home
        },
          //当前选择城市页
        {
            path: '/city/:cityid',
            component: city
        },
        // 搜索列表中的地址、
        {
            path: '/msite',
            component: msite,
            meta: { keepAlive: true },
        },
        // 商品详情
        {
            path: '/shop',
            component: shop,
            children:[
                {
                    path: 'foodDetail', //食品详情页
                    component: foodDetail,
                },
                {
                  path: 'shopDetail', //商铺详情页
                component: shopDetail,
                  children: [{
                    path: 'shopSafe', //商铺安全认证页
                    component: shopSafe,
                }, ]
                }
            ]
        },
        // 特色商品列表页
        {
            path: '/food',
            component: food,
            children:[{
                path: 'shopDetail', //商铺详情页
                component: shopDetail,
            }]

            
        },
        // 个人信息
        // {
        //     path:"/profile",
        //     component:profile,
        //     children: [{
        //         path: 'info', //个人信息详情页
        //         component: info,
        //         children: [{
        //             path: 'setusername',
        //             component: setusername,
        //         },{
        //             path: 'address',
        //             component: address,     //编辑地址
        //             children:[{
        //                 path:'add',
        //                 component:add,
        //                 children:[{
        //                     path:'addDetail',
        //                     component:addDetail
        //                 }]
        //             }]
        //         }]
        //     },
            // {
            //     path: 'service', //服务中心
            //     component: service,
            // },
        // ]
        // }

    ]
}]
