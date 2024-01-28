<template>
  <div class="header">
    <div class="collapse-btn" @click="collapseChange">
      <el-icon v-if="sidebar.collapse"><Expand /></el-icon>
      <el-icon v-else><Fold /></el-icon>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">
      <div class="header-user-con">
        <el-avatar class="user-avatar" :size="30" :src="imgurl" />
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            测试用户id
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>项目中心</el-dropdown-item>
              <el-dropdown-item>个人仓库</el-dropdown-item>
              <el-dropdown-item divided>退出仓库</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSidebarStore } from "../store/sidebar";
import imgurl from "../assets/img/img.jpg";

const sidebar = useSidebarStore();

const collapseChange = () => {
  sidebar.handleCollapse();
};
</script>

<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
}
.collapse-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  float: left;
  padding: 0 21px;
  cursor: pointer;
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
.user-avatar {
  margin-left: 20px;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 9px;
}
</style>
