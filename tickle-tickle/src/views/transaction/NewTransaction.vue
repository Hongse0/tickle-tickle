<script setup>
import { onMounted } from "vue";
import flatPickr from "vue-flatpickr-component";
import axios from 'axios';
//import Dropzone from "dropzone";
import Quill from "quill";
import Choices from "choices.js";

const getChoices = (id) => {
  if (document.getElementById(id)) {
    var element = document.getElementById(id);
    return new Choices(element, {
      searchEnabled: false,
      allowHTML: true,
    });
  }
};

import { ref } from "vue";

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/transactions");
    const jsonData = response.data;
    console.log(jsonData);
  }
  catch (error) {
    console.error(error)
  }
};

// const createData = async() =>{
//   try{
//     const response = await axios.post("http://localhost:3000/transactions")
//   }
// }

const transactionName = ref("");
const selectedCategory = ref("income"); // 초기값으로 수입을 선택함
const selectedExpendCategory = ref(""); // 지출 카테고리 선택
const selectedIncomeCategory = ref(""); // 수입 카테고리 선택
const date = ref("")
const inputPrice = ref("");
const inputMemo = ref("")

const submitForm = async () => {
  const data = {
    title: transactionName.value,
    memo: inputMemo.value,
    isIncome: selectedCategory.value === 'income',
    selectedExpendCategory: selectedExpendCategory.value,
    category: selectedCategory.value === 'income' ? selectedIncomeCategory.value : selectedExpendCategory.value,
    start: date.value,
    cost: inputPrice.value,
    userId: 1
  };

  try {
    await axios.post("http://localhost:3000/transactions", data);
    console.log("Transaction created successfully!")
  } catch (error) {
    console.error("Error creating transaction:", error);
  }
}



// const date = "";
const config = {
  allowInput: true,
  onDayCreate: (dObj, dStr, fp, dayElem) => {
    // 오늘 날짜에서 "today" 클래스 제거
    if (dayElem.classList.contains("today")) {
      dayElem.classList.remove("today");
    }
  },
};

onMounted(() => {
  if (document.getElementById("editor")) {
    new Quill("#editor", {
      theme: "snow", // Specify theme in configuration
    });
    getChoices("choices-category-expend");
    getChoices("choices-category-income");

  }
  fetchData();
});



//   카테고리 미리 선택해놓는 코드
// if (document.getElementById("choices-multiple-remove-button")) {
//   var element = document.getElementById("choices-multiple-remove-button");
//   const example = new Choices(element, {
//     removeItemButton: true,
//     allowHTML: true,
//   });


//   example.setChoices(
//     [
//       {
//         value: "One",
//         label: "Label One",
//         disabled: true,
//       },
//       {
//         value: "Two",
//         label: "Label Two",
//         selected: true,
//       },
//       {
//         value: "Three",
//         label: "Label Three",
//       },
//     ],
//     "value",
//     "label",
//     false
//   );
//}

// Dropzone.autoDiscover = false;
// var drop = document.getElementById("dropzone");
// new Dropzone(drop, {
//   url: "/file/post",
//   addRemoveLinks: true,
// });

</script>
<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="mx-auto col-lg-9 col-12">
        <form v-on:submit.prevent="submitForm">
          <div class="mt-4 card card-body">
            <h6 class="mb-0">가계부 등록</h6>
            <p class="mb-0 text-sm">오늘의 가계부를 등록해보세요.</p>
            <hr class="my-3 horizontal dark" />
            <label for="transactionName" class="form-label">내역</label>
            <input v-model="transactionName" id="transactionName" type="text" class="form-control mb-3" />
            <div class="row my-3">
              <div class="col-auto">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="income"
                    v-model="selectedCategory" value="income" />
                  <label class="form-check-label" for="income">수입</label>
                </div>
              </div>
              <div class="col-auto">
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="expend"
                    v-model="selectedCategory" value="expend" />
                  <label class="form-check-label" for="expend">지출</label>
                </div>
              </div>
            </div>

            <div v-if="selectedCategory === 'expend'" class="my-3">
              <label>카테고리</label>
              <select v-model="selectedExpendCategory" class="form-control" name="choices-sizes">
                <option value="education">교육</option>
                <option value="traffic">교통</option>
                <option value="cafe">카페/간식</option>
                <option value="alcohol">술/유흥</option>
                <option value="health">의료/건강</option>
                <option value="food">식비</option>
                <option value="life">생활</option>
                <option value="present">경조/선물</option>
                <option value="culture">문화/여가</option>
                <option value="finance">금융</option>
                <option value="shop">쇼핑</option>
                <option value="etc">기타</option>
              </select>
            </div>
            <div v-else-if="selectedCategory === 'income'" class="my-3">
              <label>카테고리</label>
              <select v-model="selectedIncomeCategory" class="form-control" name="choices-sizes">
                <option value="salary">급여</option>
                <option value="business">사업수익</option>
                <option value="pin">용돈</option>
                <option value="finance">금융</option>
                <option value="insurance">보험금</option>
                <option value="scholarship" selected>장학금</option>
                <option value="used">중고거래</option>
                <option value="real">부동산</option>
                <option value="dutch">더치페이</option>
                <option value="etc">기타</option>
              </select>
            </div>

            <div class="row my-3">
              <div class="col-6">
                <label class="form-label">날짜</label>
                <flat-pickr v-model="date" class="form-control datetimepicker" placeholder="날짜 선택"
                  :config="config"></flat-pickr>
              </div>

              <div class="col-6">
                <label for="inputPrice" class="form-label">금액</label>
                <input v-model="inputPrice" id="inputPrice" type="text" class="form-control mb-3" />
              </div>
            </div>


            <label class="my-3">메모</label>


            <input v-model="inputMemo" id="inputMemo" type="text" class="form-control mb-3" style="height: 100px;" />

            <!-- <label class="mt-4 form-label">Starting Files</label>
          <form
            id="dropzone"
            action="/file-upload"
            class="form-control dropzone"
          >
            <div class="fallback">
              <input name="file" type="file" multiple />
            </div>
          </form> -->

            <div class="mt-4 d-flex justify-content-end">
              <button type="button" name="button" class="m-0 btn btn-light">
                취소
              </button>
              <button type="submit" name="button" class="m-0 btn bg-gradient-success ms-2">
                완료
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
