import Axios from 'axios';
import Storage from 'utils/storage.js';
import router from 'router/index.js';
import qs from 'qs';

const instance = Axios.create({
  baseURL: process.env.VUE_APP_URL === 'development' ? 'http://127.0.0.1:3000' : 'http://127.0.0.1:3001',
  timeout: 3000
});

//添加请求拦截器
instance.interceptors.request.use(config => {
  //发送请求之前做些什么
  return config;
},error => {
  //对请求错误做些什么
  return Promise.reject(error);
});

//添加响应拦截器
instance.interceptors.response.use(response => {
  //对响应数据做些什么
  return response;
},error => {
  //对响应错误做些什么
  return Promise.reject(error);
});

class Api {
  constructor() {}
  static do(method,url,data) {
    const headers = {
      Accept: 'application/json',
            Prgama: 'no-cache',
            'Cache-Control' : 'no-cache',
            Expires: 0,
            'Content-Type' : 'application/json;charset=utf-8'
    }
    return new Promise((resolve,reject) => {
      instance({
        method,
        url,
        params:data,
        headers:headers
      }).then(res => {
        if(res.ok) {
          resolve(res);
        } else if(res.code === 10002) {
          //登录状态失效
          reject(new Error(`token失效`));
        } else {
          if(res.code) {
            router.currentRoute.path !== 'login' && 
            router.replace({
              path: 'login',
              query: { redirect:router.currentRoute.path},
            })
            reject(new Error(`${res.code}: ${res.msg}`));
          }
        }
      }).catch(err => {
        reject(err)
      })
    })
  }
}
export function GET({api,data}){return Api.do('get',api,data)}
export function PUT({api,data}){return Api.do('put',api,data)}
export function DELETE({api,data}){return Api.do('delete',api,data)}
export function POST({api,data}){return Api.do('post',api,data)}