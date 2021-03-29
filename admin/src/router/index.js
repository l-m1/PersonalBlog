import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//导入组件路由
const Login = () => import('views/login/Login.vue')
const Register = () => import('views/register/Register.vue')
const Forget = () => import('views/forget/Forget.vue')

const Home = () => import('views/home/Home.vue')
const Host = () => import('views/host/Host.vue')
const Current = () => import('views/search/Current.vue')
const About = () => import('views/about/About.vue')

//发现页管理
const itemFirst = () => import('views/search/currentchild/itemFirst.vue')
const itemSecond = () => import('views/search/currentchild/itemSecond.vue')
const itemThree = () => import('views/search/currentchild/itemThree.vue')
const itemFour = () => import('views/search/currentchild/itemFour.vue')
const itemFive = () => import('views/search/currentchild/itemFive.vue')
const itemSix = () => import('views/search/currentchild/itemSix.vue')
const itemSeven = () => import('views/search/currentchild/itemSeven.vue')
const itemEight = () => import('views/search/currentchild/itemEight.vue')


const First = () => import('components/content/personalarticle/First.vue')
const Detail = () => import('components/content/personalarticle/Detail.vue')
const Add = () => import('components/content/personalarticle/Add.vue')
const Edit = () => import('components/content/personalarticle/Edit.vue')

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
  },
  {
    path: '/host',
    component:Host,
  },
  {
    path: '/current',
    component:Current
  },
  {
    path: '/about',
    component:About,
  },
  {
    path:'/search/itemFirst',
    component:itemFirst
  },
  {
    path:'/search/itemSecond',
    component:itemSecond
  },
  {
    path:'/search/itemThree',
    component:itemThree
  },
  {
    path:'/search/itemFour',
    component:itemFour
  },
  {
    path:'/search/itemFive',
    component:itemFive
  },
  {
    path:'/search/itemSix',
    component:itemSix
  },
  {
    path:'/search/itemSeven',
    component:itemSeven
  },
  {
    path:'/search/itemEight',
    component:itemEight
  },
  {
    path:'/first',
    component:First
  },
  {
    path:'/detail',
    component:Detail
  },
  {
    path:'/add',
    component:Add
  },
  {
    path:'/edit',
    component:Edit
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

//通过vue-router提供的钩子函数beforeEach()
router.beforeEach((to, from, next) => {
  if (to.meta.login) {
    window.sessionStorage.removeItem('token')
  } else {
    next()
  }
})

// //afterEach进入组件之后，当然，就没有next了，已经进入了组件
router.afterEach((to, from) => {
  if (to.meta.title) {
    //当进入了组件后，如果meta里有title就设置title(注意，这个位置document前面需要加上window才能访问)
    window.document.title = to.meta.title;
    console.log(from)
  } else {
      window.document.title = 'Blog'
    }
})

//导出
export default router