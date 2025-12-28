<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const auth = useAuthStore();
const router = useRouter();

const login = async () => {
  await auth.login({ email: email.value, password: password.value });
  router.push(auth.user.role === "BUYER" ? "/buyer" : "/dashboard");
};
</script>

<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <div class="bg-white p-6 rounded shadow w-80">
      <h2 class="text-xl font-bold mb-4">CATBEL Login</h2>
      <input v-model="email" placeholder="Email" class="input" />
      <input v-model="password" type="password" placeholder="Password" class="input mt-2" />
      <button @click="login" class="btn mt-4 w-full">Login</button>
    </div>
  </div>
</template>

<!--<template>
  <div class="h-screen flex items-center justify-center text-xl">
    CATBEL Login Page
  </div>
</template>-->


<style>
.input { width: 100%; padding: 8px; border: 1px solid #ccc; }
.btn { background: #10b981; color: white; padding: 8px; }
</style>
