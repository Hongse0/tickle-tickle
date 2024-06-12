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
            <div class="row">
              <div class="col-8">
          <label for="projectName" class="form-label">나만의 챌린지 이름</label>
          <input id="projectName" type="text" class="form-control" />
          
          <label class="mt-4 form-label">챌린지 태그</label>
          <select
            id="choices-multiple-remove-button"
            class="form-control"
            name="choices-multiple-remove-button"
            multiple
          >
          </select>
          </div></div>
          <div class="row">
            <div class="col-4">
              <label class="form-label">챌린지 시작일</label>
              <flat-pickr
                v-model="date"
                class="form-control datetimepicker"
                placeholder="Please select start date"
                :config="config"
              ></flat-pickr>
            </div>
            <div class="col-4">
              <label class="form-label">챌린지 종료일</label>
              <flat-pickr
                v-model="endDate"
                class="form-control datetimepicker"
                placeholder="Please select end date"
                :config="config"
              ></flat-pickr>
            </div>
            <complex-background-card
                image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/window-desk.jpg"
                description="User #hashtag in a photo on social media and get $10 for each purchase you make."
                :action="{ route: 'javascript:;', label: 'Read more' }"
              />
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
        <div class="mt-4">
          <div class="container">
            <div class="tab-content tab-space">
              <div id="monthly" class="tab-pane active">
                <div class="row">
                  <div class="mb-4 col-lg-4 mb-lg-0">
                    <pricing-card
                      badge="Starter"
                      :price="{ currency: '$', value: '59' }"
                      :specifications="[
                        { label: '2 team members', includes: true },
                        { label: '20GB Cloud storage', includes: true },
                        { label: 'Integration help', includes: false },
                        { label: 'Sketch Files', includes: false },
                        { label: 'API Access', includes: false },
                        { label: 'Complete documentation', includes: false },
                      ]"
                      :action="{
                        color: 'dark',
                        route: 'javascript:;',
                        label: 'Join',
                      }"
                    />
                  </div>
                  <div class="mb-4 col-lg-4 mb-lg-0">
                    <pricing-card
                      badge="premium"
                      :price="{ currency: '$', value: '89' }"
                      :specifications="[
                        { label: '10 team members', includes: true },
                        { label: '40GB Cloud storage', includes: true },
                        { label: 'Integration help', includes: true },
                        { label: 'Sketch Files', includes: true },
                        { label: 'API Access', includes: false },
                        { label: 'Complete documentation', includes: false },
                      ]"
                      :action="{
                        color: 'success',
                        route: 'javascript:;',
                        label: 'Try Premium',
                      }"
                    />
                  </div>
                  <div class="mb-4 col-lg-4 mb-lg-0">
                    <pricing-card
                      badge="Enterprise"
                      :price="{ currency: '$', value: '99' }"
                      :specifications="[
                        { label: 'Unlimited team members', includes: true },
                        { label: '100GB Cloud storage', includes: true },
                        { label: 'Integration help', includes: true },
                        { label: 'Sketch Files', includes: true },
                        { label: 'API Access', includes: true },
                        { label: 'Complete documentation', includes: true },
                      ]"
                      :action="{
                        color: 'dark',
                        route: 'javascript:;',
                        label: 'Join',
                      }"
                    />
                  </div>
                </div>
              </div>
              </div>
              </div>
              </div>
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
import ComplexBackgroundCard from "./ComplexBackgroundCard.vue";
import PricingCard from "./PricingCard.vue";

const date = "";
const endDate = "";
const config = {
  allowInput: true,
};

onMounted(() => {
  update();
});


const update= ()=>{
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
      [{
          value: "One",
          label: "노카페인 챌린지"
        },
        {
          value: "Two",
          label: "대중교통 챌린지",
          selected: true,
        },
        {
          value: "Three",
          label: "집밥 챌린지",
        },
        {
          value: "Four",
          label: "금연 챌린지",
        }],
      "value",
      "label",
      false
    );
  }
}
</script>