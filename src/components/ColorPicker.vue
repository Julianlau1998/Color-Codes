<template>
  <div>
    <h2 id="clickText">
        Click the Box to pick a color
    </h2>
    <input
        type="color"
        v-model="hexColor"
        ref = "inputColor"
        id="inputColor"
    >
    <br>
    <label for="red">
        Red {{red}}
    </label>
    <br>
    <input
        type="range"
        id="red"
        name="volume"
        min="0"
        max="255"
        v-model="red"
    >
    <br>
    <label for="green">
        Green {{green}}
    </label>
    <br>
    <input
        type="range"
        id="green"
        name="volume"
        min="0"
        max="255"
        v-model="green"
    >
    <br>
    <label for="blue">
        Blue {{blue}}
    </label>
    <br>
    <input
        type="range"
        id="blue"
        name="volume"
        min="0"
        max="255"
        v-model="blue"
    >
    <h2>
        Hex: {{hexColor}} 
        <img 
            src="../../public/img/copy.png" 
            class="copy"
            @click="copyHex"
        >
    </h2>
    <h2>
        RGB: {{rgb}}
        <img 
            src="../../public/img/copy.png" 
            class="copy"
            @click="copyRGB"
        >
    </h2>
  </div>
</template>

<script>

export default {
    name: 'ColorPicker',
    data () {
        return {
            red: 218,
            green: 240,
            blue: 238,
            redHex: 'da',
            greenHex: 'f0',
            blueHex: 'ee',
            hexValue: 'daf0ee'
        }
    },
    created () {
        this.$store.state.componentTransition = 'swipe-component-left'
    },
    mounted () {
        const inputColor = document.getElementById('inputColor');

        inputColor.addEventListener('change', (event) => {
            const hexColor = event.target.value
            this.redHex = hexColor.substring(1,3)
            this.red = parseInt(this.redHex, 16)
            this.greenHex = hexColor.substring(3,5)
            this.green = parseInt(this.greenHex, 16)
            this.blueHex = hexColor.substring(5,7)
            this.blue = parseInt(this.blueHex, 16)
        });
    },
    computed: {
        hexColor: {
           get(){
             return `#${this.redHex}${this.greenHex}${this.blueHex}`
           },
           set(newValue){
             return newValue
           } 
        },
        rgb () {
            return `rgb(${this.red},${this.green},${this.blue})`
        },
    },
    watch: {
        red (val) {
            this.redHex = Number(val).toString(16);
            if (this.redHex.length < 2) {
                this.redHex = "0" + this.redHex;
            }
        },
        green (val) {
            this.greenHex = Number(val).toString(16);
            if (this.greenHex.length < 2) {
                this.greenHex = "0" + this.greenHex;
            }
        },
        blue (val) {
            this.blueHex = Number(val).toString(16);
            if (this.blueHex.length < 2) {
                this.blueHex = "0" + this.blueHex;
            }
        }
    },
    methods: {
        async copyHex () {
            await navigator.clipboard.writeText(`#${this.hexValue}`);
        },
        async copyRGB () {
            await navigator.clipboard.writeText(this.rgb);
        }
    }
}
</script>

<style>
    #clickText {
        margin-top: 5.8rem;
        margin-bottom:  0.6rem;
    }
    .copy {
        width: 1.2rem;
        margin-left: 0.3rem;
        cursor: pointer;
    }
    input {
        margin-bottom: 1.5rem;
        margin-top: 1rem;
    }
    label {
        font-size: 1.3rem;
    }
    input[type="color"] {
        -webkit-appearance: none;
        border: 2px solid black;
        border-radius: 5px;
        box-shadow: 5px 5px 10px black;
        width: 80%;
        height: 6rem;
        cursor: pointer;
    }
    input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
    }
    input[type="color"]::-webkit-color-swatch {
        border: none;
    }
    input[type="range"]::-webkit-color-swatch-wrapper {
        -webkit-appearance: slider-vertical;
    }
    input[type=range] {
        -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
        width: 75%; /* Specific width is required for Firefox. */
        background: transparent; /* Otherwise white in Chrome */
    }

    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
    }

    input[type=range]:focus {
        outline: none; /* Removes the blue border. */
    }

    input[type=range]::-ms-track {
        width: 100%;
        cursor: pointer;

        /* Hides the slider so custom styles can be added */
        background: transparent; 
        border-color: transparent;
        color: transparent;
    }

    /* Special styling for WebKit/Blink */
    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: 1px solid #000000;
        height: 30px;
        width: 16px;
        border-radius: 3px;
        background: #ffffff;
        cursor: pointer;
        margin-top: -11px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
    }

    /* All the same stuff for Firefox */
    input[type=range]::-moz-range-thumb {
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        border: 1px solid #000000;
        height: 36px;
        width: 16px;
        border-radius: 3px;
        background: #ffffff;
        cursor: pointer;
    }
    
    /* Background */
    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        box-shadow: 2px 2px 2px #000000, 0px 0px 1px #0d0d0d;
        border: 0.2px solid #010101;
    }
    #red {
        background: #dd220d;
    }
    #green {
        background: #148006;
    }
    #blue {
        background: #236696;
    }


    @media (min-width: 1000px) {
        input[type="color"] {
            width: 45%;
        }
        input[type=range] {
            width: 55%;
        }
    } 
    
</style>