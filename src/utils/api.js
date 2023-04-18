import http from '@/service/http'

/**
 *
 * @param {登录} data
 * @returns
 */
export const POSTlogin = (data) => {
  return http({ url: 'login', method: 'POST', data })
}

export const POSTloginOut = () => {
  return http({ url: 'loginOut', method: 'POST' })
}

/**
 *
 * @returns 左边车边栏
 */
export const GETgetMenuList = () => {
  return http({ url: 'getMenuList', method: 'GET' })
}
