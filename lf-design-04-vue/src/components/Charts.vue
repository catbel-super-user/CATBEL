<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import Chart from "chart.js/auto";

let statusChart = null;
let monthlyChart = null;

onMounted(() => {
  const statusCtx = document.getElementById("statusChart");
  const monthlyCtx = document.getElementById("monthlyChart");

  statusChart = new Chart(statusCtx, {
    type: "doughnut",
    data: {
      labels: ["Confirmed", "Pending", "Rejected"],
      datasets: [
        {
          data: [1037, 486, 165],
          backgroundColor: ["#3b82f6", "#fb7185", "#fb923c"]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom" }
      }
    }
  });

  monthlyChart = new Chart(monthlyCtx, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Entitlement Value (₹ Lakhs)",
          data: [120, 180, 140, 220, 190, 160],
          backgroundColor: "#10b981"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      }
    }
  });
});

onBeforeUnmount(() => {
  statusChart?.destroy();
  monthlyChart?.destroy();
});
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
    <!-- Doughnut -->
    <div class="bg-white p-4 rounded-xl shadow h-[320px]">
      <h3 class="font-semibold mb-2">Status Analysis</h3>
      <canvas id="statusChart"></canvas>
    </div>

    <!-- Bar -->
    <div class="bg-white p-4 rounded-xl shadow h-[320px]">
      <h3 class="font-semibold mb-2">Monthly Distribution</h3>
      <canvas id="monthlyChart"></canvas>
    </div>
  </div>
</template>
