<script setup>
import Calendar from "@/examples/Calendar.vue";
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
const transactions = ref([]);

// 데이터를 불러오는 비동기 함수를 정의합니다.
const fetchTransactions = async () => {
  try {
    const response = await axios.get('http://localhost:3000/transactions');
    transactions.value = response.data; // 가져온 데이터를 transactions에 할당합니다.
  } catch (error) {
    console.error('Error fetching transactions:', error);
  }
};



// 컴포넌트가 마운트되면 데이터를 불러오도록 합니다.
onMounted(fetchTransactions);
// //import DefaultItem from "@/examples/Cards/DefaultItem.vue";
// //import ProductivityChart from "./components/ProductivityChart.vue";



const costTotal = computed(() => {
  return transactions.value.reduce((total, transaction) => {

    return total + parseInt(transaction.cost);
  }, 0);

});


const incomeTotal = computed(() => {
  return transactions.value.reduce((total, transaction) => {
    if (transaction.isIncome) {
      return total + parseInt(transaction.cost);
    }

    return total;

  }, 0);

});

const expendTotal = computed(() => {
  return transactions.value.reduce((total, transaction) => {
    if (!transaction.isIncome) {
      return total + parseInt(transaction.cost);
    }

    return total;

  }, 0);

});



</script>
<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12 ms-auto mb-5">
        <div class="card-group">
          <div class="card">
            <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">

            </div>

            <div class="card-body pt-2">
              <a href="javascript:;" class="card-title h5 d-block text-darker">
                월별 총합
              </a>
              <div v-if="transactions.length > 0">

                {{ costTotal }} 원
              </div>
              <a href="javascript:;">
                <img src="../../assets/img/transAll.png" class="img-fluid border-radius-lg">
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">

            </div>

            <div class="card-body pt-2">
              <a href="javascript:;" class="card-title h5 d-block text-darker">
                월별 수익
              </a>
              <p class="card-description mb-4">
                {{ incomeTotal }} 원
              </p>
              <a href="javascript:;" class="">
                <img src="../../assets/img/transIncome.png" class="img-fluid border-radius-lg">
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">

            </div>

            <div class="card-body pt-2">
              <a href="javascript:;" class="card-title h5 d-block text-darker">
                월별 지출
              </a>
              <p class="card-description mb-4">
                {{ expendTotal }} 원
              </p>
              <a href="javascript:;" class="">
                <img src="../../assets/img/transExpend.png" class="img-fluid border-radius-lg">
              </a>
            </div>
          </div>
        </div>

      </div>
      <div class="col-xl-12">
        <calendar id="calendar-table" />
      </div>

    </div>
  </div>
</template>
