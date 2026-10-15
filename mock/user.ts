import type { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

export default [
  {
    url: '/api/users',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: Mock.mock({
          'list|5': [
            {
              'id|+1': 1,
              username: '@cname',
              'role|1': ['user', 'admin'],
              token: '123456',
            },
          ],
        }).list,
      }
    },
  },
] as MockMethod[]
