<script setup>
import ArgonButton from './components/ArgonButton.vue';
import ArgonInput from './components/ArgonInput.vue';
import ArgonSwitch from './components/ArgonSwitch.vue';
</script>

<template>
    <div>
        <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-7 mt-2">
            <div class="card border-0 mb-0">
              <div class="card-header bg-transparent">
                <h5 class="text-dark text-center mt-2 mb-3">Sign in</h5>
                <div class="btn-wrapper text-center">
                  
                 
                </div>
              </div>
              <div class="card-body px-lg-5 pt-0">
                <div class="text-center text-muted mb-4">
                  <small>Or sign in with credentials</small>
                </div>
                <form role="form" class="text-start">
                  <div class="mb-3">
                    <argon-input
                      id="email"
                      type="email"
                      placeholder="Email"
                      aria-label="Email"
                    />
                  </div>
                  <div class="mb-3">
                    <argon-input
                      id="password"
                      type="password"
                      placeholder="Password"
                      aria-label="Password"
                    />
                  </div>
                  <argon-switch id="rememberMe" name="rememberMe">
                    Remember me
                  </argon-switch>

                  <div class="text-center">
                    <argon-button
                      color="success"
                      variant="gradient"
                      full-width
                      class="my-4 mb-2"
                      >Sign in</argon-button
                    >
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
                      >Sign up</argon-button
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

