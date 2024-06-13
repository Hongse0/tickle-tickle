<template>
  <div>
    <div class="d-flex">
      <div class="col-9">
        <h5 class="py-1">수정</h5>
      </div>

      <div class="col-3">
        <argon-button color="success" size="md" variant="gradient"
          >완료</argon-button
        >
      </div>
    </div>

    <label class="form-label mb-2 text-sm">Day</label>
    <label class="form-label mb-2 text-sm">{{ day.id }}</label>
    <div></div>

    <label class="form-label my-2 mt-2 text-sm">상태</label>
    <argon-input v-model="day.status" style="width: 90%" placeholder="상태" />
    <label class="form-label my-2 text-sm">메모</label>
    <argon-input v-model="day.memo" style="width: 90%" placeholder="메모" />
  </div>
</template>

<script setup>
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import { defineProps, ref } from "vue";
import accessEmitter from "@/config/accessEmitter.js";
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
