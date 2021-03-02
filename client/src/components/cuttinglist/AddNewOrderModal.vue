<template>
  <base-order-modal title="Add Order">
    <template #stock-selector><stock-selector></stock-selector></template>
    <template #due-date>
      <input type="date" v-model="dueDate.val" />
    </template>
    <template #due-time>
      <input type="time" v-model="dueTime.val" />
    </template>
    <template #pet-number>
      <input
        type="text"
        id="pet-number"
        v-model="petNumber.val"
        @blur="petNumber.isValid"
      />
      <p v-if="!petNumber.isValid">Please assign an order</p>
    </template>
    <template #packs>
      <input
        type="number"
        id="packs"
        v-model.number="packs.val"
        min="0"
        @blur="packs.isValid"
      />
    </template>
    <template #bulks>
      <input
        type="number"
        id="bulks"
        v-model.number="bulks.val"
        min="0"
        @blur="packs.isValid"
      />
      <p v-if="!packs.isValid">Please assign at least one pack or bulk</p>
    </template>
    <template #buttons>
      <base-button @click="saveOrder">Save</base-button>
    </template>
  </base-order-modal>
</template>

<script>
import StockSelector from '../cuttinglist/StockSelector.vue';

export default {
  components: { StockSelector },
  data() {
    return {
      dueDate: { val: null, isValid: true },
      dueTime: { val: null, isValid: true },
      petNumber: { val: '', isValid: true },
      packs: { val: 0, isValid: true },
      bulks: { val: 0, isValid: true },
      formIsValid: true,
    };
  },
  emits: ['save'],

  methods: {
    saveOrder() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const savedOrder = {
        productId: this.getSelectedStockId,
        dueDate: this.dueDate.val,
        dueTime: this.dueTime.val,
        petNumber: this.petNumber.val,
        packs: this.packs.val,
        bulks: this.bulks.val,
        cut: false,
        packed: false,
        completed: false,
      };

      this.$store.dispatch('addOrder', savedOrder);

      this.$emit('close');

      this.dueDate.val = null;
      this.dueTime.val = null;
      this.petNumber.val = '';
      this.packs.val = 0;
      this.bulks.val = 0;
    },
    exitOrder() {
      this.$emit('close');
    },
    validateForm() {
      this.formIsValid = true;
      if (this.petNumber.val === '') {
        this.petNumber.isValid = false;
        this.formIsValid = false;
      }
      if (this.packs.val === 0 && this.packs.val === 0) {
        this.packs.isValid = false;
        this.formIsValid = false;
      }
    },
  },
  computed: {
    getSelectedStockId() {
      return this.$store.getters.getSelectedStock.id;
    },
  },
};
</script>

<style scoped>
input {
  width: 100%;
}
</style>
