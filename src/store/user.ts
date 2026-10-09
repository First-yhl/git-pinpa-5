import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '../types/index'
export const useUserStore = defineStore('user',()=>{
    const userList = ref([
            { id: 1, username: '张三', role: 'user', token: '123456' },
            { id: 2, username: '李四', role: 'user', token: '123456' },
            { id: 3, username: 'admin', role: 'admin', token: '123456' },
    ]as User[])
    return { userList }
})