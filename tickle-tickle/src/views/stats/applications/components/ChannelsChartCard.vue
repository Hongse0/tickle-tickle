<script setup>
import { onMounted, ref } from "vue";
import Chart from "chart.js/auto";

const chartId = "chart-pie";
const jsonData = {
  "쇼핑": 4,
  "교육": 46,
  "식비": 84,
  "생활": 35,
  "기타": 87,
  "술/유흥": 17
};

const chartData = ref(null);

onMounted(() => {
  chartData.value = {
    labels: Object.keys(jsonData),
    datasets: [
      {
        label: "지출 루트",
        weight: 9,
        cutout: 0,
        tension: 0.9,
        pointRadius: 2,
        borderWidth: 2,
        backgroundColor: ["#17c1e8", "#4BB543", "#3A416F", "#a8b8d8", "#FF6384", "#FFCE56"],
        data: Object.values(jsonData),
        fill: false,
      },
    ],
  };

  let pieChart = document.getElementById(chartId).getContext("2d");

  let chartStatus = Chart.getChart(chartId);
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }

  // 파이 차트
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
});
</script>

<template>
  <div class="container">
  <div class="card h-100">
    <div class="p-3 pb-0 card-header">
      <div class="d-flex justify-content-between">
        <h3 class="mb-0">지출 루트</h3>
      </div>
    </div>
    <div class="p-3 pb-0 mt-4 card-body">
      <div class="d-flex justify-content-center">
        <div class="col-7 text-start">
          <div class="chart">
            
            <canvas :id="chartId" class="chart-canvas" width="400" height="400"></canvas>
          </div>
        </div>
        <div class="my-auto col-5">
         
        </div>
      </div>
    </div>

    <br><br><br>
    <div class="p-3 pt-0 pb-0 card-footer d-flex align-items-center">
      <div class="w-60">
        <h3>20대 남성은 식비에 가장 많은 지출을 하고 있어요.</h3>
        <h4>
          비슷한 소득을 가진 사람들의 지출 패턴을 참고하여 재정 계획을 세워보세요.
        </h4>
      </div>
      <div class="w-40 text-end"></div>
    </div>
  </div>
</div>
</template>
