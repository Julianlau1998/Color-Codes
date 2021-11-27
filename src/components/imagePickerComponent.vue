<template>
  <div class="img-color-picker">
    <div>
      <canvas
        id="color-picker-panel"
        class="responsive-canvas"
        :width="width" :height="height" 
        @click="getColor"
    ></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImgColorPicker",
  props: {
    imagesrc: {
      type: String,
      default: ''
    },
    initColor: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 400
    },
    showColor: {
      type: Boolean,
      default: true
    },
  },
  data (){
    return {
      height: 300,
      color: '',
      canvas: null,
      ctx: null,
      image: null,
      rgb: (0, 0, 0)
    }
  },
  created () {
    let self = this;
    self.color = self.initColor;
    self.image = new Image();
    self.image.onload = function () {
      self.canvas = document.getElementById('color-picker-panel');
      self.ctx = self.canvas.getContext('2d');
      let height = self.canvas.height = self.image.height * (self.width / self.image.width);
      self.ctx.drawImage(self.image, 0, 0, self.width, height); // draw the image on the canvas
    };
    self.image.src = self.imagesrc;
  },
  methods: {
    getColor (e) {
      let canvasX = e.offsetX;
      let canvasY = e.offsetY;
      let imageData = this.ctx.getImageData(canvasX, canvasY, 1, 1);
      this.rgb = `(${imageData.data[0]},${imageData.data[1]},${imageData.data[2]})`
      this.color = this.rgbToHex(imageData.data[0], imageData.data[1], imageData.data[2]);
      this.$emit('setRgb', this.rgb)
      this.$emit('setColor', this.color);
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
    componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    },
    rgbToHex(r, g, b) {
      return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }
  }
}
</script>

<style scoped>
#color-picker-panel {
  cursor: crosshair;
  border: 2px solid #eee;
  border-radius: 5px;
  padding: 5px;
}
.img-color-picker{
  position: relative;
}
</style>