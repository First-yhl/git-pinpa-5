<template>
    <div class="notaken">
        <div class="tip-card">
            <!-- 提示图标 -->
            <div class="icon-wrap">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="10" width="16" height="11" rx="2" fill="none" stroke="#3b6ff5" stroke-width="2"/>
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="#3b6ff5" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="12" cy="15.5" r="1.4" fill="#3b6ff5"/>
                    <line x1="12" y1="16.5" x2="12" y2="18.5" stroke="#3b6ff5" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>

            <h1 class="tip-title">没有登录哦</h1>
            <p class="tip-desc">登录后才能访问该页面，请先返回登录</p>

            <button class="login-btn" @click="handleLogin">返回登录页面</button>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const handleLogin = () => {
    router.push('/')
}
</script>

<style scoped>
.notaken {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f2f5;
    padding: 20px;
    box-sizing: border-box;
}

.tip-card {
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 32px;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.icon-wrap {
    width: 88px;
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    border-radius: 50%;
    background-color: #eaf1ff;
}

.tip-title {
    margin: 0 0 10px;
    font-size: 22px;
    font-weight: 700;
    color: #1f2937;
}

.tip-desc {
    margin: 0 0 28px;
    font-size: 14px;
    color: #909399;
    text-align: center;
}

.login-btn {
    width: 100%;
    height: 46px;
    border: none;
    border-radius: 8px;
    background-color: #3b6ff5;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.login-btn:hover {
    background-color: #5a86f7;
}
</style>
