/*import { defineStore } from "pinia";
import { api } from "../api/axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null
  }),

  actions: {
    async login(credentials) {
      const res = await api.post("/login", credentials);
      this.user = res.data;
    },

    logout() {
      this.user = null;
    }
  }
});*/


/*import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null
  }),

  actions: {
    async login({ email, password }) {
      // TEMP: fake users
      if (email === "admin@catbel.com") {
        this.user = { role: "ADMIN", name: "Admin" };
      } else if (email === "buyer@catbel.com") {
        this.user = { role: "BUYER", name: "Buyer" };
      } else {
        throw new Error("Invalid credentials");
      }
    },

    logout() {
      this.user = null;
    }
  }
});*/


import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: JSON.parse(localStorage.getItem("catbel-user"))
    }),
    
    actions: {
    login(data) {
        this.user = data;
        localStorage.setItem("catbel-user", JSON.stringify(data));
    },
    
    logout() {
        this.user = null;
        localStorage.removeItem("catbel-user");
    }
  }
});
