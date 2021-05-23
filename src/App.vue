<template>
  <div id="app">
    <navbar />
    <bottom-nav />
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/Navbar'
import bottomNav from './components/BottomNav'

export default {
  components:{
    navbar,
    bottomNav
  } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: #FFFFFF;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}

.swipe-component-left-enter-active,
  .swipe-component-left-leave-active {
    transition: transform 0.2s;
  }
  .swipe-component-left-leave {
    transform: translateX(0%);
  }
  .swipe-component-left-leave-to {
    transform: translateX(-100%);
  }
  .swipe-component-left-enter {
    transform: translateX(100%);
  }
  .swipe-component-left-enter-to {
    transform: translateX(0%);
  }

  .swipe-component-right-enter-active,
  .swipe-component-right-leave-active{
    transition: transform 0.2s;
  }
  .swipe-component-right-enter {
    transform: translateX(-100%);
  }
  .swipe-component-right-enter-to {
    transform: translateX(0%);
  } 
  .swipe-component-right-leave {
    transform: translateX(0%);
  }
  .swipe-component-right-leave-to {
    transform: translateX(100%);
  }
</style>
