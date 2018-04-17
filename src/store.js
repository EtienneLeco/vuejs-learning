import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const loadJSon = async (url) => {
    return fetch(url).then(res => res.json());
};

export default new Vuex.Store({
    state: {
        data: []
    },
    mutations: {
        setData(state, data) {
            Vue.set(state, "data", data);
        }
    },
    actions: {
        clearData({ commit }) {
            commit("setData", []);
        },
        async loadData({ commit }) {
            const URL = "https://opendata.paris.fr/api/records/1.0/search//?dataset=zones-touristiques-internationales&rows=5";
            const res = await loadJSon(URL);
            commit("setData", res.records);
        }
    }
});
