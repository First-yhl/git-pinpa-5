<template>
    <div class="profile">
        <h2 class="page-title">个人信息</h2>

        <!-- 个人信息卡片 -->
        <div class="info-card">
            <img class="avatar" :src="avatar" alt="头像" />
            <div class="info-list">
                <div class="info-row">
                    <span class="label">用户名：</span>
                    <span class="value">admin</span>
                </div>
                <div class="info-row">
                    <span class="label">角色：</span>
                    <span class="value">管理员</span>
                </div>
                <div class="info-row">
                    <span class="label">登录状态：</span>
                    <span class="status-tag">已登录</span>
                </div>
            </div>
        </div>

        <!-- 主题设置卡片 -->
        <div class="theme-card">
            <h3 class="card-title">主题设置</h3>
            <div class="theme-body">
                <div class="current-theme">
                    <span class="label">当前主题：</span>
                    <span class="theme-tag">
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="4" fill="currentColor"/>
                            <g stroke="currentColor" stroke-width="2" stroke-linecap="round">
                                <line x1="12" y1="2" x2="12" y2="4"/>
                                <line x1="12" y1="20" x2="12" y2="22"/>
                                <line x1="2" y1="12" x2="4" y2="12"/>
                                <line x1="20" y1="12" x2="22" y2="12"/>
                                <line x1="4.9" y1="4.9" x2="6.3" y2="6.3"/>
                                <line x1="17.7" y1="17.7" x2="19.1" y2="19.1"/>
                                <line x1="4.9" y1="19.1" x2="6.3" y2="17.7"/>
                                <line x1="17.7" y1="6.3" x2="19.1" y2="4.9"/>
                            </g>
                        </svg>
                        light
                    </span>
                </div>
                <button class="theme-btn">
                    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 3a9 9 0 1 0 9 9 1 1 0 0 0-1-1h-3a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1 7 7 0 0 0-8-8Z" fill="currentColor"/>
                    </svg>
                    切换主题
                </button>
            </div>
        </div>

        <!-- 退出登录 -->
        <div class="logout-card">
            <button class="logout-btn">退出登录</button>
        </div>
    </div>
</template>

<script lang='ts' setup>
const avatar =
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cartoon%20avatar%20portrait%20of%20a%20young%20man%20short%20black%20hair%20blue%20shirt%20flat%20illustration%20soft%20blue%20background&image_size=square'
</script>

<style scoped>
.profile {
    width: 100%;
}

.page-title {
    margin: 0 0 20px;
    font-size: 26px;
    font-weight: 700;
    color: #1f2937;
}

/* 通用卡片 */
.info-card,
.theme-card,
.logout-card {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    margin-bottom: 20px;
}

/* ===== 个人信息卡片 ===== */
.info-card {
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 32px;
}

.avatar {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
    background-color: #dbe6ff;
}

.info-list {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.info-row {
    display: flex;
    align-items: center;
    font-size: 18px;
}

.label {
    color: #606266;
}

.value {
    color: #1f2937;
    font-weight: 600;
}

/* 已登录标签：浅绿底 + 绿字 */
.status-tag {
    padding: 4px 14px;
    border-radius: 8px;
    background-color: #e1f3d8;
    color: #67c23a;
    font-size: 16px;
    font-weight: 600;
}

/* ===== 主题设置卡片 ===== */
.theme-card {
    padding: 24px 32px;
}

.card-title {
    margin: 0 0 20px;
    font-size: 20px;
    font-weight: 700;
    color: #1f2937;
}

.theme-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.current-theme {
    display: flex;
    align-items: center;
    font-size: 17px;
}

/* 当前主题小标签 */
.theme-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
    border-radius: 8px;
    background-color: #f0f2f5;
    color: #606266;
    font-size: 15px;
}

.theme-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 52px;
    padding: 0 32px;
    border: none;
    border-radius: 8px;
    background-color: #3b6ff5;
    color: #fff;
    font-size: 17px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.theme-btn:hover {
    background-color: #5a86f7;
}

/* ===== 退出登录 ===== */
.logout-card {
    padding: 20px;
    margin-bottom: 0;
}

.logout-btn {
    width: 100%;
    height: 52px;
    border: none;
    border-radius: 8px;
    background-color: #f56c6c;
    color: #fff;
    font-size: 17px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.logout-btn:hover {
    background-color: #f78989;
}

/* ===== 手机端响应式 ===== */
@media screen and (max-width: 767px) {
    /* 页面标题缩小 */
    .page-title {
        font-size: 20px;
        margin-bottom: 14px;
    }

    /* 三张卡片内边距收小 */
    .info-card {
        gap: 18px;
        padding: 20px;
    }
    .theme-card {
        padding: 20px;
    }
    .logout-card {
        padding: 16px;
    }

    /* 头像缩小 */
    .avatar {
        width: 72px;
        height: 72px;
    }

    /* 信息行字号、行距收小 */
    .info-list {
        gap: 12px;
    }
    .info-row {
        font-size: 15px;
    }
    .status-tag {
        font-size: 14px;
        padding: 3px 10px;
    }

    /* 卡片标题缩小 */
    .card-title {
        font-size: 17px;
        margin-bottom: 16px;
    }

    /* 主题卡：左右排改成上下堆叠 */
    .theme-body {
        flex-direction: column;
        align-items: stretch;
        gap: 16px;
    }
    .current-theme {
        font-size: 15px;
    }

    /* 切换主题按钮撑满整行 */
    .theme-btn {
        width: 100%;
        justify-content: center;
        height: 46px;
    }

    /* 退出按钮高度微调 */
    .logout-btn {
        height: 46px;
        font-size: 16px;
    }
}
</style>
