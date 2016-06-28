/*jshint esversion: 6 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import * as filters from './common/javascript/filters';
import App from './App.vue';
import Views from './views';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter({
    hashbang: true,
    saveScrollPosition: true
});


router.redirect({
    '*': '/'
});


/**
 * register filters
 */
Object.keys(filters).forEach(function(k) {
    Vue.filter(k, filters[k]);
});


router.map(Views);

router.start(App, '#app');
