<template>
  <div class="home">
      <transition
        :name= componentTransitionName 
        mode="out-in"
        ref="componentTransition"
      >
        <ColorPicker v-if="!converter" />
        <Converter v-else />
      </transition>
  </div>
</template>

<script>
import ColorPicker from '../components/ColorPicker'
import Converter from '../components/Converter'

export default {
  name: 'Home',
  components: {
    ColorPicker,
    Converter
  },
  computed: {
    converter () {
      return this.$store.state.converter
    },
    componentTransitionName () {
      return this.$store.state.componentTransition
    }
  }
}
</script>

<style>
</style>
