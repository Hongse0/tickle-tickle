<template>
  <div class="card col-lg-11 container justify-content-center">
      <div class="row d-flex">
        <!-- Card header -->
        <div class="card-header">
          <div class="text-center"><h2 class="mb-0">챌린지 생성</h2></div>
          <div class="text-center">
          <p class="mb-0 text-sm">
              나만의 챌린지를 만들어보세요!
          </p>
      </div>
          <hr class="my-3 horizontal dark" />
          </div>

          <div class="row">
            <div class="col-8">
        <label for="projectName" class="form-label">나만의 챌린지 이름</label>
        <input id="projectName" type="text" class="form-control" />
        <label class="mt-2 form-label">챌린지 태그</label>
        <div class="col-12">
          <select
            id="choices-category-edit"
            class="form-control"
            name="choices-category"
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
      </div>
        </div>
        <complex-background-card
              image="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/window-desk.jpg"
              description="AI추천 챌린지"
              :action="{ route: 'javascript:;', label: 'Read more' }"
            />
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
                    badge="과거챌린지1"
                    :specifications="[
                      { label: '', includes: true },
                      { label: '20GB Cloud storage', includes: true },
                      { label: 'Integration help', includes: false },
                      { label: 'Sketch Files', includes: false },
                      { label: 'API Access', includes: false },
                      { label: 'Complete documentation', includes: false },
                    ]"
                    :action="{
                      color: 'dark',
                      route: '/challenge/list',
                      label: '챌린지 보러가기',
                    }"
                  />
                </div>
                <div class="mb-4 col-lg-4 mb-lg-0">
                  <pricing-card
                    badge="과거챌린지2"
                    
                    :action="{
                      color: 'success',
                      route: '/challenge/list',
                      label: '챌린지 보러가기',
                    }"
                  />
                </div>
                <div class="mb-4 col-lg-4 mb-lg-0">
                  <pricing-card
                    badge="과거챌린지3"
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
                      route: '/challenge/list',
                      label: '챌린지 보러가기',
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



</template>
<script setup>
import flatPickr from "vue-flatpickr-component";
import OutlinedCounterCard from "./components/OutlinedCounterCard.vue"
import ComplexBackgroundCard from "./components/ComplexBackgroundCard.vue";
import PricingCard from "./components/PricingCard.vue";

const date = "";
const endDate = "";
const config = {
allowInput: true,
onDayCreate: (dObj, dStr, fp, dayElem) => {
    // 오늘 날짜에서 "today" 클래스 제거
    if (dayElem.classList.contains("today")) {
      dayElem.classList.remove("today");
    }
  }
};




</script>