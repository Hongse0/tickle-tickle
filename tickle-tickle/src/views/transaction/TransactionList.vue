<script setup>
import Calendar from "@/examples/Calendar.vue";
// //import DefaultItem from "@/examples/Cards/DefaultItem.vue";
// //import ProductivityChart from "./components/ProductivityChart.vue";
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
              <p class="card-description mb-4">
                121530원
              </p>
              <a href="javascript:;" >
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
                105000원
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
                145000원
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
