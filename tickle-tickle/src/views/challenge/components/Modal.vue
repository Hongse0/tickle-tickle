<template>
    <div v-if="isOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <slot></slot>
        <button class="m-0 btn bg-gradient-success ms-2" @click="closeModal">Close</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const { isOpen } = defineProps({
    isOpen: Boolean,
  });
  
  const emit = defineEmits(['update:isOpen']);
  
  const closeModal = () => {
    emit('update:isOpen', false);
  };
  </script>
  
  