<template>
    <div class="not-found">
        <div class="content">
            <!-- 大号 404 -->
            <h1 class="code">404</h1>
            <h2 class="title">页面走丢了</h2>
            <p class="desc">抱歉，你访问的页面不存在或已被删除</p>

            <button class="home-btn" @click="handleHome">返回登录页</button>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const handleHome = () => {
    router.push('/')
}
</script>

<style scoped>
.not-found {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f2f5;
    padding: 20px;
    box-sizing: border-box;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.code {
    margin: 0;
    font-size: 120px;
    font-weight: 800;
    line-height: 1;
    color: #3b6ff5;
    letter-spacing: 4px;
}

.title {
    margin: 16px 0 10px;
    font-size: 24px;
    font-weight: 700;
    color: #1f2937;
}

.desc {
    margin: 0 0 32px;
    font-size: 14px;
    color: #909399;
}

.home-btn {
    height: 46px;
    padding: 0 36px;
    border: none;
    border-radius: 8px;
    background-color: #3b6ff5;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.home-btn:hover {
    background-color: #5a86f7;
}
</style>
