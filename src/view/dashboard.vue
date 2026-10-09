<template>
    <div class="dashboard">
        <h2 class="title">Dashboard</h2>

        <!-- 统计卡片 -->
        <div class="stat-cards">
            <div class="stat-card stat-blue">
                <svg class="stat-icon" viewBox="0 0 24 24" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 11C17.66 11 19 9.66 19 8C19 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 11 9.66 11 8C11 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.33 13 0 14.34 0 17V19H16V17C16 14.34 10.67 13 8 13ZM16 13C15.5 13 14.94 13.05 14.34 13.14C15.36 13.83 16 14.82 16 16V19H24V17C24 14.34 18.67 13 16 13Z" fill="currentColor"/>
                </svg>
                <div class="stat-info">
                    <p class="stat-label">用户总数</p>
                    <p class="stat-value">{{ userStore.userList.length }}</p>
                </div>
            </div>

            <div class="stat-card stat-green">
                <svg class="stat-icon" viewBox="0 0 24 24" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.3L19.5 8L12 11.7L4.5 8L12 4.3ZM4 9.7L11 13.4V19.7L4 16.2V9.7ZM13 19.7V13.4L20 9.7V16.2L13 19.7Z" fill="currentColor"/>
                </svg>
                <div class="stat-info">
                    <p class="stat-label">商品总数</p>
                    <p class="stat-value">4</p>
                </div>
            </div>

            <div class="stat-card stat-orange">
                <svg class="stat-icon" viewBox="0 0 24 24" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 18C5.9 18 5 18.9 5 20C5 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15 18.9 15 20C15 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="currentColor"/>
                </svg>
                <div class="stat-info">
                    <p class="stat-label">购物车数量</p>
                    <p class="stat-value">{{ cartStore.totalCount }}</p>
                </div>
            </div>

            <div class="stat-card stat-purple">
                <svg class="stat-icon" viewBox="0 0 24 24" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.14 12.94C19.18 12.63 19.2 12.32 19.2 12C19.2 11.68 19.18 11.37 19.14 11.06L21.03 9.59C21.25 9.42 21.33 9.11 21.19 8.84L19.28 5.54C19.14 5.29 18.85 5.18 18.58 5.29L16.13 6.29C15.65 5.9 15.12 5.59 14.54 5.37L14.3 2.83C14.27 2.46 13.96 2.2 13.6 2.2H10.4C10.04 2.2 9.73 2.46 9.7 2.83L9.46 5.37C8.88 5.59 8.35 5.9 7.87 6.29L5.42 5.29C5.15 5.18 4.86 5.29 4.72 5.54L2.81 8.84C2.67 9.11 2.75 9.42 2.97 9.59L4.86 11.06C4.82 11.37 4.8 11.68 4.8 12C4.8 12.32 4.82 12.63 4.86 12.94L2.97 14.41C2.75 14.58 2.67 14.89 2.81 15.16L4.72 18.46C4.86 18.71 5.15 18.82 5.42 18.71L7.87 17.71C8.35 18.1 8.88 18.41 9.46 18.63L9.7 21.17C9.73 21.54 10.04 21.8 10.4 21.8H13.6C13.96 21.8 14.27 21.54 14.3 21.17L14.54 18.63C15.12 18.41 15.65 18.1 16.13 17.71L18.58 18.71C18.85 18.82 19.14 18.71 19.28 18.46L21.19 15.16C21.33 14.89 21.25 14.58 21.03 14.41L19.14 12.94ZM12 15.6C10.01 15.6 8.4 13.99 8.4 12C8.4 10.01 10.01 8.4 12 8.4C13.99 8.4 15.6 10.01 15.6 12C15.6 13.99 13.99 15.6 12 15.6Z" fill="currentColor"/>
                </svg>
                <div class="stat-info">
                    <p class="stat-label">系统状态</p>
                    <p class="stat-value">正常</p>
                </div>
            </div>
        </div>

        <!-- 下方两栏 -->
        <div class="bottom">
            <div class="welcome-card">
                <h3 class="welcome-title">欢迎回来，admin</h3>
                <p class="welcome-tip">这是你的后台管理系统</p>

                <div class="welcome-illustration">
                    <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=isometric%20business%20illustration%2C%20people%20working%20with%20dashboard%20charts%20and%20data%20analytics%2C%20flat%20design%2C%20blue%20and%20orange%20colors%2C%20clean%20modern%2C%20white%20background&image_size=landscape_4_3" alt="欢迎插图" />
                </div>
            </div>

            <div class="quick-card">
                <h3 class="quick-title">快捷入口</h3>
                <div class="quick-list">
                    <RouterLink class="quick-item" to="/layouts/users">
                        <svg class="quick-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 11C17.66 11 19 9.66 19 8C19 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 11 9.66 11 8C11 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.33 13 0 14.34 0 17V19H16V17C16 14.34 10.67 13 8 13ZM16 13C15.5 13 14.94 13.05 14.34 13.14C15.36 13.83 16 14.82 16 16V19H24V17C24 14.34 18.67 13 16 13Z" fill="currentColor"/>
                        </svg>
                        <span>用户管理</span>
                        <svg class="arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </RouterLink>

                    <RouterLink class="quick-item" to="/layouts/produces">
                        <svg class="quick-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.3L19.5 8L12 11.7L4.5 8L12 4.3ZM4 9.7L11 13.4V19.7L4 16.2V9.7ZM13 19.7V13.4L20 9.7V16.2L13 19.7Z" fill="currentColor"/>
                        </svg>
                        <span>商品管理</span>
                        <svg class="arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </RouterLink>

                    <RouterLink class="quick-item" to="/layouts/profile">
                        <svg class="quick-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
                        </svg>
                        <span>个人中心</span>
                        <svg class="arrow" viewBox="0 0 24 24" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { useUserStore } from '../store/user'
