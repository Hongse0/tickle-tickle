<script setup>
defineProps({
  color: {
    type: String,
    default: "success",
  },
  song: {
    type: Object,
    label: String,
    album: String,
    default: () => ({
      label: "Some Kind Of Blues",
      album: "Deftones",
    }),
  },
});
</script>
<template>
  <div
    :class="`card card-background card-background-mask-${color}  mt-4 move-on-hover align-items-start`"
  >
    <div class="cursor-pointer">
      <div
        class="full-background"
        :style="{
          backgroundImage: `url('https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80')`,
        }"
      ></div>
      <div class="card-body">
        <h5 class="mb-0 text-white">{{ song.label }}</h5>
        <p class="text-sm text-white">{{ song.album }}</p>
        <div class="mt-5 d-flex">
          <button
            class="p-2 mb-0 btn btn-outline-white rounded-circle"
            type="button"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Prev"
          >
            <i class="p-2 fas fa-backward"></i>
          </button>
          <button
            class="p-2 mx-2 mb-0 btn btn-outline-white rounded-circle"
            type="button"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Pause"
          >
            <i class="p-2 fas fa-play"></i>
          </button>
          <button
            class="p-2 mb-0 btn btn-outline-white rounded-circle"
            type="button"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Next"
          >
            <i class="p-2 fas fa-forward"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
