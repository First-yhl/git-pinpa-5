import request from './request'
import type { Good } from '../types/index'

// 获取商品列表
export const getProduceList = () => {
  return request.get<Good[], Good[]>('/produces')
}
