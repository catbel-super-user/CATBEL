// Status Doughnut Chart
const statusCtx = document.getElementById("statusChart");

new Chart(statusCtx, {
    type: "doughnut",
    data: {
        labels: ["Confirmed", "Pending", "Rejected"],
        datasets: [{
            data: [1037, 486, 165],
            backgroundColor: ["#6366f1", "#10b981", "#f59e0b"]
        }]
    },
    options: {
        cutout: "65%",
        plugins: {
            legend: {
                position: "bottom"
            }
        }
    }
});

// Revenue Bar Chart
const revenueCtx = document.getElementById("revenueChart");

new Chart(revenueCtx, {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        datasets: [{
            label: "Entitlement Value",
            data: [120, 180, 140, 220, 190, 160, 210, 240, 200],
            backgroundColor: "#10b981"
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});
