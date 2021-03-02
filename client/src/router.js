import { createRouter, createWebHistory } from 'vue-router';

import PriceCalc from './pages/PriceCalc.vue';
import NupCalc from './pages/NupCalc.vue';
import CuttingList from './pages/CuttingList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/nup' },
    { path: '/price', component: PriceCalc },
    { path: '/nup', component: NupCalc },
    { path: '/cuttinglist', component: CuttingList },
  ],
});

export default router;
