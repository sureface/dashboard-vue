import { defineStore } from 'pinia'
import axios from "axios";

const BASE_URL = process.env.VUE_APP_API_BASE

export const useUserStore = defineStore('user', {
    state: () => ({
        isAuthenticated: false,
        error: '',
        isOpen: false,
    }),
    getters: {
      modalToggle() {
          return this.isOpen
      }
    },
    actions: {
        async login(username, password) {

            const headers = {
                'Content-Type': 'application/json',
            }

            const data = {
                username,
                password
            }
            try {
                const res = await axios.post(BASE_URL + 'api/Authentication/login',
                    data, {headers: headers})
                const TOKEN = res.data
                localStorage.setItem('TOKEN', TOKEN)
                this.isAuthenticated = true
            } catch (error) {
                this.error = error.message
            }


        },
        logout() {
            localStorage.clear()
            this.isAuthenticated = false
        },
        closeModal(arg) {
            this.isOpen = arg
        }
    }
})