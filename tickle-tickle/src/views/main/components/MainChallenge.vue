<template>
  <div class="row m-2">
    <!-- week1 -->
    <div class="d-flex justify-content-center">
      <span v-for="week1 in weeks.week1" :key="week1.id">
        <argon-button
          style="height: 27px"
          v-if="week1.status == true"
          @click.stop="postDayChallengeInfo(week1)"
          class="m-1"
          color="info"
        ></argon-button>
        <argon-button
          style="height: 27px"
          v-if="week1.status == false"
          @click.stop="postDayChallengeInfo(week1)"
          class="m-1"
          color="default"
        ></argon-button>
      </span>
    </div>

    <!-- week2 -->
    <div class="d-flex justify-content-center">
      <span v-for="week2 in weeks.week2" :key="week2.id">
        <argon-button
          style="height: 27px"
          v-if="week2.status == true"
          @click.stop="postDayChallengeInfo(week2)"
          class="m-1"
          color="info"
        ></argon-button>
        <argon-button
          style="height: 27px"
          v-if="week2.status == false"
          @click.stop="postDayChallengeInfo(week2)"
          class="m-1"
          color="default"
        ></argon-button>
      </span>
    </div>

    <!-- week3 -->
    <div class="d-flex justify-content-center">
      <span v-for="week3 in weeks.week3" :key="week3.id">
        <argon-button
          style="height: 27px"
          v-if="week3.status == true"
          @click.stop="postDayChallengeInfo(week3)"
          class="m-1"
          color="info"
        ></argon-button>
        <argon-button
          style="height: 27px"
          v-if="week3.status == false"
          @click.stop="postDayChallengeInfo(week3)"
          class="m-1"
          color="default"
        ></argon-button>
      </span>
    </div>

    <!-- week4 -->
    <div class="d-flex justify-content-center">
      <span v-for="week4 in weeks.week4" :key="week4.id">
        <argon-button
          style="height: 27px"
          v-if="week4.status == true"
          @click.stop="postDayChallengeInfo(week4)"
          class="m-1"
          color="info"
        ></argon-button>
        <argon-button
          style="height: 27px"
          v-if="week4.status == false"
          @click.stop="postDayChallengeInfo(week4)"
          class="m-1"
          color="default"
        ></argon-button>
      </span>
    </div>

    <!-- week5 -->
    <div class="d-flex justify-content-center">
      <span v-for="week5 in weeks.week5" :key="week5.id">
        <argon-button
          style="height: 27px"
          v-if="week5.status == true"
          @click.stop="postDayChallengeInfo(week5)"
          class="m-1"
          color="info"
        ></argon-button>
        <argon-button
          style="height: 27px"
          v-if="week5.status == false"
          @click.stop="postDayChallengeInfo(week5)"
          class="m-1"
          color="default"
        ></argon-button>
      </span>
    </div>

    <!-- week6 -->
    <div class="d-flex justify-content-center">
      <span v-for="week6 in weeks.week6" :key="week6.id">
        <argon-button
          style="height: 27px"
          v-if="week6.status == true"
          @click.stop="postDayChallengeInfo(week6)"
          class="m-1"
          color="info"
        ></argon-button>
        <argon-button
          style="height: 27px"
          v-if="week6.status == false"
          @click.stop="postDayChallengeInfo(week6)"
          class="m-1"
          color="default"
        ></argon-button>
      </span>
    </div>

    <!-- week7 -->
    <div class="d-flex justify-content-center">
      <span v-for="week7 in weeks.week7" :key="week7.id">
        <argon-button
          style="height: 27px"
          v-if="week7.status == true"
          @click.stop="postDayChallengeInfo(week7)"
          class="m-1"
          color="info"
        ></argon-button>
        <argon-button
          style="height: 27px"
          v-if="week7.status == false"
          @click.stop="postDayChallengeInfo(week67)"
          class="m-1"
          color="default"
        ></argon-button>
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
const weeks = ref({
  week1: [],
  week2: [],
  week3: [],
  week4: [],
  week5: [],
  week6: [],
  week7: [],
});

