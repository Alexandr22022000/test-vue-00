import * as Vue from 'vue';
import Vuex from 'vuex';
import Store from './app/store/index'
import MainComponent from './app/main/';

Vue.use(Vuex);

class Application {
    private vue: Vue;
    private store: any; 

    constructor () {
        this.store = new Store();
        this.vue = new Vue({
            el: '#app',
            components: {
                MainComponent
            },
            store: this.store
        });
    }
}

new Application();