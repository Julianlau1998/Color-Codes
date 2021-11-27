import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    converter: false,
    color_picker: true,
    image_picker: false,
    componentTransition: 'swipe-component-left',
    base64: ''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
