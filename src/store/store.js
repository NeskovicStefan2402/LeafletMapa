import Vue from 'vue';
import forma from './modules/forma';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store=new Vuex.Store({
    modules:{
        forma:forma
    }
});