<script setup>
import { onUpdated } from "vue";
import Chart from "chart.js/auto";

const props = defineProps({
  id: {
    type: String,
    default: "bar-chart-horizontal",
  },
  height: {
    type: String,
    default: "300",
  },
  title: {
    type: String,
    default: "",
  },
  chart: {
    type: Object,
    required: true,
    labels: Array,
    datasets: {
      type: Object,
      required: true,
      label: String,
      data: Array,
    },
  },
});

onUpdated(() => {
  var ctx = document.getElementById(props.id).getContext("2d");

  let chartStatus = Chart.getChart(props.id);
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }
  console.log('data');
  console.log(props.chart.datasets.data);
  console.log('data');


  new Chart(ctx, {
    type: "bar",
    data: {
      labels: props.chart.labels,
      datasets: [
        {
          label: props.chart.datasets.label,
          weight: 5,
          borderWidth: 0,
          borderRadius: 4,
          backgroundColor: "#3A416F",
          data: props.chart.datasets.data,
          fill: false,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            padding: 10,
            color: "#9ca2b7",
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: true,
            drawTicks: true,
          },
          ticks: {
            display: true,
            color: "#9ca2b7",
            padding: 10,
          },
        },
      },
    },
  });
}
);
</script>
<template>
  <div class="container">
    <div class="card z-index-2">

      <div class="p-3 pb-0 card-header mx-3 mt-3">
        <h2 class="mb-2 text-center">별별 통계</h2>
        
        <h6>{{ props.title }}</h6>
        
      </div>
      <div class="p-3 card-body">
        <div class="chart">
          <canvas :id="props.id" class="chart-canvas" :height="props.height"></canvas>
        </div>
      </div>
      <h3 class="pb-0 card-header mb-4 mx-3 mt-3 font-weight-lighter ">이 그래프는 비슷한 수입을 가진 사람들의 자금
        사용처를 분석한 결과에요.</h3>
    </div>
  </div>
</template>
