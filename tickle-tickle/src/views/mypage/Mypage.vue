<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import About from './components/About.vue';

const userName = ref('');
const userAge = ref();
const userGender = ref('');
const userPassword = ref('');
const userId = ref('');

const localStorageUserId = Number(localStorage.getItem("userId"));

const fetchProfile = async () => {
  try {
    const response = await axios.get("http://localhost:3000/users");
    const users = response.data;
    const user = users.find(user => user.userId === localStorageUserId);
    
    if (user) {
      userName.value = user.name;
      userAge.value = user.age;
      userGender.value = user.gender;
      userPassword.value = user.password;
      userId.value = user.id;
    } else {
      console.error('User not found');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

onMounted(fetchProfile);
</script>

<template>
  <section>
    <div class="py-7 container-fluid">
      <div class="card shadow-lg">
        <div class="card-body p-1">
          <div class="row gx-4">
            <div class="col-auto">
              <div class="avatar avatar-xl position-relative">
                <img
                  src="../../assets/img/pink.png"
                  alt="profile_image"
                  class="shadow-sm w-100 border-radius-lg"
                  height="55px"
                />
              </div>
            </div>
            <div class="col-auto my-auto">
              <div class="h-100">
                <h5 class="mb-1">{{ userName }}</h5>
                <p class="mb-0 font-weight-bold text-sm">{{ userAge }}</p>
              </div>
            </div>
            <div class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0">
              <!-- 추가 컨텐츠 -->
            </div>
          </div>
        </div>
      </div>
      <br><br>
      <div class="nav-wrapper position-relative end-0">
        <About :userGender="userGender" :userPassword="userPassword" :userId="userId" />
      </div>
    </div>
  </section>
</template>
