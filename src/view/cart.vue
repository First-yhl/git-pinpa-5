<template>
    <div class="cart">
        <h2 class="page-title">我的购物车</h2>

        <div class="table-card">
            <div class="table-wrapper">
                <table class="cart-table">
                <thead>
                    <tr>
                        <th>商品</th>
                        <th>单价</th>
                        <th>数量</th>
                        <th>小计</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in cartStore.cartList" :key="item.id">
                        <!-- 商品：图片 + 名称 -->
                        <td>
                            <div class="goods">
                                <img class="goods-img" :src="item.img" :alt="item.name" />
                                <span class="goods-name">{{ item.name }}</span>
                            </div>
                        </td>
                        <td class="price">¥{{ item.price }}</td>
                        <!-- 数量步进器 -->
                        <td>
                            <div class="stepper">
                                <button class="step-btn" @click="cartStore.removeOneCart(item)">−</button>
                                <span class="step-num">{{ item.count }}</span>
                                <button class="step-btn" @click="cartStore.addCart({...item,count:1})">+</button>
                            </div>
                        </td>
                        <td class="subtotal">¥{{ item.price * item.count }}</td>
                        <td>
                            <button class="delete-btn" @click="cartStore.removeCart(item)">删除</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>

            <!-- 底部结算栏 -->
            <div class="footer">
                <div class="summary">
                    <span class="summary-item">商品数量：<b>{{ cartStore.totalCount }}</b></span>
                    <span class="summary-item">总价：<b class="total-price">¥{{ cartStore.totalPrice }}</b></span>
                </div>
                <div class="footer-btns">
                    <button class="clear-btn" @click="cartStore.clearCart">清空购物车</button>
                    <button class="checkout-btn">去结算</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { useCartStore } from '../store/cart'
const cartStore = useCartStore()
</script>

<style scoped>
.cart {
    width: 100%;
}

.page-title {
    margin: 0 0 20px;
    font-size: 26px;
    font-weight: 700;
    color: #1f2937;
}

/* ===== 表格卡片 ===== */
.table-card {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    overflow: hidden;
}

.table-wrapper {
    overflow-x: auto;
}

.cart-table {
    width: 100%;
    min-width: 640px;
    border-collapse: collapse;
}

.cart-table th,
.cart-table td {
    padding: 20px 24px;
    text-align: left;
    font-size: 15px;
    white-space: nowrap;
}

.cart-table th {
    font-weight: 700;
    color: #1f2937;
}

.cart-table td {
    color: #4b5563;
    border-top: 1px solid #f0f0f0;
}

/* 商品单元格：图片 + 名称横向排列 */
.goods {
    display: flex;
    align-items: center;
    gap: 14px;
}

.goods-img {
    width: 56px;
    height: 56px;
    object-fit: contain;
    border-radius: 8px;
    background-color: #f7f8fa;
}

.goods-name {
    font-size: 16px;
    color: #1f2937;
}

.price,
.subtotal {
    font-weight: 700;
    color: #1f2937;
}

/* ===== 数量步进器 ===== */
.stepper {
    display: inline-flex;
    align-items: center;
    border: 1px solid #dcdfe6;
    border-radius: 8px;
    overflow: hidden;
}

.step-btn {
    width: 38px;
    height: 38px;
    border: none;
    background-color: #fff;
    color: #606266;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
}

.step-btn:hover {
    background-color: #f0f4ff;
    color: #409eff;
}

.step-num {
    min-width: 44px;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    color: #1f2937;
}

/* 删除按钮 */
.delete-btn {
    height: 38px;
    padding: 0 20px;
    border: none;
    border-radius: 6px;
    background-color: #f56c6c;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.delete-btn:hover {
    background-color: #f78989;
}

/* ===== 底部结算栏 ===== */
.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 22px 24px;
    border-top: 1px solid #f0f0f0;
}

.summary {
    display: flex;
    align-items: center;
    gap: 40px;
    font-size: 17px;
    color: #1f2937;
}

.summary-item b {
    font-size: 20px;
}

.total-price {
    color: #f56c6c;
}

.footer-btns {
    display: flex;
    align-items: center;
    gap: 14px;
}

.clear-btn {
    height: 46px;
    padding: 0 26px;
    border: 1px solid #dcdfe6;
    border-radius: 8px;
    background-color: #fff;
    color: #606266;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.2s;
}

.clear-btn:hover {
    border-color: #909399;
    color: #303133;
}

.checkout-btn {
    height: 46px;
    padding: 0 34px;
    border: none;
    border-radius: 8px;
    background-color: #3b6ff5;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.checkout-btn:hover {
    background-color: #5a86f7;
}

/* ===== 手机端响应式 ===== */
@media screen and (max-width: 767px) {
    /* 标题缩小 */
    .page-title {
        font-size: 20px;
        margin-bottom: 14px;
    }

    /* 单元格更紧凑 */
    .cart-table th,
    .cart-table td {
        padding: 14px;
        font-size: 14px;
    }

    /* 商品缩略图缩小 */
    .goods {
        gap: 10px;
    }
    .goods-img {
        width: 44px;
        height: 44px;
    }
    .goods-name {
        font-size: 14px;
    }

    /* 步进器缩小 */
    .step-btn {
        width: 32px;
        height: 32px;
        font-size: 16px;
    }
    .step-num {
        min-width: 36px;
    }

    /* 删除按钮缩小 */
    .delete-btn {
        height: 34px;
        padding: 0 14px;
        font-size: 13px;
    }

    /* 底部结算栏：改成纵向堆叠 */
    .footer {
        flex-direction: column;
        align-items: stretch;
        gap: 14px;
        padding: 16px;
    }

    /* 数量和总价两端对齐 */
    .summary {
        justify-content: space-between;
        gap: 0;
        font-size: 15px;
    }
    .summary-item b {
        font-size: 17px;
    }

    /* 两个按钮各占一半 */
    .footer-btns {
        width: 100%;
    }
    .footer-btns button {
        flex: 1;
        height: 42px;
        padding: 0;
    }
}
</style>

