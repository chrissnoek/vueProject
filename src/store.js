import axios from 'axios'
import { createStore } from 'vuex'
import {popularGamesURL, upcomingGamesURL, newGamesURL, singleGameURL} from "./api"

const store = createStore({
  state: {
      popular: [],
      new:[],
      upcoming: [],
      currentGame: {}
  },
  mutations: {
    setGames (state, result) {
      console.log(result);
      state.popular = result.popular;
      state.new = result.new;
      state.upcoming = result.upcoming;
    },
    setDetail(state, result) {
      state.currentGame = result;
    }
  }, 
  actions: {
      async loadGames({commit})  {
        const {data: {results: popularResult}} = await axios.get(popularGamesURL);
        const {data: {results: upcomingResult}} = await axios.get(upcomingGamesURL);
        const {data: {results: newResult}} = await axios.get(newGamesURL);

        commit('setGames', {popular:popularResult, upcoming:upcomingResult, new:newResult})
      },
      async loadDetail({commit}, id) {
        const {data: detailResult} = await axios.get(singleGameURL(id));
        commit('setDetail', detailResult);
      }
  },
  getters: {
    getPopularGames: (state) => {
      console.log('getting popular games')
      return state.popular
    },

    getUpcomingGames: (state) => {
      console.log('getting upcoming games')
      return state.upcoming
    },

    getNewGames: (state) => {
      console.log('getting new games')
      return state.new
    },
    getCurrentGame: (state) => {
      console.log('getting new games')
      return state.currentGame
    }
  }
})

export default store;
