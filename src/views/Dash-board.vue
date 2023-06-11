<script setup>
/* eslint-disable */
  import {useUserStore} from "@/store/user";

/* eslint-disable */
  const logOut = async () => {
    const userStore = useUserStore()
    await userStore.logout()
    await this.$router.push('/')
  }

  const addUser = async () => {

  }

</script>


<template>
  <div class="px-3 py-2 w-screen flex items-center justify-between shadow-md">
    <router-link to="/Dashboard" class="text-2xl font-bold text-blue-500">
      Dashboard
    </router-link>
    <div class="flex items-center">
      <button type="button" class="px-2 py-1 bg-blue-700 text-lg text-white rounded-lg font-semibold mr-3" @click="addUser">Add User</button>
      <button type="button" class="px-2 py-1 bg-blue-500 text-lg text-white rounded-lg font-semibold" @click="logOut">Log out</button>
    </div>
  </div>
</template>

<style scoped>

</style>