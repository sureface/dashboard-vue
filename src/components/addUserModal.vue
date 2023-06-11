<script setup>

  import { useUserStore } from '@/store/user'
  import {computed} from "vue";

  const userStore = useUserStore()

  const getIsOpen = computed(() => userStore.modalToggle);

  const closeModal = () => {
    userStore.closeModal(false)
  }

</script>

<template>
  <el-dialog
      v-model="getIsOpen"
      title="Sign Up"
      :before-close="closeModal"
  >

    <div>
      hey
    </div>

  </el-dialog>
</template>

<style scoped>

</style>