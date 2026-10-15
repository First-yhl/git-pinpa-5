import request from './request'
import type { User } from '../types/index'

export const getUserList = () => {
  return request.get<User[], User[]>('/users')
}