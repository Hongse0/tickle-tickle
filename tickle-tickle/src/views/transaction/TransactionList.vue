<script setup>
import Calendar from "@/examples/Calendar.vue";
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
const transactions = ref([]);

const userId = Number(localStorage.getItem("userId"));

// 데이터를 불러오는 비동기 함수를 정의합니다.
const fetchTransactions = async () => {
  try {
    const response = await axios.get('http://localhost:3000/transactions');
    const users = response.data;
    const user = users.find(user => user.userId === userId);
    
    if(user){
      transactions.value = response.data;
    }else {
      console.log('error');
    }
    
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
      <div class="card-group justify-content-center mb-5"> <!-- card-group를 중앙 정렬 -->
        <div class="card text-center"> <!-- card를 중앙 정렬 -->
          <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
            <!-- Card Header Content -->
          </div>

          <div class="card-body pt-2">
            <p class="card-title h5 d-block text-darker">
              월별 총합
            </p>
            <div v-if="transactions.length > 0" class="card-description mb-4">
              {{ costTotal }} 원
            </div>
            
              <img src="../../assets/img/transAll.png" class="img-fluid border-radius-lg">
            
          </div>
        </div>
        <div class="card text-center"> <!-- card를 중앙 정렬 -->
          <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
            <!-- Card Header Content -->
          </div>
          <div class="card-body pt-2">
            <p class="card-title h5 d-block text-darker">
              월별 수익
            </p>
            
            <p class="card-description mb-4">
              {{ incomeTotal }} 원
            </p>
            
              <img src="../../assets/img/transIncome.png" class="img-fluid border-radius-lg">
            
          </div>
        </div>
        <div class="card text-center"> <!-- card를 중앙 정렬 -->
          <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
            <!-- Card Header Content -->
          </div>

          <div class="card-body pt-2">
            <p class="card-title h5 d-block text-darker">
              월별 지출
            </p>
            <p class="card-description mb-4">
              {{ expendTotal }} 원
            </p>
            
              <img src="../../assets/img/transExpend.png" class="img-fluid border-radius-lg">
            
          </div>
        </div>
      </div>

      <div class="col-xl-12">
        <calendar id="calendar-table" />
      </div>

    </div>
  </div>
</template>
