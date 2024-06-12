<script setup>
import Calendar from "@/examples/Calendar.vue";
// //import DefaultItem from "@/examples/Cards/DefaultItem.vue";
// //import ProductivityChart from "./components/ProductivityChart.vue";
</script>
<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12 ms-auto">
        <div class="mb-4 d-flex">
          <div class="ps-4">
            <button
              class="mt-3 mb-0 btn btn-outline-white btn-icon-only"
              data-bs-toggle="modal"
              data-target="#new-board-modal"
            >
              <i class="fa fa-plus text-white"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="col-xl-12">
        <calendar id="calendar-table" />
      </div>
      
    </div>
  </div>
</template>
