<template>
  <div class="converter">
      <h2>Hex:</h2>
      <input
        type="text"
        id="hex" 
        placeholder="#000000"
        v-model="hex"
        @click="current='hex'"
        maxlength="7"
        autocomplete="off"
    >
      <br>
      <h2>RGB:</h2>
      <input
        type="number"
        id="redInput"
        placeholder="red"
        v-model="red"
        @click="current='rgb'"
        maxlength="3"
        autocomplete="off"
    >  
      <br>
      <input
        type="number"
        id="greenInput"
        placeholder="green"
        v-model="green"
        @click="current='rgb'"
        max="255"
        autocomplete="off"
    >
      <br>
      <input
        type="number"
        id="blueInput"
        placeholder="blue"
        v-model="blue"
        @click="current='rgb'"
        maxlength="3"
        autocomplete="off"
    >
    <div id="colorBox" v-bind:style="{ backgroundColor: hex}">
    </div>
  </div>
</template>

<script>
export default {
    name: "converter",
    data () {
        return {
            hex: '#daf0ee',
            red: '218',
            green: '240',
            blue: '238',
            redHex: 'da',
            greenHex: 'f0',
            blueHex: 'ee',
            current: 'hex'
        }
    },
    created () {
        this.$store.state.componentTransition = 'swipe-component-right'
    },
    methods: {
    },
    watch: {
        hex (val) {
            if (isNaN(parseInt(val.slice(-1), 16))) {
                this.hex = this.hex.slice(0, -1)
            }
            if (this.hex === '') {
                 this.hex = '#'
            }
            if (this.hex.charAt(0) !== '#') {
                 this.hex = '#'
            }
            if(this.current === 'hex') {
                this.red = parseInt(val.substring(1,3), 16)
                this.green = parseInt(val.substring(3,5), 16)
                this.blue = parseInt(val.substring(5,7), 16)
            }
        },
        red (val) {
            if (isNaN(val)) {
                this.red = 0
            }
            if (val > 255) {
                this.red = 255
            }
            if (this.current === 'rgb') {
                this.redHex =  Number(val).toString(16)
            if (this.redHex.length === 1) {
                this.redHex = '0' + this.redHex
            } else if (this.redHex.length === 0) {
                this.redHex = '0'
            }
            }
        },
        green (val) {
            if (isNaN(val)) {
                this.green = 0
            }
            if (val > 255) {
                this.green = 255
            }
            if (this.current === 'rgb') {
                this.greenHex =  Number(val).toString(16)
                if (this.greenHex.length === 1) {
                    this.greenHex = '0' + this.greenHex
                } else if (this.greenHex.length === 0) {
                    this.greenHex = '0'
                }
            }
        },
        blue (val) {
            if (isNaN(val)) {
                this.blue = 0
            }
            if (val > 255) {
                this.blue = 255
            }
            if (this.current === 'rgb') {
                this.blueHex =  Number(val).toString(16)
                if (this.blueHex.length === 1) {
                    this.blueHex = '0' + this.blueHex
                } else if (this.blueHex.length === 0) {
                    this.blueHex = '0'
                }
            } 
        },
        hexFromRGB (val) {
            this.current = 'rgb'
            this.hex = val
        } 
    },
    computed: {
        hexFromRGB () {
            return '#' + this.redHex + this.greenHex + this.blueHex
        }
    }
}
</script>

<style scoped>
    .converter {
        margin-top: 6.5rem;
        z-index: 10;
        background-color: #ffffff;
        width: 100vw;
        margin-left: -0.5rem;
    }
    input {
        border-radius: 20px;
        height: 2rem;
        font-size: 1.3rem;
        padding-left: 0.5rem;
        border: 2px solid black;
    }
    #hex,
    #redInput{
        margin-top: -1rem;
    }

    #redInput {
        border: 2px solid #dd220d;
    }
    #greenInput {
        border: 2px solid #148006;
    }
    #blueInput {
        border: 2px solid #236696;
    }

    #colorBox {
        width: 10rem;
        height: 5rem;
        margin: 1.5rem auto;
        border-radius: 5px;
        box-shadow: 4px 4px 10px rgb(77, 77, 77);
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

    input {
        outline: none;
    }
</style>