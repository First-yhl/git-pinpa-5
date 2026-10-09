<template>
    <div class="users">
        <!-- 顶部：标题 + 添加按钮 -->
        <div class="header">
            <h2 class="page-title">用户管理</h2>
            <button class="add-btn" @click="handleAddClick">
                <span class="plus">+</span> 添加用户
            </button>
        </div>

        <!-- 表格卡片 -->
        <div class="table-card">
            <div class="table-wrapper">
                <table class="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>用户名</th>
                        <th>角色</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in userStore.userList" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.username }}</td>
                        <td>{{ item.role }}</td>
                        <td>
                            <button class="delete-btn" @click="handleDeleteClick(item.id)">删除</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>

            <!-- 分页 -->
            <div class="pagination">
                <span class="total">共 {{ userStore.userList.length }} 条</span>
                <button class="page-btn">&lt;</button>
                <button class="page-btn active">1</button>
                <button class="page-btn">&gt;</button>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { useUserStore } from '../store/user'
const userStore = useUserStore()

const handleAddClick = () => {
    userStore.userList.push({
        id: userStore.userList.length + 1,
        username: '新用户' + (userStore.userList.length + 1),
        role: 'user',
        token: '123456'
    })
}

const handleDeleteClick = (id: number) => {
    const user = userStore.userList.find(item => item.id === id)
    if (user) {
        userStore.userList.splice(userStore.userList.indexOf(user), 1)
    }
}
</script>

<style scoped>
.users {
    width: 100%;
}

/* ===== 顶部 ===== */
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.page-title {
    margin: 0;
    font-size: 26px;
    font-weight: 700;
    color: #1f2937;
}

.add-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    height: 44px;
    padding: 0 22px;
    border: none;
    border-radius: 8px;
    background-color: #3b6ff5;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.add-btn:hover {
    background-color: #5a86f7;
}

.plus {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
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

.user-table {
    width: 100%;
    border-collapse: collapse;
    /* min-width: 320px; */
}

.user-table th,
.user-table td {
    padding: 22px 16px;
    text-align: center;
    font-size: 15px;
}

.user-table th {
    font-weight: 700;
    color: #1f2937;
}

.user-table td {
    color: #4b5563;
    border-top: 1px solid #f0f0f0;
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

/* ===== 分页 ===== */
.pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    padding: 24px;
}

.total {
    margin-right: 8px;
    font-size: 15px;
    font-weight: 700;
    color: #1f2937;
}

.page-btn {
    width: 40px;
    height: 40px;
    border: 1px solid #dcdfe6;
    border-radius: 8px;
    background-color: #fff;
    color: #606266;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.2s;
}

.page-btn:hover {
    border-color: #409eff;
    color: #409eff;
}

.page-btn.active {
    border-color: #3b6ff5;
    background-color: #3b6ff5;
    color: #fff;
}

@media (max-width: 767px) {
    .page-title { font-size: 20px; }
    .add-btn { height: 38px; padding: 0 14px; font-size: 14px; }
    .user-table th , .user-table td { padding : 14px 12px ; font-size : 14px ; }
    .pagination { justify-content : center; padding : 16px ; flex-wrap : wrap; /* 放不下允许换行 */ } .page-btn { width : 34px ; height : 34px ; }
}
</style>
