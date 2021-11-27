<template>
  <div class="home">
      <!-- <transition-group
        :name= componentTransitionName 
        mode="out-in"
        ref="componentTransition"
      > -->
        <ImagePicker v-if="imagePicker" />
        <ColorPicker v-if="colorPicker" />
        <Converter v-if="converter" />
      <!-- </transition-group> -->
  </div>
</template>

<script>
import ColorPicker from '../components/ColorPicker'
import Converter from '../components/Converter'
import ImagePicker from '../components/ImagePicker'

export default {
  name: 'Home',
  components: {
    ColorPicker,
    Converter,
    ImagePicker
  },
  computed: {
    converter () {
      return this.$store.state.converter
    },
    colorPicker () {
      return this.$store.state.color_picker
    },
    imagePicker () {
      return this.$store.state.image_picker
    },
    componentTransitionName () {
      return this.$store.state.componentTransition
    }
  }
}
</script>

<style>
</style>
