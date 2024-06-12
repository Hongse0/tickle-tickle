<template>
  <div class="row m-2">
    <!-- week1 -->
    <div class="d-flex justify-content-center">
      <span v-for="week1 in weeks.week1" :key="week1.id">
        <argon-button v-if="week1.status == true" class="m-2" color="info"
          >완료</argon-button
        >
        <argon-button v-if="week1.status == false" class="m-2" color="default"
          >실패</argon-button
        >
      </span>
    </div>

    <!-- week2 -->
    <div class="d-flex justify-content-center">
      <span v-for="week2 in weeks.week1" :key="week2.id">
        <argon-button v-if="week2.status == true" class="m-2" color="info"
          >완료</argon-button
        >
        <argon-button v-if="week2.status == false" class="m-2" color="default"
          >실패</argon-button
        >
      </span>
    </div>

    <!-- week3 -->
    <div class="d-flex justify-content-center">
      <span v-for="week3 in weeks.week3" :key="week3.id">
        <argon-button v-if="week3.status == true" class="m-2" color="info"
          >완료</argon-button
        >
        <argon-button v-if="week3.status == false" class="m-2" color="default"
          >실패</argon-button
        >
      </span>
    </div>

    <!-- week4 -->
    <div class="d-flex justify-content-center">
      <span v-for="week4 in weeks.week4" :key="week4.id">
        <argon-button v-if="week4.status == true" class="m-2" color="info"
          >완료</argon-button
        >
        <argon-button v-if="week4.status == false" class="m-2" color="default"
          >실패</argon-button
        >
      </span>
    </div>
  </div>
</template>

<script setup>
import ArgonButton from "@/components/ArgonButton.vue";
import { ref } from "vue";

// item1
const weeks = ref({
  week1: [
    {
      id: 1,
      status: false,
      date: "2024-06-12",
    },
    {
      id: 2,
      status: true,
      date: "2024-06-12",
    },
    {
      id: 3,
      status: false,
      date: "2024-06-12",
    },
    {
      id: 4,
      status: true,
      date: "2024-06-12",
    },
    {
      id: 5,
      status: false,
      date: "2024-06-12",
    },
    {
      id: 6,
      status: true,
      date: "2024-06-12",
    },
    {
      id: 7,
      status: true,
      date: "2024-06-12",
    },
  ],
  week2: [
    {
      id: 1,
      status: false,
      date: "2024-06-12",
    },
    {
      id: 2,
      status: true,
      date: "2024-06-12",
    },
    {
      id: 3,
      status: false,
      date: "2024-06-12",
    },
    {
      id: 4,
      status: true,
      date: "2024-06-12",
    },
    {
      id: 5,
      status: false,
      date: "2024-06-12",
    },
    {
      id: 6,
      status: true,
      date: "2024-06-12",
    },
    {
      id: 7,
      status: true,
      date: "2024-06-12",
    },
  ],
  week3: [
    {
      id: 1,
      status: false,
      date: "2024-06-12",
    },
    {
      id: 2,
      status: true,
      date: "2024-06-12",
    },
    {
      id: 3,
      status: false,
      date: "2024-06-12",
    },
    {
      id: 4,
      status: true,
      date: "2024-06-12",
    },
    {
      id: 5,
      status: false,
      date: "2024-06-12",
    },
    {
      id: 6,
      status: true,
      date: "2024-06-12",
    },
    {
      id: 7,
      status: true,
      date: "2024-06-12",
    },
  ],
  week4: [
    {
      id: 1,
      status: false,
      date: "2024-06-12",
    },
    {
      id: 2,
      status: true,
      date: "2024-06-12",
    },
    {
      id: 3,
      status: false,
      date: "2024-06-12",
    },
    {
      id: 4,
      status: true,
      date: "2024-06-12",
    },
    {
      id: 5,
      status: false,
      date: "2024-06-12",
    },
    {
      id: 6,
      status: true,
      date: "2024-06-12",
    },
    {
      id: 7,
      status: true,
      date: "2024-06-12",
    },
  ],
});
// 2
</script>
