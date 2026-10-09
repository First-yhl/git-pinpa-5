import {defineStore} from 'pinia'
import {ref} from 'vue'
 
export const useAppStore = defineStore('app',()=>{
    const isCollapse = ref(false)   // 桌面/平板：侧栏折叠
    const isMobileOpen = ref(false) // 手机：抽屉开关
    return {isCollapse, isMobileOpen}
})