<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  iconOnly: {
    type: Boolean,
    default: false,
  },
  socialBtn: {
    type: String,
    required: true,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "default",
  }
})
const getClasses = (iconOnly, socialBtn, rounded, size) => {
  let iconOnlyValue, socialBtnValue, roundedValue, sizeValue;

  iconOnlyValue = iconOnly ? "btn-icon-only" : null;

  socialBtnValue = socialBtn ? `btn-${socialBtn}` : null;

  roundedValue = rounded ? "rounded-circle" : null;

  sizeValue = size ? `btn-${size}` : null;

  return `${iconOnlyValue} ${socialBtnValue} ${roundedValue} ${sizeValue}`;
}
const getIcon = (icon) => (icon ? icon : null)
</script>
<template>
  <button type="button" class="btn" :class="getClasses(iconOnly, socialBtn, rounded, size)">
    <span class="btn-inner--icon">
      <i :class="getIcon(icon)"></i>
    </span>
    <span class="btn-inner--text">
      &nbsp;
      <slot />
    </span>
  </button>
</template>

