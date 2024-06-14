<script setup>

import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

import ArgonButton from './components/ArgonButton.vue';
import ArgonInput from './components/ArgonInput.vue';
import MOCK_DATA from '../../../db-server/MOCK_DATA.json';

const router = useRouter();

const name = ref("");
const email = ref("");
const password = ref("");
const selectedGender = ref("male");
const age = ref("")

const signup = async () => {
  const data = {
    name: name.value,
    id: email.value,
    password: password.value,
    gender: selectedGender.value,
    age: age.value,
    userId: MOCK_DATA.users.length + 1
  }
  try {
    await axios.post("http://localhost:3000/users", data);
    console.log("회원가입 성공");
    await router.push('/login/signin')
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-7 mt-2">
          <div class="card border-0 mb-0">
            <div class="card-header bg-transparent">
              <h5 class="text-dark text-center mt-2 mb-3">회원가입</h5>
              <div class="btn-wrapper text-center"></div>
            </div>
            <div class="card-body px-lg-5 pt-0">
              <div class="text-center text-muted mb-4">
                <small>최소한의 정보로 회원이 되어보세요!</small>
              </div>
              <form @submit.prevent="signup" role="form" class="text-start">
                <div class="mb-3">
                  <argon-input v-model="name" id="name" type="name" placeholder="이름" aria-label="name"
                    :isRequired="true" />
                </div>
                <div class="mb-3">
                  <argon-input v-model="email" id="email" type="email" placeholder="이메일" aria-label="Email"
                    :isRequired="true" />
                </div>
                <div class="mb-3">
                  <argon-input v-model="password" id="password" type="password" placeholder="비밀번호"
                    aria-label="Password" :isRequired="true" />
                </div>
                <div class="row my-3">
                  <div class="col-auto">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="male"
                        v-model="selectedGender" value="male" />
                      <label class="form-check-label" for="male">남성</label>
                    </div>
                  </div>
                  <div class="col-auto">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="female"
                        v-model="selectedGender" value="female" />
                      <label class="form-check-label" for="female">여성</label>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <argon-input v-model="age" id="age" type="number" placeholder="나이" aria-label="age"
                    :isRequired="true" />
                </div>
                <div class="text-center">
                  <argon-button type="submit" color="success" variant="gradient" full-width class="my-4 mb-2">
                    가입
                  </argon-button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>