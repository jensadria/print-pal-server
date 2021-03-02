<template>
  <div>
    <h4>{{ order.petNumber }}</h4>
    <div>
      {{ order.dueDate === 'null' ? 'No Due Date' : 'Due ' + order.dueDate }}
      {{ order.dueTime === 'null' ? '' : order.dueTime }}
    </div>
    <div>{{ order.packs }} Packs</div>
    <div>{{ order.bulks }} Bulks</div>
    <edit-order-modal
      :show="showEditOrderModal"
      @close="showEditOrderModal = false"
      :order="order"
    ></edit-order-modal>
    <button @click="showEditOrderModal = true">
      Edit
    </button>
    <div></div>
  </div>
</template>

<script>
import EditOrderModal from '../cuttinglist/EditOrderModal.vue';

export default {
  components: { EditOrderModal },
  props: ['order'],
  data() {
    return {
      showEditOrderModal: false,
    };
  },
};
</script>

<style></style>
