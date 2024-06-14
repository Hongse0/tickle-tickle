<template>
  <div>
    <div class="d-flex">
      <div class="col-9">
        <h5 class="py-1">수정</h5>
      </div>

      <div class="col-3">
        <argon-button
          @click="click"
          color="success"
          size="md"
          variant="gradient"
          >완료</argon-button
        >
      </div>
    </div>

    <label class="form-label mb-2 text-sm">Day</label>
    <label class="form-label mb-2 text-sm" id="challengeDay">{{
      day.id
    }}</label>
    <div></div>

    <label class="form-label my-2 mt-2 text-sm">상태</label>
    <select
      class="form-select"
      v-model="day.status"
      @change="updateStatus"
      style="width: 90%"
      id="dayStatus"
    >
      <option value="true">true</option>
      <option value="false">false</option>
    </select>
    <label class="form-label my-2 text-sm">메모</label>

    <argon-input
      id="challengeMemo"
      v-model="day.memo"
      style="width: 90%"
      placeholder="메모"
    />
  </div>
</template>

<script setup>
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import { defineProps, ref, onUpdated, onMounted } from "vue";
import accessEmitter from "@/config/accessEmitter.js";
import axios from "axios";
const emitter = accessEmitter();

const day = ref({
  id: 1,
  status: false,
  date: "2024-06-12",
  memo: "1일",
});

function handleDayChallengeInfo(event) {
  day.value = event;
}

function click() {
  console.log(JSON.stringify(postChallengeDay.value));
  postEditChallenge(postChallengeDay);
}

const postEditChallenge = async () => {
  try {
    const response = await axios.patch(
      "http://localhost:3000/challengeDays/" + postChallengeDay.value.id,
      postChallengeDay.value
    );
    console.log(response);
  } catch (error) {
    console.log("here");
  }
};

//자동으로 변경
function updateStatus(event) {
  day.value.status = event.target.value === "true";
}

async function putFirstDay() {
  try {
    const response = await axios.get("http://localhost:3000/challengeDays/1");
    console.log(response);
    day.value.memo = response.data.memo;
    day.value.status = response.data.status;
  } catch (error) {
    console.log("here");
  }
}
// 전역적으로 사용할 수 있는 DOM 요소를 저장합니다.
const postChallengeDay = ref({
  id: "",
  status: true,
  memo: "",
});

// DOM 요소를 가져와 ref에 저장하는 함수입니다.
function updateChallengeStatus() {
  const status = document.getElementById("dayStatus");
  const memo = document.getElementById("challengeMemo");

  postChallengeDay.value.id = day.value.id;
  if (status) {
    postChallengeDay.value.status = status.value === "true";
  }

  if (memo) {
    postChallengeDay.value.memo = memo.value;
  } else {
    postChallengeDay.value.memo = "오류";
  }
}

onMounted(() => {
  putFirstDay();
  updateChallengeStatus();
});

// 컴포넌트가 업데이트된 후에 DOM 요소에 접근합니다.
onUpdated(() => {
  updateChallengeStatus();
});

// update ,
// 다른변수, 갱신
emitter.on("postDayChallengeInfo", handleDayChallengeInfo);

defineProps({
  editChallengeDay: {
    type: Object,
    required: false,
    default: () => {},
  },
});
</script>