import { useCartStore } from '../store/cart'

const userStore = useUserStore()
const cartStore = useCartStore()    
</script>

<style scoped>
.dashboard {
    padding: 10px;
}

.title {
    font-size: 22px;
    color: #303133;
    margin-bottom: 20px;
    font-weight: 600;
}

/* 统计卡片 */
.stat-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 20px;
}

.stat-card {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid transparent;
}

.stat-icon {
    flex-shrink: 0;
}

.stat-blue {
    background-color: #e8f3ff;
    color: #409eff;
    border-color: #c6e2ff;
}

.stat-green {
    background-color: #e8f8ee;
    color: #36c96b;
    border-color: #c7eed6;
}

.stat-orange {
    background-color: #fff4e6;
    color: #f7941d;
    border-color: #ffe2bf;
}

.stat-purple {
    background-color: #f3edff;
    color: #9266f0;
    border-color: #e0d4ff;
}

.stat-label {
    font-size: 14px;
    margin: 0 0 6px 0;
}

.stat-value {
    font-size: 26px;
    font-weight: 700;
    margin: 0;
}

/* 下方两栏 */
.bottom {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}

.welcome-card,
.quick-card {
    background-color: #fff;
    border-radius: 10px;
    padding: 24px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
}

.welcome-title {
    font-size: 18px;
    color: #303133;
    margin: 0 0 8px 0;
    font-weight: 600;
}

.welcome-tip {
    font-size: 14px;
    color: #909399;
    margin: 0 0 20px 0;
}

.welcome-illustration {
    display: flex;
    justify-content: center;
    align-items: center;
}

.welcome-illustration img {
    width: 80%;
    max-width: 360px;
    height: auto;
    display: block;
}


.quick-title {
    font-size: 18px;
    color: #303133;
    margin: 0 0 16px 0;
    font-weight: 600;
}

.quick-list {
    display: flex;
    flex-direction: column;
}

.quick-item {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    box-sizing: border-box;
    padding: 14px 0;
    border-bottom: 1px solid #f0f2f5;
    color: #606266;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.2s;
}

.quick-item:last-child {
    border-bottom: none;
}

.quick-item:hover {
    color: #409eff;
}

.quick-icon {
    color: #909399;
    flex-shrink: 0;
}

.quick-item:hover .quick-icon {
    color: #409eff;
}

.quick-item span {
    flex: 1;
}

.arrow {
    color: #c0c4cc;
}

.quick-item:hover .arrow {
    color: #409eff;
}
@media screen and (max-width: 991px) {
    /* 平板：统计卡片 2 列 */
    .stat-cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 767px) {
    /* 手机：统计卡片 2 列 */
    .stat-cards {
        grid-template-columns: 1fr 1fr;
        gap: 12px;
    }

    /* 下方两栏改成上下堆叠 */
    .bottom {
        grid-template-columns: 1fr;
    }

    /* 内容区内边距收小 */
    .dashboard {
        padding: 4px;
    }

    .welcome-card,
    .quick-card {
        padding: 16px;
    }

    /* 标题和数值稍微缩小，避免小屏拥挤 */
    .title {
        font-size: 18px;
    }

    .stat-value {
        font-size: 22px;
    }
}
</style>