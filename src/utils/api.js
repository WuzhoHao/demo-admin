import http from '@/service/http'

export const POSTlogin = (data) => {
  return http({ url: 'login', method: 'POST', data })
}
