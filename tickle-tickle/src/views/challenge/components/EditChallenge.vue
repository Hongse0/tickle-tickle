<template>
  <div>
    <div class="d-flex">
      <div class="col-9">
        <h4 class="mb-2 py-1">수정</h4>
      </div>

      <div class="col-3">
        <argon-button color="success" size="md" variant="gradient"
          >완료</argon-button
        >
      </div>
    </div>

    <label class="form-label mb-2 text-sm">날짜</label>
    <flat-pickr
      style="width: 90%"
      v-model="date"
      class="form-control datetimepicker"
      placeholder="날짜를 선택하세요"
      :config="config"
    ></flat-pickr>

    <label class="form-label my-2 mt-2 text-sm">상태</label>
    <argon-input style="width: 90%" placeholder="상태" />
    <label class="form-label my-2 text-sm">메모</label>
    <argon-input style="width: 90%" placeholder="메모" />
  </div>
</template>

<script setup>
import flatPickr from "vue-flatpickr-component";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";

const config = {
  allowInput: true,
};
</script>
