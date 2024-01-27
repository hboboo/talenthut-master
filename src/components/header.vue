<template>
  <div class="header">
    <div class="collapse-btn" @click="collapseChange">
      <el-icon v-if="sidebar.collapse"><Expand /></el-icon>
      <el-icon v-else><Fold /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useSidebarStore } from '../store/sidebar'

  const sidebar = useSidebarStore()

  const collapseChange = () => {
    sidebar.handleCollapse()
  }

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
</style>