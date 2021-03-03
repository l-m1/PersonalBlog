import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//导入组件路由
const Login = () => import('views/login/Login.vue')
const Register = () => import('views/register/Register.vue')
const Forget = () => import('views/forget/Forget.vue')

const Home = () => import('views/home/Home.vue')
const Hello = () => import('views/hello/Hello.vue')
const AllArticles = () => import('views/home/homechildren/AllArticles.vue')
const Read = () => import('views/home/homechildren/Read.vue')
//二级菜单 
const HTML = () => import('components/content/admin/Html.vue')
const CSS = () => import('components/content/admin/Css.vue')
const JS = () => import('components/content/admin/Js.vue')
const VueJs = () => import('components/content/admin/VueJs.vue')
const React = () => import('components/content/admin/React.vue')
const Java = () => import('components/content/server/Java.vue')
const MySql = () => import('components/content/server/MySql.vue')
const SuanFa = () => import('components/content/server/SuanFa.vue')
const DataBase = () => import('components/content/zhineng/DataBase.vue')
const Git = () => import('components/content/utils/Git.vue')
const Vscode = () => import('components/content/utils/Vscode.vue')
const People = () => import('components/content/code/People.vue')
const MianShi = () => import('components/content/code/MianShi.vue')
const Other = () => import('components/content/other/Other')

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
    path: '/hello',
    component:Hello
  },
  {
    path: '/home',
    component:Home,
    redirect: '/read',
    children:[
      {
        path: '/allarticles',
        component:AllArticles
      },
      {
        path: '/read',
        component:Read
      },
      {
        path: '/html',
        component:HTML
      },
      {
        path: '/css',
        component:CSS
      },
      {
        path: '/js',
        component:JS
      },
      {
        path: '/vuejs',
        component:VueJs
      },
      {
        path: '/react',
        component:React
      },
      {
        path: '/java',
        component:Java
      },
      {
        path: '/mysql',
        component:MySql
      },
      {
        path: '/suanfa',
        component:SuanFa
      },
      {
        path: '/database',
        component:DataBase
      },
      {
        path: '/git',
        component:Git
      },
      {
        path: '/vscode',
        component:Vscode
      },
      {
        path: '/people',
        component:People
      },
      {
        path: '/mianshi',
        component:MianShi
      },
      {
        path: '/other',
        component:Other
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