import { defineStore } from 'pinia'
import type { Cart } from '../types/index'
import { computed, ref } from 'vue'

export const useCartStore = defineStore('cart',()=>{
    const cartList = ref<Cart[]>([
         {
        id: 1,
        name: 'iPhone 17',
        price: 5999,
        count: 1,
        img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20smartphone%20product%20photo%20black%20body%20colorful%20screen%20white%20background%20e-commerce&image_size=square',
    },
    {
        id: 3,
        name: '鼠标',
        price: 299,
        count: 1,
        img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wireless%20computer%20mouse%20product%20photo%20black%20white%20background%20e-commerce&image_size=square',
    },
    {
        id: 2,
        name: '机械键盘',
        price: 499,
        count: 1,
        img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mechanical%20keyboard%20product%20photo%20black%20keycaps%20white%20background%20e-commerce&image_size=square',
    },
    ])
    const totalCount = computed(()=>{
        return cartList.value.reduce((pre,cur)=>pre+cur.count,0)
    })
    const totalPrice = computed(()=>{
        return cartList.value.reduce((pre,cur)=>pre+cur.price*cur.count,0)
    })

    const addCart = (item:Cart)=>{
        const existItem = cartList.value.find((i)=>i.id === item.id)
        if(existItem){
            existItem.count += item.count
        }else{
            cartList.value.push(item)
        }
    }
    const removeOneCart = (item:Cart)=>{
        const existItem = cartList.value.find((i)=>i.id === item.id)
        if(existItem?.count === 1){
            cartList.value = cartList.value.filter((i)=>i.id !== item.id)
        }else{
            existItem!.count -= 1
        }
    }

    const clearCart = ()=>{
        cartList.value = []
    }
    const removeCart = (item:Cart)=>{
        cartList.value = cartList.value.filter((i)=>i.id !== item.id)
    }
    return {cartList,totalCount,totalPrice,addCart,removeOneCart,clearCart,removeCart}
})