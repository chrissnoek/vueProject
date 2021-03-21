import axios from 'axios'
import { createStore } from 'vuex'
import {popularGamesURL, upcomingGamesURL, newGamesURL, singleGameURL, searchSingleGameURL} from "./api"

const store = createStore({
  state: {
      popular: [],
      new:[],
      upcoming: [],
      currentGame: {},
      loadingGames: false,
      loadingDetail: false,
      searchResult:[]
  },
  mutations: {
    setLoadingGames (state) {state.loadingGames = true},
    setLoadingDetail (state) {state.loadingDetail = true},
    setGames (state, result) {
      state.popular = result.popular;
      state.new = result.new;
      state.upcoming = result.upcoming;
      state.loadingGames = false;
    },
    setDetail(state, result) {
      state.currentGame = result;
      state.loadingDetail = false;
    },
    setSearchResult(state, result) {
      state.searchResult = result;
    }
  }, 
  actions: {
      async loadGames({commit})  {
        commit('setLoadingGames');
        const {data: {results: popularResult}} = await axios.get(popularGamesURL);
        const {data: {results: upcomingResult}} = await axios.get(upcomingGamesURL);
        const {data: {results: newResult}} = await axios.get(newGamesURL);

        commit('setGames', {popular:popularResult, upcoming:upcomingResult, new:newResult})
      },
      async loadDetail({commit}, id) {
        commit('setLoadingDetail');
        const {data: detailResult} = await axios.get(singleGameURL(id));
        commit('setDetail', detailResult);
      },
      async fetchSearch({commit}, name) {
        const {data: {results: searchResult}} = await axios.get(searchSingleGameURL(name));
        commit('setSearchResult', searchResult);
      },
      clearSearch({commit}) {
        commit('setSearchResult', [])
      },
  },
  getters: {
    getPopularGames: (state) => {
      return state.popular
    },

    getUpcomingGames: (state) => {
      return state.upcoming
    },

    getNewGames: (state) => {
      return state.new
    },
    getCurrentGame: (state) => {
      return state.currentGame
    },
    getLoadingStatusGames: (state) => {
      return state.loadingGames
    },
    getLoadingStatusDetail: (state) => {
      return state.loadingDetail
    },
    getSearched: (state) => {
      return state.searchResult
    }
  }
})

export default store;
