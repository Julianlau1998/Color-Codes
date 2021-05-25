<template>
  <div class="navbar">
    <!-- <img
      src="../../public/img/menu.png"
      alt="menu icon"
      class="menu"
      @click="menu=!menu"
      > -->
    <h3
      id="navTitle"
    >
      Color Codes
    </h3>
    <!-- <div
      v-if="menu"
      class="openMenu"
    >
      <a
        id="rate"
        href='https://play.google.com/store/apps/details?id=xyz.appmaker.xjzpta'
      >
        Rate this app
      </a>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      menu: false,
    }
  },
  props: {
  }
}
</script>

<style scoped>
  .navbar {
    width: 100%;
    height: 4rem;
    background-color: #DAF0EE;
    box-shadow: 1px 1px 3px lightgray;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 1.3rem;
    position: fixed;
    z-index: 10;
  }
  .menu {
    width: 2.6rem;
    position: fixed;
    right: 0.7rem;
    top: 0.8rem;
    cursor: pointer;
  }
  #navTitle {
    position: fixed;
    top: -0.4rem;
    left: 1rem;
    color: #3B413C;
    cursor: pointer;
  }
  .openMenu {
    width: 9rem;
    height: 2.2rem;
    color: black;
    background-color: #FFFFFF;
    border: 2px solid black;
    position: fixed;
    right: 2.2rem;
    top: 3.2rem;
    font-weight: 600;
    padding-top: 0.55rem;
  }
  #rate {
    margin-top: 0.6rem;
    cursor: pointer;
    color: black;
  }
  img {
    -webkit-tap-highlight-color: transparent;
  }
  a:link {
    text-decoration: none;
    color: lightgray;
    margin-top: 0.3rem;
    -webkit-tap-highlight-color: transparent;
  }
  a:visited {
    color: lightgray;
  }

</style>
