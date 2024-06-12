<script setup>
import { onMounted } from "vue";
import flatPickr from "vue-flatpickr-component";
//import Dropzone from "dropzone";
//import Choices from "choices.js";
import Quill from "quill";

const date = "";
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

    
  }

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
});
</script>
<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="mx-auto col-lg-9 col-12">
        <div class="mt-4 card card-body">
          <h6 class="mb-0">가계부 등록</h6>
          <p class="mb-0 text-sm">오늘의 가계부를 등록해보세요.</p>
          <hr class="my-3 horizontal dark" />
          <label for="projectName" class="form-label">내역</label>
          <input id="projectName" type="text" class="form-control" />
          
          <label class="mt-4">메모</label>
          
          <div id="editor">
            
          </div>
          <label class="mt-4 form-label">카테고리</label>
          <select
            id="choices-multiple-remove-button"
            class="form-control"
            name="choices-multiple-remove-button"
          >
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
          <div class="row">
            <div class="col-6">
              <label class="form-label">날짜</label>
              <flat-pickr
                v-model="date"
                class="form-control datetimepicker"
                placeholder="날짜 선택"
                :config="config"
              ></flat-pickr>
            </div>
            
          </div>
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
            <button
              type="button"
              name="button"
              class="m-0 btn bg-gradient-success ms-2"
            >
              완료
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
