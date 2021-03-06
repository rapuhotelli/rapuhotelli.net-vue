import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import Contentful from "./utils/contentful.js";

Vue.use(Vuex);

const contentful = new Contentful();

//const allIds = contentful.get(contentful.allIds)
/*
const c = contentful.getEntries().then(e => {
  console.log(contentful.getAllIds(e))
})
*/
const store = new Vuex.Store({
  state: {
    loading: 0,
    entries: null,
    series: []
  },
  mutations: {
    loadStart(state) {
      state.loading++;
    },
    loadEnd(state) {
      state.loading--;
    },
    setEntries(state, entries) {
      state.entries = entries;
    },
    setSeries(state, series) {
      state.series = series;
    }
  },
  actions: {
    getEntries({ commit }) {
      commit("loadStart");
      contentful.load().then(entries => {
        commit("setEntries", contentful.getEntries(entries));
        commit("setSeries", contentful.getSeries(entries));
        commit("loadEnd");
      });
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
