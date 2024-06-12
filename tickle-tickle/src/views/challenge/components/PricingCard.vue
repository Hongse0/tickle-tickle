<script setup>
defineProps({
  badge: {
    type: String,
    required: true,
  }, 
  specifications: {
    type: Array,
    required: true,
    label: String,
    includes: Boolean,
  },
  

  action: {
    type: Object,
    route: String,
    label: String,
    color: String,
    default: () => ({
      route: "/",
      label: "Join",
      color: "dark",
    }),
  },
});
</script>
<template>
  <div class="card">
    <div class="pt-4 pb-3 text-center card-header">
      <span class="text-uppercase font-weight-bold text-dark">{{ badge }}</span>
      <h1 class="mt-2 font-weight-bold">
      </h1>
    </div>
    <div class="pt-0 text-center card-body text-lg-start">
      <div
        class="p-2 d-flex justify-content-lg-start justify-content-center"
      >

        <div>
          <span class="ps-3">{{ label }}</span>
        </div>
      </div>
      <a
        :href="action.route"
        class="mt-3 mb-0 btn btn-icon d-lg-block"
        :class="`bg-gradient-${action.color}`"
      >
        {{ action.label }}
        <i class="fas fa-arrow-right ms-1"></i>
      </a>
    </div>
  </div>
</template>
