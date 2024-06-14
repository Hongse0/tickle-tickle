<script setup>
import { ref, onMounted,defineProps } from 'vue';
import axios from 'axios';

const props = defineProps({
  userGender: String,
  userPassword: String,
  userId: [String, Number]
});

const userId2 = Number(localStorage.getItem("userId"));


const newPassword = ref('');
const Id = ref('');

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/users");
    const users = response.data;
    const currentUser = users.find(currentUser => currentUser.userId === userId2);

    if (currentUser) {
      Id.value = currentUser.id;
      
      
    } else {
      console.error('User not found');
    }
  } catch (error) {
    console.error('Error fetching data', error);
  }
}

const handleChangePassword = async () => {
  try {
      await axios.patch(`http://localhost:3000/users/${Id.value}`, {
      password: newPassword.value
    });
    
    
    
  } catch (error) {
    console.error('Error changing password');
  }
}


onMounted(fetchData);
</script>


<template>
  <div class="p-3 bg-white card multisteps-form__panel border-radius-xl js-active position-relative"
       data-animation="FadeIn">
    <div class="text-center">
      <div class="mx-auto">
        <h3 class="font-weight-normal">개인 정보</h3>
      </div>
    </div>
    <div class="multisteps-form__content">
      <div class="mt-3 row">
        <div class="mt-4 col-12 col-sm-8 mt-sm-0 text-start">
          <label>아이디</label>
          <input class="mb-3 multisteps-form__input form-control" type="text" :value="props.userId" readonly/>
          <label>성</label>
          <input class="mb-3 multisteps-form__input form-control" type="text" :value="props.userGender" readonly/>
          <label>비밀번호</label>
          <input class="multisteps-form__input form-control" type="password" :value="props.userPassword" readonly/>
        </div>
      </div>
      <div class="mt-4 button-row d-flex">
        <button class="mb-0 btn bg-gradient-dark ms-auto js-btn-next" type="button" data-bs-toggle="modal"
                data-bs-target="#passwordModal">
          비밀번호 변경
        </button>
      </div>
    </div>
  </div>

  <!-- 비밀번호 변경 모달 -->
  <div class="modal fade" id="passwordModal" tabindex="-1" aria-labelledby="passwordModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="passwordModalLabel">비밀번호 변경</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input type="password" class="form-control" v-model="newPassword" required>
          <p>여기는 비밀번호 변경 모달의 내용입니다.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
          <button type="button" class="btn btn-primary" @click="handleChangePassword">저장</button>
        </div>
      </div>
    </div>
  </div>
</template>