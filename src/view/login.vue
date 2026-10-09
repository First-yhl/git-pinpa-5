<template>
    <div class="app">
        <div class="container">
            <h2>后台管理系统</h2>
            <p class="tip">请输入账号和密码登录</p>

            <div class="form">
                <div class="form-item">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#909399"/>
                    </svg>
                    <input type="text" placeholder="请输入账号" />
                </div>
                <div class="form-item">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9V6ZM18 20H6V10H18V20ZM12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17Z" fill="#909399"/>
                    </svg>
                    <input type="password" placeholder="请输入密码" />
                </div>

                <button class="login-btn" @click="handleLogin">登录</button>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const handleLogin = () => {
    localStorage.setItem('token2', '123456')
    router.push('/layouts/dashboard')
}
</script>

<style scoped>
.app {
    height: 100vh;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 400px;
    background-color: #fff;
    border-radius: 10px;
    padding: 40px 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

h2 {
    text-align: center;
    margin-bottom: 10px;
    color: #303133;
}

.tip {
    text-align: center;
    margin-bottom: 30px;
    color: #909399;
    font-size: 14px;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.form-item {
    position: relative;
    display: flex;
    align-items: center;
}

.icon {
    position: absolute;
    left: 12px;
    width: 18px;
    height: 18px;
    pointer-events: none;
}

.form-item input {
    width: 100%;
    height: 42px;
    padding: 0 12px 0 38px;
    border: 1px solid #dcdfe6;
    border-radius: 6px;
    font-size: 14px;
    color: #606266;
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.2s;
}

.form-item input:focus {
    border-color: #409eff;
}

.login-btn {
    width: 100%;
    height: 42px;
    margin-top: 6px;
    background-color: #409eff;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.login-btn:hover {
    background-color: #66b1ff;
}

.account {
    text-align: center;
    margin-top: 8px;
    color: #909399;
    font-size: 13px;
}
</style>