import Vue from 'vue'
import VueRouter from 'vue-router'

// 首页，订单，我的主页面
const Home = () => import('../views/home/Home')
const Order = () => import('../views/order/Order')
const Profile = () => import('../views/profile/Profile')

// 我的  分页面
const RiderRecruit = () => import('../views//profile/childComps/cooperate/RiderRecruit')
const MerchantsSettled = () => import('../views/profile/childComps/cooperate/MerchantsSettled')
const CommentCenter = () => import('../views/profile/childComps/comment/CommentCenter')
const RiderOrder = () => import('../views/profile/childComps/riderorder/RiderOrder')
const MyProfile = () => import('../views/profile/childComps/myprofile/MyProfile')
const ShippingAddress = () => import('../views/profile/childComps/myprofile/ShippingAddress')
const NewAdd = () => import('../views/profile/childComps/myprofile/NewAdd')


// 商家页面
const Merchants = () => import('../views/merchants/Merchants')
const Goods = () => import('../views/merchants/components/goods/Goods')
const Ratings = () => import('../views/merchants/components/ratings/Ratings')
const Seller = () => import('../views/merchants/components/seller/Seller') 
const ConfirmOrder = () => import('../views/merchants/components/confirmorder/ConfirmOrder')



//服务页面
const Service = () => import('../views/home/childComps/service/Service')
const PurchaseAgent = () => import('../views/home/childComps/service/childComps/PurchaseAgent')
const TakeDelivery = () => import('../views/home/childComps/service/childComps/TakeDelivery')
const SendDelivery = () => import('../views/home/childComps/service/childComps/SendDelivery')
const TakeFile = () => import('../views/home/childComps/service/childComps/TakeFile')

const OrderComment = () => import('../views/order/childComps/OrderComment')

// 消息
const Message = () => import('../views/message/Message')
const MessagePage = () => import('../views/message/MessagePage')



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
    path: '/ordercomment',
    component: OrderComment
  },
  //  我的  页面路由配置
  {
    path: '/riderrecruit',
    component: RiderRecruit
  },
  {
    path: '/merchantssettled',
    component: MerchantsSettled
  },
  {
    path: '/commentcenter',
    component: CommentCenter
  },
  {
    path: '/riderorder',
    component: RiderOrder
  },
  {
    path: '/myProfile',
    component: MyProfile
  },
  {
    path: '/shippingaddress',
    component: ShippingAddress
  },
  {
    path: '/newadd',
    component: NewAdd
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
  },
  {
    path: '/confirmorder',
    component: ConfirmOrder
  },
  {
    path: '/service',
    component: Service,
    children: [
      {
        path: '',
        redirect: '/service/takedelivery'
      },
      {
        path: '/service/takedelivery',
        component: TakeDelivery
      },
      {
        path: '/service/purchaseagent',
        component: PurchaseAgent
      },
      {
        path: '/service/senddelivery',
        component: SendDelivery
      },
      {
        path: '/service/takefile',
        component: TakeFile
      }
    ]
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/messagepage',
    component: MessagePage
  }
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
