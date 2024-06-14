<script setup>
import { ref } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { onBeforeMount, onBeforeUnmount } from "vue";

import ArgonButton from './components/ArgonButton.vue';
import ArgonInput from './components/ArgonInput.vue';
import ArgonSwitch from './components/ArgonSwitch.vue';

const store = useStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const rememberMe = ref(false);

const toggleDefaultLayout = () => store.commit("toggleDefaultLayout");

onBeforeMount(() => {
  store.state.hideConfigButton = true;
  toggleDefaultLayout();
});
onBeforeUnmount(() => {
  store.state.hideConfigButton = false;
  toggleDefaultLayout();
});

const login = async () => {
  try {
    const response = await axios.get("http://localhost:3000/users", {
      params: {
        id: email.value,
        // password: password.value
      }
    });
    
    const user = response.data.find(user => user.id === email.value);
    if (user && user.password === password.value) {
      localStorage.setItem("userId", user.userId);
      router.push("/main");
    } else {
      alert("로그인 실패: 잘못된 이메일 또는 비밀번호입니다.");
    }
  } catch (error) {
    console.error("로그인 중 오류 발생:", error);
  }
};

const signup = () =>{
  router.push({path:"/signup"});
}
</script>

<template>
  <div>
    <div class="container">
      <div class="row justify-content-center pt-7">
        <div class="col-lg-4 col-md-7 mt-2">
          <div class="card border-0 mb-0">
            <div class="card-header bg-transparent">
              <h5 class="text-dark text-center mt-2 mb-3">로그인</h5>
              <div class="btn-wrapper text-center"></div>
            </div>
            <div class="card-body px-lg-5 pt-0">
              <div class="text-center text-muted mb-4">
                <small>또래들이 돈을 어떻게 소비하는지 알아보세요!</small>
              </div>
              <form @submit.prevent="login" role="form" class="text-start">
                <div class="mb-3">
                  <argon-input
                    v-model="email"
                    id="email"
                    type="email"
                    placeholder="이메일"
                    aria-label="Email"
                  />
                </div>
                <div class="mb-3">
                  <argon-input
                    v-model="password"
                    id="password"
                    type="password"
                    placeholder="비밀번호"
                    aria-label="Password"
                  />
                </div>
                <argon-switch v-model="rememberMe" id="rememberMe" name="rememberMe">
                  자동 로그인
                </argon-switch>
                <div class="text-center">
                  <argon-button
                    type="submit"
                    color="success"
                    variant="gradient"
                    full-width
                    class="my-4 mb-2"
                  >
                    로그인
                  </argon-button>
                </div>
                <div class="mb-2 position-relative text-center">
                  <p
                    class="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3"
                  >
                    or
                  </p>
                </div>
                <div class="text-center">
                  <argon-button
                    color="dark"
                    variant="gradient"
                    full-width
                    class="mt-2 mb-4"
                    @click="signup()"
                  >
                    회원가입
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
