<template>
  <div class="sidebar">
    <el-menu
      default-active="1"
      class="el-menu-vertical"
      :collapse="sidebar.collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      unique-opened
    >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
  import { useSidebarStore } from '../store/sidebar';

  const sidebar = useSidebarStore()
</script>

<style  scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>