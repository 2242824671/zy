//书写管理模块接口
import request from '@/utils/request'
import type { TradeMarkResponseData, TradeMark } from './type'
enum API {
  //获取已有品牌接口
  TRADEMARK_URL = '/admin/product/baseTrademark/',
  //添加一个品牌
  //修改品牌地址
  ADDTRADEMARK_URL = '/admin/product/baseTrademark/save',
  //修改已有品牌
  UPDATETRADEMARK_URL = '/admin/product/baseTrademark/update',
  //删除已有品牌
  DELETE_URL = '/admin/product/baseTrademark/remove/',
}
//获取已有组件的接口方法
//page:获取第几页-- 默认第一页
//limit 获取第几个已有品牌的数据
export const reqHasTrademark = (page: number, limit: number) =>
  request.get<any, TradeMarkResponseData>(
    API.TRADEMARK_URL + `${page}/${limit}`,
  )

//添加与修改已有品牌接口方法
export const reqAddOrUpdatemark = (data: TradeMark) => {
  //修改已有品牌数据
  if (data.id) {
    return request.put<any, any>(API.UPDATETRADEMARK_URL, data)
  } else {
    //新增品牌
    return request.post<any, any>(API.ADDTRADEMARK_URL, data)
  }
}

//删除某一个已有品牌
export const reqDeleteTrademark = (id: number) =>
  request.delete<any>(API.DELETE_URL + id)
