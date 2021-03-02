<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style scoped>
button {
  margin: 0.5rem;
  width: 200px;
  height: 3rem;
  border-radius: 10px;
  border-style: none;
  background: var(--cool-gray);
}

.blue-bg {
  background: var(--light-blue);
  color: #fff;
}
</style>
