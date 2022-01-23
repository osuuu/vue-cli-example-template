/**
 * 接口地址封装
 * Github: https://github.com/osuuu
 */

import request from '@/utils/request'

// get接口示例
export function getExample(params) {
  return request({
    url: '/example',
    method: 'get',
    params
  })
}
// put接口示例
export function putExample(data) {
  return request({
    url: '/example',
    method: 'put',
    data
  })
}
// post接口示例
export function postExample(data) {
  return request({
    url: '/example',
    method: 'post',
    data
  })
}
// delete接口示例
export function delExample(params) {
  return request({
    url: '/example',
    method: 'delete',
    params
  })
}
