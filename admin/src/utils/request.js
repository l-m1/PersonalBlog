import Axios from 'axios';
import Storage from 'utils/storage.js';
import router from 'router/index.js';

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

class Api{
	constructor() {
	}
	static do(method, url, data) {
		const headers={
			Authorization:`Bearer ${window.sessionStorage.getItem('token')}`,
			Accept: 'application/json',
            Pragma: 'no-cache',
           'Cache-Control': 'no-cache',
            Expires: 0,
           'Content-Type': 'application/json; charset=utf-8'
		}
		return new Promise((resolve, reject) => {
			instance({
				method,
				url,
				data,
				headers:headers
			}).then(res=>{
        //console.log(res);
        resolve(res)
			}).catch(err=>{
				reject(err)
			})
		})
	}
}
export function GET({api,data}){return Api.do('get',api,data)}
export function PUT({api,data,}){return Api.do('put',api,data,)}
export function DELETE({api,data,}){return Api.do('delete',api,data,)}
export function POST({api,data,}){return Api.do('post',api,data,)}