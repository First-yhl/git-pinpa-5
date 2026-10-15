import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '../types/index'
import { getUserList } from '../api/user'

export const useUserStore = defineStore('user', () => {
  const userList = ref<User[]>([])

  const loadUsers = async () => {
    userList.value = await getUserList()
  }

  return { userList, loadUsers }
})