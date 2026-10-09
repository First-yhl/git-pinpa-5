<template>
    <div class="produces">
        <h2 class="page-title">商品列表</h2>

        <div class="product-grid">
            <div class="product-card" v-for="item in productList" :key="item.id">
                <div class="product-img">
                    <img :src="item.img" :alt="item.name" />
                </div>
                <div class="product-name">{{ item.name }}</div>
                <div class="product-price">¥{{ item.price }}</div>
                <button class="cart-btn" @click="cartStore.addCart({...item,count:1})">加入购物车</button>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
const productList = [
    {
        id: 1,
        name: 'iPhone 17',
        price: 5999,
        img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20smartphone%20product%20photo%20black%20body%20colorful%20screen%20white%20background%20e-commerce&image_size=square',
    },
    {
        id: 2,
        name: '机械键盘',
        price: 499,
        img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mechanical%20keyboard%20product%20photo%20black%20keycaps%20white%20background%20e-commerce&image_size=square',
    },
    {
        id: 3,
        name: '鼠标',
        price: 299,
        img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wireless%20computer%20mouse%20product%20photo%20black%20white%20background%20e-commerce&image_size=square',
    },
    {
        id: 4,
        name: '耳机',
        price: 799,
        img: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=over%20ear%20headphones%20product%20photo%20black%20white%20background%20e-commerce&image_size=square',
    },
]
import { useCartStore } from '../store/cart'
const cartStore = useCartStore()
</script>

<style scoped>
.produces {
    width: 100%;
}

.page-title {
    margin: 0 0 20px;
    font-size: 26px;
    font-weight: 700;
    color: #1f2937;
}

/* 卡片网格：4 列等宽 */
.product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.product-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 20px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

/* 图片区：固定正方形，图片等比居中 */
.product-img {
    width: 100%;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
}

.product-img img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.product-name {
    width: 100%;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 700;
    color: #1f2937;
}

.product-price {
    width: 100%;
    margin-bottom: 16px;
    font-size: 22px;
    font-weight: 700;
    color: #f56c6c;
}

.cart-btn {
    width: 100%;
    height: 44px;
    border: none;
    border-radius: 8px;
    background-color: #3b6ff5;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.cart-btn:hover {
    background-color: #5a86f7;
}
@media (max-width: 767px) {
    .product-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
    }
}
</style>
