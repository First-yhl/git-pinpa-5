<template>
    <div class="layout">
        <sidebar></sidebar>
        <div class="main">
            <narbar></narbar>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import narbar from '../components/narbar.vue';
import sidebar from '../components/sidebar.vue';

</script>

<style scoped>
.layout {
    display: flex;
    height: 100vh;
    overflow: hidden;
}

.main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

 .content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    background-color: #f5f5f5;
} 
</style>