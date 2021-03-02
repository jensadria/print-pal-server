import { createStore } from 'vuex';

import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

const store = createStore({
  state() {
    return {
      products: [],
      //     [{
      // id: 'BLO004BLU',
      // name: 'Bloom A4 Card 270gsm Blush',
      // brand: 'Bloom',
      // colour: 'Blush',
      // gsm: 270,
      // noOutFlatSheet: 9,
      // packType: 'Pack',
      // packQty: 10,
      // bulkQty: 50,
      // stock: 999999,
      // discontinued: false,
      // flatSheetCode: 'BLO000BLU00',
      // flatSheetStock: 606,
      // parentCode: null,
      // millPackSize: 100,
      //     },
      //     {
      //       id: 'BLO004CHI',
      //       name: 'Bloom A4 Card 270gsm China Blue',
      //       brand: 'Bloom',
      //       colour: 'China Blue',
      //       gsm: 270,
      //       noOutFlatSheet: 9,
      //       packType: 'Bulk',
      //       packQty: 10,
      //       bulkQty: 50,
      //       stock: 999999,
      //       discontinued: false,
      //       flatSheetCode: 'BLO000BLU00',
      //       flatSheetStock: 247,
      //       parentCode: null,
      //       millPackSize: 100,
      //     },
      //     {
      //       id: 'BOS004CLA',
      //       name: 'Boston A4 Card 350gsm Classic White',
      //       brand: 'Boston',
      //       colour: 'Classic White',
      //       gsm: 350,
      //       noOutFlatSheet: 9,
      //       packType: 'Bulk',
      //       packQty: 20,
      //       bulkQty: 100,
      //       stock: 999999,
      //       discontinued: false,
      //       flatSheetCode: 'BOS002CLA00',
      //       flatSheetStock: 438,
      //       parentCode: null,
      //       millPackSize: 125,
      //     },
      //   ],
      currentOrders: [],
      // [
      //   {
      //     productId: 'BLO004BLU',
      //     dueDate: null,
      //     dueTime: null,
      //     petNumber: 'PET12345',
      //     packs: 3,
      //     bulks: 2,
      //     cut: false,
      //     packed: false,
      //     completed: false,
      //   },
      //   {
      //     productId: 'BLO004CHI',
      //     dueDate: null,
      //     dueTime: null,
      //     petNumber: 'PET12367',
      //     packs: 1,
      //     bulks: 5,
      //     cut: false,
      //     packed: false,
      //     completed: false,
      //   },
      //   {
      //     productId: 'BLO004CHI',
      //     dueDate: null,
      //     dueTime: null,
      //     petNumber: 'PET12389',
      //     packs: 2,
      //     bulks: 3,
      //     cut: true,
      //     packed: true,
      //     completed: true,
      //   }]
      selectedStock: '',
    };
  },
  actions,
  mutations,
  getters,
});

export default store;
