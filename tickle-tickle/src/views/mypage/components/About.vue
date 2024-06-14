<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  userGender: String,
  userPassword: String,
  userId: [String, Number]
});
</script>

<template>
  <div
    class="p-3 bg-white card multisteps-form__panel border-radius-xl js-active position-relative"
    data-animation="FadeIn"
  >
    <div class="text-center">
      <div class="mx-auto">
        <h3 class="font-weight-normal">
          개인 정보
        </h3>
      </div>
    </div>
    <div class="multisteps-form__content">
      <div class="mt-3 row">
        <div class="mt-4 col-12 col-sm-8 mt-sm-0 text-start">
          <label>아이디</label>
          <input
            class="mb-3 multisteps-form__input form-control"
            type="text"
            :value="props.userId"
            readonly
          />
          <label>성</label>
          <input
            class="mb-3 multisteps-form__input form-control"
            type="text"
            :value="props.userGender"
            readonly
          />
          <label>비밀번호</label>
          <input
            class="multisteps-form__input form-control"
            type="password"
            :value="props.userPassword"
            readonly
          />
        </div>
      </div>
      <div class="mt-4 button-row d-flex">
        <button
          class="mb-0 btn bg-gradient-dark ms-auto js-btn-next"
          type="button"
        >
          비밀번호 변경
        </button>
      </div>
    </div>
  </div>
</template>
