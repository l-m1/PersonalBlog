import {GET,PUT,DELETE,POST} from 'utils/request.js'

export function login({data}) {
  return POST({api:'/api/login',data})
}