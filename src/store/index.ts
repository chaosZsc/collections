import Vue from 'vue'
import Vuex from 'vuex'

import baseStore from './base'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    baseStore
  }
})
