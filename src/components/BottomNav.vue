<template>
  <div id="bottomNav">
      <p class='link'>
      <span
        @click="converter(false)"
        class="marginRight marginBottom nevElement"
        ref="converter"
      >
          Colors
      </span>
      <span
        @click="converter(true)"
        class="marginLeft marginBottom nevElement"
        ref="info"
      >
        Converter
      </span>
      </p>
  </div>
</template>

<script>
export default {
    name: 'bottomNav',
    methods: {
        converter (converter) {
            this.$store.state.converter = converter
        }
    },
    mounted () {
        if (this.current) {
            this.$refs.converter.style.opacity = 1
            this.$refs.info.style.opacity = 0.4
        } else {
            this.$refs.converter.style.opacity = 1
            this.$refs.info.style.opacity = 0.4
        }
    },
    computed: {
        current () {
            return this.$store.state.converter
        }
    },
    watch: {
        current (val) {
            if (!val) {
                this.$refs.converter.style.opacity = 1
                this.$refs.info.style.opacity = 0.6
            } else {
                this.$refs.converter.style.opacity = 0.6
                this.$refs.info.style.opacity = 1
            }
        }
    }
}
</script>

<style>
    #bottomNav {
        width: 100vw;
        height: 1rem;
        position: absolute;
        left: 0vw;
        bottom: 1.7rem;
        border-top: 2px solid rgb(165, 165, 165) !important;
        white-space: nowrap;
        padding-bottom: 1.2rem;
        z-index: -1;
    }
    .link {
        color: black;
        font-weight: 600;
        font-size: 1.3rem;
        -webkit-tap-highlight-color: transparent;
        cursor: pointer;
        margin-top: 1.2rem;
    }
    .marginLeft {
        margin-left: 2.5rem;
    }
    .marginRight {
        margin-right: 2.5rem;
    }

    /* @media (max-width: 410px) {
        .marginLeft {
            margin-left: 1.5rem;
        }
        .marginRight {
            margin-right: 1.5rem;
        }
    } */
    @media (max-width: 300px) {
        .marginLeft {
            margin-left: 1rem;
        }
        .marginRight {
            margin-right: 1rem;
        }
    }
</style>