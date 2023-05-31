<template>
    <div>
      <div>

        <h2>Selected Avatar</h2>
      <div class="selectedAvatar" v-if="selectedSkin && selectedHair"   :style="{ '--hue': hueFilter, '--contrast': contrastFilter, '--brightness': brightnessFilter }">
        <img class="selectedSkin" :src="selectedSkin">
        <img class="selectedHair" :src="selectedHair" >
        </div>
        
        <h2 @click="showSkinOptions = true; showHairOptions = false">Skin</h2>
        <swiper v-if="showSkinOptions" :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    v-swiper:ref="swiperRef"  
  >
          <swiper-slide v-for="(skinImage, index) in skinImages" :key="index" @click="selectSkin(skinImage)">
            <img :src="skinImage">
          </swiper-slide>
        </swiper>
      </div>
  
      <div>
        <h2 @click="showHairOptions = true; showSkinOptions = false">Hair</h2>
        <swiper v-if="showHairOptions"  
        :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    v-swiper:ref="swiperRef" 
  >
      
          <swiper-slide v-for="(hairImage, index) in hairImages" :key="index" @click="selectHair(hairImage)">
            <img :src="hairImage">
          </swiper-slide>
        </swiper>
        <div>
  <h2 @click="showHairColorOptions = true; showSkinOptions = false; showHairOptions = false">Hair Color</h2>
<swiper v-if="showHairColorOptions" :modules="modules"
:slides-per-view="3"
:space-between="50"
navigation
:pagination="{ clickable: true }"
:scrollbar="{ draggable: true }"
@swiper="onSwiper"
@slideChange="onSlideChange"
v-swiper:ref="swiperRef" 
>
<swiper-slide v-for="(colorOption, index) in hairColorOptions" :key="index" @click="selectHairColor(colorOption)">
  <div class="hairColorPreview" :style="{ '--hue': colorOption.hue, '--contrast': colorOption.contrast, '--brightness': colorOption.brightness }">
    <img :src="selectedHair">
  </div>
</swiper-slide>

</swiper>

</div>

</div>

      </div>
  

  </template>
  
  
  
  <script>
  import { nextTick, onMounted, ref } from 'vue'  
  import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3, // number of slides to show at once
        spaceBetween: 10, // space in pixels between slides
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
        },
        // Add more options here as desired, see the Swiper.js documentation
      },
      // ... the rest of your component data
    }
  },
    setup() {
        const swiperRef= ref(null)
      const skins = require.context('../img/', false, /s[0-9]+\.png$/)
      const hairs = require.context('../img/', false, /h[0-9]+\.png$/)
  
      const skinImages = ref(skins.keys().map(skins))
      const hairImages = ref(hairs.keys().map(hairs))
  
      const selectedSkin = ref('')
      const selectedHair = ref('')
      const showHairColorOptions = ref(false);
      const showSkinOptions = ref(false)
      const showHairOptions = ref(false)
      const hueFilter = ref(0);
const contrastFilter = ref(100);
const brightnessFilter = ref(100);

const hairColorOptions = ref([
  {name: 'Black', hue: 0, contrast: 120, brightness: 90},
  {name: 'Brown', hue: 13, contrast: 355, brightness: 165},
  {name: 'Blonde', hue: 350, contrast: 160, brightness: 310},
  {name: 'Red', hue: -25, contrast: 220, brightness: 170},
  // Add more colors as needed...
]);

const selectHairColor = (colorOption) => {
  hueFilter.value = colorOption.hue;
  contrastFilter.value = colorOption.contrast;
  brightnessFilter.value = colorOption.brightness;
};

      const selectSkin = (skinImage) => {
        selectedSkin.value = skinImage
        console.log(skinImage)
      }
  
      const selectHair = (hairImage) => {
        selectedHair.value = hairImage
      }

      // Initialize the first avatar
      skinImages.value.forEach((image) => {
        if(image.endsWith('1.png')) {
          selectSkin(image)
        }
      })

      hairImages.value.forEach((image) => {
        if(image.endsWith('1.png')) {
          selectHair(image)
        }
      })
      onMounted(()=>{
        nextTick(() => {
          if(swiperRef.value) {
            swiperRef.value.update();
        }
    })
  })
  const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
  
      return {
        
        skinImages,
        hairImages,
        selectedSkin,
        selectedHair,
        showSkinOptions,
        showHairOptions,
        selectSkin,
        selectHair,
        swiperRef,
        showHairColorOptions,
        hueFilter,
        contrastFilter,
        brightnessFilter,
        selectHairColor,
        hairColorOptions
        
      }
    }
  }
</script>

<style scoped>
.swiper {
  width: 300px; /* adjust as necessary */
}
.swiper-slide {
  width: 100px; /* adjust as necessary */
}
.swiper-slide img {
  width: 100px;
}
</style>
