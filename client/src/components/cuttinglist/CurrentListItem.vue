<template>
  <li>
    <div class="product-item">
      <div class="due">
        <h3>24 / 2 {{ earliestDueDate }}</h3>
      </div>
      <div class="amount">
        <h3>{{ sheetsTotal }} x {{ product.name }}</h3>
        <h4>
          {{ flatSheetsRequired }} Flat Sheets ( {{ product.noOutFlatSheet }}
          out )
        </h4>
        <h4>{{ packs }} Packs Total (of {{ product.packQty }})</h4>

        <h4>{{ bulks }} Bulks Total (of {{ product.bulkQty }})</h4>
      </div>
      <div class="orders">
        <add-order-modal
          :show="showAddOrderModal"
          @close="showAddOrderModal = false"
          :id="product.id"
        ></add-order-modal>

        <div>
          <paper-order
            class="order"
            v-for="order in orders"
            :key="order"
            :order="order"
          ></paper-order>
        </div>
        <div class="add-order">
          <button @click="showAddOrderModal = true">
            Add Order
          </button>
        </div>
      </div>
      <div class="buttons">
        <i class="fas fa-minus-circle delete" @click="markComplete"></i>
      </div>
    </div>
  </li>
</template>

<script>
import AddOrderModal from '../cuttinglist/AddOrderModal.vue';
import PaperOrder from '../cuttinglist/PaperOrder.vue';

export default {
  components: { AddOrderModal, PaperOrder },

  props: ['product'],
  data() {
    return {
      showAddOrderModal: false,
    };
  },
  computed: {
    orders() {
      return this.$store.getters.getActiveOrders.filter(
        (order) => order.productId === this.product.id
      );
    },
    earliestDueDate() {
      const allOrders = [...this.orders];
      const ordersSortedByDueDate = allOrders.sort(
        (order1, order2) => order2.dueDate - order1.dueDate
      );

      return ordersSortedByDueDate[0].dueDate;
    },
    packs() {
      return this.orders.reduce((acc, order) => acc + order.packs, 0);
    },
    bulks() {
      return this.orders.reduce((acc, order) => acc + order.bulks, 0);
    },

    flatSheetsRequired() {
      const { packQty, bulkQty, noOutFlatSheet } = this.product;

      const sheetsFromPacks = (this.packs * packQty) / noOutFlatSheet;
      const sheetsFromBulks = (this.bulks * bulkQty) / noOutFlatSheet;

      return Math.ceil(sheetsFromPacks + sheetsFromBulks);
    },
    sheetsTotal() {
      return this.flatSheetsRequired * this.product.noOutFlatSheet;
    },
  },
  methods: {
    markAllComplete() {
      this.$store.dispatch('deleteItem', this.product);
    },
  },
};
</script>

<style scoped>
/* * {
  border: 0.1px dotted red;
} */
li {
  list-style: none;
  display: flex;
  padding: 1rem;
}

li:nth-child(odd) {
  background-color: lightgray;
}

.product-item {
  display: flex;
  width: 100%;
}

.due {
  flex: 1;
}

.amount {
  text-align: left;
  flex: 5;
}

.orders {
  flex: 3;
}

.buttons {
  flex: 1;
  display: grid;
  place-items: top;
}

.orders-input {
  text-align: left;
  border-left: 1px solid #000;
  padding-left: 1rem;
  display: flex;
}

.orders-input input:first-child {
  flex: 4;
}

.orders-input input:not(:first-child) {
  width: 50px;
}

.add-order {
  text-align: left;
}

.order {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 50% 40% 10%;
  /* grid-template-rows: auto; */
  grid-auto-flow: column;
  text-align: left;
  padding: 5px;
  margin-bottom: 8px;
  background-color: var(--very-light-blue);
}

.edit {
  color: green;
  margin-bottom: 1rem;
}

.delete {
  color: maroon;
}
</style>
