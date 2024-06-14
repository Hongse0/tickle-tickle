<template>
  <div class="row m-2">
    <!-- week1 -->
    <div class="d-flex justify-content-center">
      <span v-for="week1 in weeks.week1" :key="week1.id">
        <argon-button
          v-if="week1.status == true"
          @click.stop="postDayChallengeInfo(week1)"
          class="m-2"
          color="info"
          >완료</argon-button
        >
        <argon-button
          v-if="week1.status == false"
          @click.stop="postDayChallengeInfo(week1)"
          class="m-2"
          color="default"
          >실패</argon-button
        >
      </span>
    </div>

    <!-- week2 -->
    <div class="d-flex justify-content-center">
      <span v-for="week2 in weeks.week2" :key="week2.id">
        <argon-button
          v-if="week2.status == true"
          @click.stop="postDayChallengeInfo(week2)"
          class="m-2"
          color="info"
          >완료</argon-button
        >
        <argon-button
          v-if="week2.status == false"
          @click.stop="postDayChallengeInfo(week2)"
          class="m-2"
          color="default"
          >실패</argon-button
        >
      </span>
    </div>

    <!-- week3 -->
    <div class="d-flex justify-content-center">
      <span v-for="week3 in weeks.week3" :key="week3.id">
        <argon-button
          v-if="week3.status == true"
          @click.stop="postDayChallengeInfo(week3)"
          class="m-2"
          color="info"
          >완료</argon-button
        >
        <argon-button
          v-if="week3.status == false"
          @click.stop="postDayChallengeInfo(week3)"
          class="m-2"
          color="default"
          >실패</argon-button
        >
      </span>
    </div>

    <!-- week4 -->
    <div class="d-flex justify-content-center">
      <span v-for="week4 in weeks.week4" :key="week4.id">
        <argon-button
          v-if="week4.status == true"
          @click.stop="postDayChallengeInfo(week4)"
          class="m-2"
          color="info"
          >완료</argon-button
        >
        <argon-button
          v-if="week4.status == false"
          @click.stop="postDayChallengeInfo(week4)"
          class="m-2"
          color="default"
          >실패</argon-button
        >
      </span>
    </div>
  </div>
</template>

<script setup>
import ArgonButton from "@/components/ArgonButton.vue";
import { onMounted, ref } from "vue";
// import { ref } from "vue";

import axios from "axios";
import accessEmitter from "@/config/accessEmitter.js";
const emitter = accessEmitter();

const weeks = ref({});

const getWeeks = async () => {
  try {
    const response = await axios.get("http://localhost:3000/challengeDays");
    const jsonData = response.data;
    weeks.value = jsonData;
  } catch (error) {
    console.log("Error fetch data ", error);
  }
};

const postDayChallengeInfo = (data) => {
  emitter.emit("postDayChallengeInfo", data);
};
onMounted(getWeeks);
</script>
