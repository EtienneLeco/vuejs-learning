import Vue from "vue";

import App from "./App.vue";

//import protectedEvent from "../../client/vuejs/directives/protectedEvent";

//Vue.directive("protected-event", protectedEvent);

import router from "./router";

new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<app></app>",
});