const getWeeks = async () => {
  try {
    const response = await axios.get("http://localhost:3000/challengeDays");
    const jsonData = response.data;

    jsonData.forEach((day) => {
      if (Number(day.id) <= 4) {
        weeks.value.week1.push(day);
      } else if (Number(day.id) <= 8) {
        weeks.value.week2.push(day);
      } else if (Number(day.id) <= 12) {
        weeks.value.week3.push(day);
      } else if (Number(day.id) <= 16) {
        weeks.value.week4.push(day);
      } else if (Number(day.id) <= 20) {
        weeks.value.week5.push(day);
      } else if (Number(day.id) <= 24) {
        weeks.value.week6.push(day);
      } else {
        weeks.value.week7.push(day);
      }
    });
  } catch (error) {
    console.log("Error fetch data ", error);
  }
};

const postDayChallengeInfo = (data) => {
  console.log("send" + data.date);
  emitter.emit("postDayChallengeInfo", data);
};
onMounted(getWeeks);

// const weeks = ref({
//   week1: [
//     {
//       id: 1,
//       status: false,
//       date: "2024-06-12",
//       memo: "1일",
//     },
//     {
//       id: 2,
//       status: true,
//       date: "2024-06-12",
//       memo: "2일",
//     },
//     {
//       id: 3,
//       status: false,
//       date: "2024-06-12",
//       memo: "3일",
//     },
//     {
//       id: 4,
//       status: true,
//       date: "2024-06-12",
//       memo: "4일",
//     },
//     {
//       id: 5,
//       status: false,
//       date: "2024-06-12",
//       memo: "5일",
//     },
//     {
//       id: 6,
//       status: true,
//       date: "2024-06-12",
//       memo: "6일",
//     },
//     {
//       id: 7,
//       status: true,
//       date: "2024-06-12",
//       memo: "7일",
//     },
//   ],
//   week2: [
//     {
//       id: 8,
//       status: false,
//       date: "2024-06-12",
//     },
//     {
//       id: 9,
//       status: true,
//       date: "2024-06-12",
//     },
//     {
//       id: 10,
//       status: false,
//       date: "2024-06-12",
//     },
//     {
//       id: 11,
//       status: true,
//       date: "2024-06-12",
//     },
//     {
//       id: 12,
//       status: false,
//       date: "2024-06-12",
//     },
//     {
//       id: 13,
//       status: true,
//       date: "2024-06-12",
//     },
//     {
//       id: 14,
//       status: true,
//       date: "2024-06-12",
//     },
//   ],
//   week3: [
//     {
//       id: 15,
//       status: false,
//       date: "2024-06-12",
//     },
//     {
//       id: 16,
//       status: true,
//       date: "2024-06-12",
//     },
//     {
//       id: 17,
//       status: false,
//       date: "2024-06-12",
//     },
//     {
//       id: 18,
//       status: true,
//       date: "2024-06-12",
//     },
//     {
//       id: 19,
//       status: false,
//       date: "2024-06-12",
//     },
//     {
//       id: 20,
//       status: true,
//       date: "2024-06-12",
//     },
//     {
//       id: 21,
//       status: true,
//       date: "2024-06-12",
//     },
//   ],
//   week4: [
//     {
//       id: 22,
//       status: false,
//       date: "2024-06-12",
//     },
//     {
//       id: 23,
//       status: true,
//       date: "2024-06-12",
//     },
//     {
//       id: 24,
//       status: false,
//       date: "2024-06-12",
//     },
//     {
//       id: 25,
//       status: true,
//       date: "2024-06-12",
//     },
//     {
//       id: 26,
//       status: false,
//       date: "2024-06-12",
//     },
//     {
//       id: 27,
//       status: true,
//       date: "2024-06-12",
//     },
//     {
//       id: 28,
//       status: true,
//       date: "2024-06-12",
//     },
//   ],
// });
// 2
</script>
