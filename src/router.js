import Vue from 'vue';
import VueRouter from 'vue-router';

import DefaultView from './Default.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/', component: DefaultView
}];

export default new VueRouter({
    routes
});
