import { request } from 'src/utils/request';
 
// 调用测试
export function getTest() {
    return request({
      url: '/power/stationlist',//此处为自己请求地址
      method: 'get'
    })
  }