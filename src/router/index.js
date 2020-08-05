import Vue from 'vue'
import VueRouter from 'vue-router'

// 首页，订单，我的主页面
const Home = () => import('../views/home/Home')
const Order = () => import('../views/order/Order')
const Profile = () => import('../views/profile/Profile')

// 我的  分页面
const RiderRecruit = () => import('../views//profile/childComps/RiderRecruit')
const MerchantsSettled = () => import('../views/profile/childComps/MerchantsSettled')

// 首页  分页面
// const Store = () => import('../views/storepage/Store')
// const Goods = () => import('../views/storepage/childComps/storecontent/childComps/Goods')
// const StoreComments = () => import('../views/storepage/childComps/storecontent/childComps/StoreComments')
// const StoreProfile = () => import('../views/storepage/childComps/storecontent/childComps/StoreProfile')

// 商家页面
const Merchants =() => import('../views/merchants/Merchants')
const Goods = () => import('../views/merchants/components/goods/Goods')
const Ratings = () => import('../views/merchants/components/ratings/Ratings')
const Seller = () => import('../views/merchants/components/seller/Seller') 


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/riderrecruit',
    component: RiderRecruit
  },
  {
    path: '/merchantssettled',
    component: MerchantsSettled
  },
  {
    path: '/store',
    component: Merchants,
    children: [
      {
      path: '',
      redirect: '/store/goods'
      },
      {
        path: '/store/goods',
        component: Goods
      },
      {
        path: '/store/comments',
        component: Ratings
      },
      {
        path: '/store/profile',
        component: Seller
      }
    ]
  }
  // {
  //   path: '/store',
  //   component: Store,
  //   children: [
  //     {
  //       path: '',
  //       redirect: '/store/goods'
  //     },
  //     {
  //       path: '/store/goods',
  //       component: Goods
  //     },
  //     {
  //       path: '/store/comments',
  //       component: StoreComments
  //     },
  //     {
  //       path: '/store/profile',
  //       component: StoreProfile
  //     }
  //   ]
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router
