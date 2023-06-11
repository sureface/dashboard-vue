<script setup>
/* eslint-disable */
  import {useUserStore} from "@/store/user";
import AddUserModal from "@/components/addUserModal.vue";
import {computed} from "vue";
const userStore = useUserStore()

/* eslint-disable */
  const logOut = async () => {
    await userStore.logout()
    await this.$router.push('/')
  }

  const showModal = computed(() => userStore.modalToggle)

  const addUser = async () => {

  }

</script>


<template>
  <div class="px-3 py-2 w-screen flex items-center justify-between shadow-md">
    <add-user-modal v-if="showModal" />
    <router-link to="/Dashboard" class="text-2xl font-bold text-blue-500">
      Dashboard
    </router-link>
    <div class="flex items-center">
      <button type="button" class="px-2 py-1 bg-blue-700 text-lg text-white rounded-lg font-semibold mr-3" @click="showModal">Add User</button>
      <button type="button" class="px-2 py-1 bg-blue-500 text-lg text-white rounded-lg font-semibold" @click="logOut">Log out</button>
    </div>
  </div>
</template>

<style scoped>

</style>