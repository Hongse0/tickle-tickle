<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  headers: {
    type: Array,
    required: true,
  },
  pages: {
    type: Array,
    required: true,
    validator: (value) => {
      // 각 객체가 정확한 속성을 갖고 있는지 확인
      return value.every(item => 'category' in item && 'total' in item);
    }
  },
});
</script>


<template>
  <div class="container">
    <div class="mt-4 card h-100 mt-md-0">
      <div class="p-3 pb-0 card-header">

      </div>
      <div class="px-3 pt-0 pb-2 card-body">
        <div class="p-0 table-responsive">
          <table class="table mb-0 align-items-center justify-content-center">
            <thead>
              <tr>
                <th v-for="(header, index) of headers" :key="index"
                  class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="({ category, total }, index) of pages" :key="index">
                <td>
                  <p class="mb-0 text-sm font-weight-bold">
                    {{ index + 1 }}. {{ category }}
                  </p>
                </td>
                <td>
                  <p class="mb-0 text-sm font-weight-bold">{{ total }}</p>
                </td>
                <!-- <td>
                <p class="mb-0 text-sm font-weight-bold">{{ time }}</p>
              </td>
              <td>
                <p class="mb-0 text-sm font-weight-bold">{{ rate }}</p>
              </td> -->
              </tr>
            </tbody>
          </table>
          <br><br>
        </div>
      </div>
    </div>
  </div>
</template>
