import {GET,PUT,DELETE,POST} from 'utils/request.js';

export function login({data}) {
  return POST({api: '/api/login',data})
}
export function oneArticle({data}) {
  return GET({api: '/api/article',data})
}
export function personalArticle({data}) {
  return GET({api: '/api/user/article',data})
}
export function updateArticles({data}) {
  return PUT({api: '/api/article',data})
}
export function createArticles({data}) {
  return POST({api: '/api/article',data})
}
export function deleteArticles({data}) {
  return DELETE({api: '/api/article',data})
}
export function getAllArticle({data}) {
  return GET({api: '/api/article',data})
}

