<template>
    <div class="py-4 container d-flex justify-content-center">
      <div class="mt-4 col-lg-11 mb-lg">
        <div class="card">
          <!-- Card header -->
          <div class="card-header">
            <div class="text-center"><h2 class="mb-0">챌린지 생성</h2></div>
            <div class="text-center">
            <p class="mb-0 text-sm">
                나만의 챌린지를 만들어보세요!
            </p>
        </div>
            <hr class="my-3 horizontal dark" />
          <label for="projectName" class="form-label">나만의 챌린지 이름</label>
          <input id="projectName" type="text" class="form-control" />
          
          <label class="mt-4 form-label">챌린지 태그</label>
          <select
            id="choices-multiple-remove-button"
            class="form-control"
            name="choices-multiple-remove-button"
            multiple
          >
            <option value="Choice 1" selected>노카페인 챌린지</option>
            <option value="Choice 2">대중교통 챌린지</option>
            <option value="Choice 3">집밥 챌린지</option>
            <option value="Choice 4">금연 챌린지</option>
          </select>
          <div class="row">
            <div class="col-6">
              <label class="form-label">챌린지 시작일</label>
              <flat-pickr
                v-model="date"
                class="form-control datetimepicker"
                placeholder="Please select start date"
                :config="config"
              ></flat-pickr>
            </div>
            <div class="col-6">
              <label class="form-label">챌린지 종료일</label>
              <flat-pickr
                v-model="endDate"
                class="form-control datetimepicker"
                placeholder="Please select end date"
                :config="config"
              ></flat-pickr>
            </div>
          </div>
          <div class="card-body p-3">
            <div class="row d-flex justify-content-center">
              <outlined-counter-card
                :duration="2500"
                prefix="$"
                :count="23980"
                title="이정도 금액을 아낄 수 있어요"
              /></div></div>

          <div class="d-flex justify-content-center">
            <button type="button" name="button" class="m-0 btn btn-light">
              Cancel
            </button>
            <button
              type="button"
              name="button"
              class="m-0 btn bg-gradient-success ms-2"
            >
              Create Project
            </button>
          </div>
        </div>
        <hr class="my-3 horizontal dark" />
        
      </div>
    </div>
  </div>

  </template>
  <script setup>
import { onMounted } from "vue";
import flatPickr from "vue-flatpickr-component";
import Choices from "choices.js";
import Quill from "quill";
import OutlinedCounterCard from ".//OutlinedCounterCard";;

const date = "";
const endDate = "";
const config = {
  allowInput: true,
};

onMounted(() => {
  if (document.getElementById("editor")) {
    new Quill("#editor", {
      theme: "snow", // Specify theme in configuration
    });
  }

  if (document.getElementById("choices-multiple-remove-button")) {
    var element = document.getElementById("choices-multiple-remove-button");
    const example = new Choices(element, {
      removeItemButton: true,
      allowHTML: true,
    });

    example.setChoices(
      [],
      "value",
      "label",
      false
    );
  }
});
</script>