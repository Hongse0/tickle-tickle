<template>
  <div class="card mt-6 w-70">
    <h6 class="m-3 text-dark font-weight-bold text-sm">과거 챌린지 목록</h6>

    <ul class="list-group">
      <li
        v-for="challenge in pastChallengeList"
        :key="challenge.challengeId"
        class="list-group-item mx-3 border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
      >
        <div class="d-flex flex-column">
          <h6 class="text-dark font-weight-bold text-sm">
            {{ challenge.challengeName }}
          </h6>
          <span class="text-xs"> {{ challenge.startDate }}</span>
        </div>
        <div class="d-flex align-items-center text-sm">
          <argon-button>선택</argon-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

import ArgonButton from "@/components/ArgonButton.vue";

defineProps({
  pastChallengeList: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
