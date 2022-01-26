<template>
  <div>
      <br><br><br>
        <input
            type="file"
            @change="getBaseUrl"
            style="opacity: 0;"
            ref="fileInput"
            accept="image"
        >
        <button class="fileInput" @click="selectImage()">
            Upload Image
        </button>
        <imagePickerComponent
            ref="colorPicker"
            :width="canvasWidth"
            :showColor="true"
            @setColor="setColor"
            @setRgb="setRgb"
            :initColor="'black'"
            :imagesrc="getBase64FromState">
        </imagePickerComponent>
        <div @click="copyHex(hex)" v-bind:style="{ 'background-color': hex, 'color': lightOrDark(hex) }" class="color-preview-hex">
            {{ hex }} <span v-if="copiedHex"> Copied! </span>
        </div> 
        <div @click="copyRgb(rgb)" v-bind:style="{ 'background-color': hex, 'color': lightOrDark(hex) }" class="color-preview-rgb">
            {{ rgb }} <span v-if="copiedRgb"> Copied! </span>
        </div>
        <canvas id="cs"></canvas>
  </div>
</template>

<script>
import imagePickerComponent from './imagePickerComponent.vue'
export default {
    data () {
        return  {
            fileUrl: '',
            hex: '#000000',
            rgb: 'rgb(0,0,0)',
            copiedRgb: false,
            copiedHex: false,
            canvasWidth: 200
        }
    },
    components: {
        imagePickerComponent
    },
    computed: {
        getBase64FromState () {
            return this.fileUrl
        }
    },
    
    created () {
        this.canvasHeight = window.innerHeight * 2
        this.fileUrl = localStorage.getItem('test')
    },
    methods: {
        getBase64(file) {
            return new Promise(function (resolve, reject) {
                let reader = new FileReader();
                reader.onload = function () { resolve(reader.result); };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });
        },
        async getBaseUrl ()  {
            var file = document.querySelector('input[type=file]')['files'][0];
            let promise = this.getBase64(file);
            const test = await promise
            localStorage.setItem('test', await test)
            window.location.reload()
        },
        selectImage () {
          this.$refs.fileInput.click()
        },
        setColor (color){
            this.hex = color
        },
        setRgb (rgb){
            this.rgb = rgb
        },
        lightOrDark (color) {
            color = +("0x" + color.slice(1).replace(
            color.length < 5 && /./g, '$&$&'));
            let r = color >> 16;
            let g = color >> 8 & 255;
            let b = color & 255;
            let hsp = Math.sqrt(
                0.299 * (r * r) +
                0.587 * (g * g) +
                0.114 * (b * b)
            );
            if (hsp > 127.5) {
                return '#000000';
            }
            else {
                return '#ffffff';
            }
        },
        async copyHex (color) {
            this.copiedHex = true
            this.copiedRgb = false
            await navigator.clipboard.writeText(color);
        },
        async copyRgb (color) {
            this.copiedRgb = true
            this.copiedHex = false
            await navigator.clipboard.writeText(color);
        }
    }
}
</script>

<style>
    #previewImage {
        width: 60vw;
    }
    .fileInput {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 5rem;
        border-radius: 20px;
        width: 13rem;
        max-width: 25rem;
        height: 2rem;
        font-size: 1.3rem;
        border: 2px solid black;
        background: transparent;
        border: 2px solid #236696;
        cursor: pointer;
        margin-bottom: 0.5rem;
    }
    #cs{ 
        display:none;
    }
    /* .color-preview {
        padding: 5px 10px;
        border-radius: 5px;
        width: 9rem;
        position: relative; 
        left: 50%;
        transform: translateX(-50%);
        margin-top: 0.15rem;
        cursor: pointer;
    } */
    .color-preview-hex {
        padding: 5px 10px;
        border-radius: 5px;
        width: 9rem;
        position: relative; 
        left: 50%;
        transform: translateX(-50%);
        margin-top: 0.15rem;
        cursor: pointer;
    }
    .color-preview-rgb {
        padding: 5px 10px;
        border-radius: 5px;
        width: 9rem;
        position: relative; 
        left: 50%;
        transform: translateX(-50%);
        margin-top: 0.15rem;
        cursor: pointer;
    }
</style>