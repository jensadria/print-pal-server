export default {
  getProducts(state) {
    return state.products;
  },
  getOrders(state) {
    return state.currentOrders;
  },
  getActiveOrders(_, { getOrders }) {
    return getOrders.filter((order) => order.completed === false);
  },
  getCurrentProducts(_, { getProducts, getActiveOrders }) {
    const productIds = [
      ...new Set(getActiveOrders.map((order) => order.productId)),
    ];

    const productOrders = getProducts.filter((product) =>
      productIds.includes(product.id)
    );

    return productOrders;
  },
  getSelectedStock(state) {
    return state.selectedStock;
  },
};
