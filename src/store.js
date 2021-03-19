import axios from 'axios'
import { createStore } from 'vuex'
import {popularGamesURL, upcomingGamesURL, newGamesURL} from "./api"

const store = createStore({
  state: {
      popular: [],
      new:[],
      upcoming: []
  },
  mutations: {
    setGames (state, result) {
      console.log(result);
      state.popular = result.popular;
      state.new = result.upcoming;
      state.upcoming = result.new;
    }
  }, 
  actions: {
      async loadGames({commit})  {
        const {data: {results: popularResult}} = await axios.get(popularGamesURL);
        const {data: {results: upcomingResult}} = await axios.get(upcomingGamesURL);
        const {data: {results: newResult}} = await axios.get(newGamesURL);

        commit('setGames', {popular:popularResult, upcoming:upcomingResult, new:newResult})
      }
  },
  getters: {
    getPopularGames: (state) => {
      console.log('getting popular games')
      return state.popular
    }
  }
})

export default store;
