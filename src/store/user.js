import { defineStore } from 'pinia'
import axios from "axios";

const BASE_URL = process.env.VUE_APP_API_BASE

export const useUserStore = defineStore('user', {
    state: () => ({
        isAuthenticated: false,
        error: '',
    }),
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
            // make API call to log out user
            // if successful, set isAuthenticated to false
            this.isAuthenticated = false
        }
    }
})