import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//导入组件路由
const Login = () => import('views/login/Login.vue')
const Register = () => import('views/register/Register.vue')
const Forget = () => import('views/forget/Forget.vue')

const Home = () => import('views/home/Home.vue')
const AllArticles = () => import('views/home/homechildren/AllArticles.vue')
const PersonalArticle = () => import('views/home/homechildren/PersonalArticle.vue')
const Detail = () => import('views/Detail.vue')

const routes = [
  {
    path: '/',
    redirect: '/login'
  }, 
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component:Register
  },
  {
    path: '/forget',
    component:Forget
  },
  {
    path: '/home',
    component:Home,
    redirect: '/personalarticle',
    children:[
      {
        path: '/personalarticle',
        component:PersonalArticle
      },
      {
        path: '/allarticles',
        component:AllArticles
      },
      {
        path: '/detail',
        component:Detail
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

//添加导航守卫/钩子函数
// router.beforeEach((to,from,next) => {
//   //如果访问的是登录页
//   if(to.path === '/login') return next()
//   //保存登陆后的token值
//   const tokenStr = window.sessionStorage.getItem('token')
//   //没有token则强制跳转到登录页
//   if(!tokenStr) return next('/login')
//   //存在tokenStr
//   next()
// })

//导出
export default router