<template>
  <base-order-modal title="Edit Order">
    <template #due-date>
      <input type="date" v-model="dueDate.val" />
    </template>
    <template #due-time>
      <input type="time" v-model="dueTime.val" />
    </template>
    <template #pet-number>
      <input type="text" v-model="petNumber.val" @blur="petNumber.isValid" />
      <p v-if="!petNumber.isValid">Please assign an order</p>
    </template>
    <template #packs>
      <input
        type="number"
        id="packs"
        v-model.number="packs.val"
        min="0"
        @blur="clearValidity('packs')"
      />
      {{ packQty }}
    </template>
    <template #bulks>
      <input
        type="number"
        id="bulks"
        v-model.number="bulks.val"
        min="0"
        @blur="clearValidity('bulks')"
      />

      <p v-if="!packs.isValid">Please assign at least one pack or bulk</p>
    </template>

    <template #buttons class="buttons">
      <div class="buttons">
        <base-button @click="editOrder">Save</base-button>
        <button class="remove-order" @click="deleteOrder"></button>
        <i class="far fa-times-circle fa-3x"></i>
      </div>
    </template>
  </base-order-modal>
</template>

<script>
export default {
  props: {
    order: Object,
  },
  data() {
    return {
      dueDate: { val: null, isValid: true },
      dueTime: { val: null, isValid: true },
      petNumber: { val: '', isValid: true },
      packs: { val: 0, isValid: true },
      packQty: 0,
      bulkQty: 0,
      bulks: { val: 0, isValid: true },
      formIsValid: true,
    };
  },
  emits: ['save'],
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    editOrder() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }

      const editedOrder = {
        id: this.orderToEdit.productId,
        dueDate: this.dueDate,
        dueTime: this.dueTime,
        petNumber: this.petNumber,
        packs: this.packs,
        bulks: this.bulks,
      };

      this.$store.dispatch('editOrder', editedOrder);

      this.$emit('close');
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
    loadValues() {
      this.dueDate.val = this.orderToEdit?.dueDate;
      this.dueTime.val = this.orderToEdit?.dueTime;
      this.petNumber.val = this.orderToEdit?.petNumber;
      this.packs.val = this.orderToEdit?.packs;
      this.bulks.val = this.orderToEdit?.bulks;
      this.packQty = this.currentProduct?.packQty;
      this.bulkQty = this.currentProduct?.bulkQty;
    },
  },
  computed: {
    orderToEdit() {
      const currentOrders = this.$store.getters.getActiveOrders;

      return currentOrders.find(
        (el) =>
          el.petNumber === this.order.petNumber &&
          el.productId === this.order.productId
      );
    },
    currentProduct() {
      return this.$store.getters.getCurrentProducts.find(
        (el) => el.id === this.order.productId
      );
    },
  },
  mounted() {
    this.loadValues();
  },
};
</script>

<style scoped>
input {
  width: 100%;
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.fa-times-circle {
  color: rgb(231, 98, 98);
  margin: 0.5rem;
}
.fa-times-circle:hover {
  margin: 0.5rem;
}
</style>
