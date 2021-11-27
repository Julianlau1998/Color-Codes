<template>
  <div id="bottomNav">
      <p class='link noselect'>
        <span
            @click="changeComponent('image_picker')"
            class="marginRight marginBottom nevElement"
            :style="imagePicker ? 'opacity: 1;' : 'opacity: 0.5'"
            ref="converter"
        >
            Picker
        </span>
        <span
            @click="changeComponent('color_picker')"
            class="marginRight marginBottom nevElement"
            :style="colorPicker ? 'opacity: 1;' : 'opacity: 0.5'"
            ref="converter"
        >
            Colors
        </span>
        <span
            @click="changeComponent('converter')"
            class="marginBottom nevElement"
            :style="converter ? 'opacity: 1;' : 'opacity: 0.5'"
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
        changeComponent (component) {
            switch (component) {
                case 'image_picker':
                    this.$store.state.image_picker = true
                    this.$store.state.color_picker = false
                    this.$store.state.converter = false   
                    break
                case 'color_picker':
                    this.$store.state.image_picker = false
                    this.$store.state.color_picker = true
                    this.$store.state.converter = false 
                    break
                case 'converter':
                    this.$store.state.image_picker = false
                    this.$store.state.color_picker = false
                    this.$store.state.converter = true     
                    break 
            }
        }
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
        current () {
            return this.$store.state.converter
        }
    },
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
        z-index: 2;
    }
    .link {
        color: black;
        font-weight: 700;
        font-size: 1.3rem;
        -webkit-tap-highlight-color: transparent;
        cursor: pointer;
        margin-top: 1.2rem;
    }
    .marginLeft {
        margin-left: 2rem;
    }
    .marginRight {
        margin-right: 2rem;
    }

    .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    }
    @media (max-width: 300px) {
        .marginLeft {
            margin-left: 1rem;
        }
        .marginRight {
            margin-right: 1rem;
        }
    }
</style>