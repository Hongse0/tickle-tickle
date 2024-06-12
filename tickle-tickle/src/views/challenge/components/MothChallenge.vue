<template>
  <div class="card">
    <div class="table-responsive py-4">
      <table class="table align-items-center mb-0">
        <thead>
          <tr>
            <th
              class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >
              챌린지명
            </th>
            <th
              class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
            >
              메모
            </th>
            <th
              class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >
              성공, 실패
            </th>
            <th
              class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >
              날짜
            </th>
            <th class="text-secondary opacity-7"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="challenge in challengeList" :key="challenge.id">
            <td>
              <div class="d-flex px-2 py-1">
                <div>
                  <img
                    src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-2.jpg"
                    class="avatar avatar-sm me-3"
                  />
                </div>
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-xs">{{ challenge.name }}</h6>
                </div>
              </div>
            </td>
            <td>
              <h6 class="mb-0 text-xs">{{ challenge.memo }}</h6>
            </td>
            <td class="align-middle text-center text-sm">
              <span
                v-if="challenge.status == true"
                class="badge badge-sm badge-success"
              >
                성공!
              </span>
              <span v-else class="badge badge-sm badge-danger"> 실패 </span>
            </td>
            <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold">{{
                challenge.date
              }}</span>
            </td>
            <td class="align-middle">
              <a
                href="javascript:;"
                class="text-secondary font-weight-bold text-xs"
                data-toggle="tooltip"
                data-original-title="Edit user"
                >Edit</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  challengeList: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
