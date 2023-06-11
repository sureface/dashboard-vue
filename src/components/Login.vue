<template>
  <div class="Login_Page h-screen w-screen grid grid-cols-2 gap-10 p-10">
    <div class="flex item-center justify-center">
      <img src="@/assets/img/dashboard-png.png" alt="err" class="object-contain">
    </div>
    <div class="flex items-center justify-center">
      <div>

        <h1>Login Page</h1>
        <div class="p-4">
          <form @submit.prevent="handleLogin">
            <div>
              <label for="username">Username:</label>
              <input type="text" id="username" name="username" v-model="username" required>
            </div>
            <div>
              <label for="password">Password:</label>
              <input type="password" id="password" name="password" v-model="password" required>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/store/user'

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      const userStore = useUserStore()

      userStore.login(this.username, this.password)
          .then(() => {
            this.$router.push('/dashboard')
          })
          .catch((error) => {
            console.log(error)
          })
    }
  }
}
</script>