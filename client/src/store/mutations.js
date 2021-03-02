export default {
  LOAD_PRODUCTS(state, payload) {
    state.products = [...payload];
  },
  LOAD_ORDERS(state, payload) {
    state.currentOrders = [...payload];
  },
  selectedStock(state, payload) {
    state.selectedStock = payload;
  },
  addOrder(state, savedOrder) {
    state.currentOrders.push(savedOrder);
  },
  //   editOrder(state, payload) {
  //     const indexOfOrder = state.currentOrders.indexOf(
  //       (order) =>
  //         order.productId === payload.productId &&
  //         order.petNumber === payload.petNumber
  //     );
  //   },

  //   markAllComplete(state, payload) {
  //     state.currentCuttingList.slice(index, 1);
  //     console.log(state.currentCuttingList);
  //   },
};
