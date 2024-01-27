import { ref } from 'vue';
import { defineStore } from 'pinia'



export const useSidebarStore = defineStore('sidebar', () => {
  const collapse = ref(false)
  function handleCollapse() {
    this.collapse = !this.collapse;
  }

  return { collapse, handleCollapse}
})