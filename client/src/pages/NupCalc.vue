<template>
  <div>
    <nup-form-calc></nup-form-calc>
  </div>
</template>

<script>
import NupFormCalc from '../components/nup/NupFormCalc.vue';

export default {
  components: {
    NupFormCalc,
  },
};
</script>

<style scoped>
div {
  display: flex;
  width: 100%;
}

/* .size-control {
  width: 50%;
} */
</style>
