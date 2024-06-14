<script setup>
import { onMounted, ref } from "vue";
import Chart from "chart.js/auto";
import axios from "axios";

const chartId = "chart-pie";
const chartData = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:3000/twenty");
    const jsonData = response.data;

    chartData.value = {
      labels: jsonData.map(item => item.category),
      datasets: [
        {
          label: "지출 루트",
          weight: 9,
          cutout: 0,
          tension: 0.9,
          pointRadius: 2,
          borderWidth: 2,
          backgroundColor: ["#17c1e8", "#4BB543", "#3A416F", "#a8b8d8", "#FF6384", "#FFCE56"],
          data: jsonData.map(item => item.total),
          fill: false,
        },
      ],
    };


    const maxExpenditureCategory = jsonData.reduce((max, current) => current.total > max.total ? current : max);
    document.querySelector('#max-expenditure-category').innerText = maxExpenditureCategory.category;


    let pieChart = document.getElementById(chartId).getContext("2d");
    let chartStatus = Chart.getChart(chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    new Chart(pieChart, {
      type: "pie",
      data: chartData.value,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    });

  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

</script>

<template>
  <div class="container">
    <div class="card h-100">
      <div class="p-3 pb-0 card-header">
        <div class="d-flex justify-content-center">
          <h2 class="mb-0 mx-3 mt-3">지출 루트</h2>
        </div>
      </div>
      <div class="p-3 pb-0 mt-4 card-body text-center">
        <div class="d-flex justify-content-center">
          <div class="col-12 text-start">
            <div class="chart">

              <canvas :id="chartId" class="chart-canvas" width="400" height="400"></canvas>
            </div>
          </div>
        </div>
      </div>

      <br><br>
      <div class="p-3 pt-0 pb-0 card-footer d-flex align-items-center">
        <div class="w-100 mx-3">
          <h3 class="font-weight-lighter">20대 남성은 <span id="max-expenditure-category">식비</span>에 가장 많은 지출을 하고 있어요.</h3>
          <h4 class="mb-5 font-weight-lighter">
            비슷한 소득을 가진 사람들의 지출 패턴을 참고하여 재정 계획을 세워보세요.😊
          </h4>
        </div>
        <div class="w-40 text-end"></div>
      </div>
    </div>
  </div>
</template>
