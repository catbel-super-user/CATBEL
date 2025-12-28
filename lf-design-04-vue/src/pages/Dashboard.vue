<script setup>
import Sidebar from "../components/Sidebar.vue";
import StatCard from "../components/StatCard.vue";
import Charts from "../components/Charts.vue";
</script>

<template>
  <div class="flex">
    <Sidebar />

    <main class="flex-1 p-6 bg-gray-100 min-h-screen">
      <h1 class="text-2xl font-bold mb-6">Dashboard Overview</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Eligible Buyers" value="4860" />
        <StatCard title="Total Value" value="₹2B" />
        <StatCard title="Confirmed Members" value="1037" />
        <StatCard title="New Registrations" value="895" />
      </div>

      <Charts />
    </main>
  </div>
</template>
