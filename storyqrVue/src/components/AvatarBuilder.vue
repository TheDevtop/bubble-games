<template>
   
  <div>
    <h2>Selected Avatar</h2>
    <div class="selectedAvatar"> <Avatar  :avatarData="avatarData" /></div>
   
    <h2 @click="showSkinOptions = true; showHairOptions = false">Skin</h2>
    <swiper v-if="showSkinOptions" :modules="modules" :slides-per-view="3" :space-between="50" navigation :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange" v-swiper:ref="swiperRef">
      <swiper-slide v-for="skinImage in skinImages" :key="skinImage.id" @click="selectSkin(skinImage)">
        <img :src="skinImage.src" />
      </swiper-slide>
    </swiper>
  </div>
  <div>
    <h2 @click="showHairOptions = true; showSkinOptions = false">Hair</h2>
    <swiper v-if="showHairOptions" :modules="modules" :slides-per-view="3" :space-between="50" navigation :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange" v-swiper:ref="swiperRef">
      <swiper-slide v-for="hairImage in hairImages" :key="hairImage.id" @click="selectHair(hairImage)">
        <img :src="hairImage.src" />
      </swiper-slide>
    </swiper>
    <div>
      <h2 @click="showHairColorOptions = true; showSkinOptions = false; showHairOptions = false">Hair Color</h2>
      <swiper v-if="showHairColorOptions" :modules="modules" :slides-per-view="3" :space-between="50" navigation :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange" v-swiper:ref="swiperRef">
        <swiper-slide v-for="(colorOption, index) in hairColorOptions" :key="index" @click="selectHairColor(colorOption)">
          <div class="hairColorPreview" :style="{ '--hue': colorOption.hue, '--contrast': colorOption.contrast, '--brightness': colorOption.brightness }">
            <img :src="getHairImageById(avatarData.hairId)" :style="{ '--hair-color-id': colorOption.id }" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { nextTick, onMounted, ref, computed,watch } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import Avatar from './Avatar.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    Avatar,
  },
  emits: ['avatarData'],
  setup(_, { emit }) {
    const extractHairId = (filename) => {
      const match = filename.match(/h([0-9]+)\.png$/);
      return match ? parseInt(match[1]) : '';
    };

    const extractSkinId = (filename) => {
      const match = filename.match(/s([0-9]+)\.png$/);
      return match ? parseInt(match[1]) : '';
    };

    const avatarData = ref({
      hairId: 6,
      skinId: 1,
      hairColorId: 2,
    });
 
    const swiperRef = ref(null);
    const skins = require.context('../img/', false, /s[0-9]+\.png$/);
    const hairs = require.context('../img/', false, /h[0-9]+\.png$/);

    const skinImages = ref(
      skins.keys().map((key) => ({
        id: extractSkinId(key),
        src: skins(key),
      }))
    );

    const hairImages = ref(
      hairs.keys().map((key) => ({
        id: extractHairId(key),
        src: hairs(key),
      }))
    );

    const showHairColorOptions = ref(false);
    const showSkinOptions = ref(false);
    const showHairOptions = ref(false);
    const hueFilter = ref(0);
    const contrastFilter = ref(100);
    const brightnessFilter = ref(100);
    const receivedData = ref('');


    watch(avatarData, (newData) => {
      emit('avatarData', newData);
      console.log('Avatar data changed:', newData);
    });
    const hairColorOptions = ref([
      { id: 1, hue: 0, contrast: 120, brightness: 90 },
      { id: 2, hue: 13, contrast: 355, brightness: 165 },
      { id: 3, hue: 350, contrast: 160, brightness: 310 },
      { id: 4, hue: -25, contrast: 220, brightness: 170 },
      // Add more colors as needed...
    ]);
    

    const getSkinImageById = (id) => {
      const skin = skinImages.value.find((skin) => skin.id === id);
      return skin ? skin.src : '';
    };

    const getHairImageById = (id) => {
      const hair = hairImages.value.find((hair) => hair.id === id);
      return hair ? hair.src : '';
    };

    const selectedAvatar = computed(() => {
      const skin = getSkinImageById(avatarData.value.skinId);
      const hair = getHairImageById(avatarData.value.hairId);
      return {
        skin,
        hair,
      };
    });

    const selectSkin = (skinImage) => {
  avatarData.value = { ...avatarData.value, skinId: skinImage.id };
};

const selectHair = (hairImage) => {
  avatarData.value = { ...avatarData.value, hairId: hairImage.id, hairColorId: 1 };
};

const selectHairColor = (colorOption) => {
  avatarData.value = { ...avatarData.value, hairColorId: colorOption.id };
  hueFilter.value = colorOption.hue;
  contrastFilter.value = colorOption.contrast;
  brightnessFilter.value = colorOption.brightness;
};

    onMounted(() => {
      nextTick(() => {
        if (swiperRef.value) {
          swiperRef.value.update();
        }
      });
    });

    const onSwiper = (swiper) => {
      console.log(swiper);
    };

    const onSlideChange = () => {
      console.log('slide change');
    };

    return {
      avatarData,
      skinImages,
      hairImages,
      showSkinOptions,
      showHairOptions,
      swiperRef,
      showHairColorOptions,
      hueFilter,
      contrastFilter,
      brightnessFilter,
      hairColorOptions,
      receivedData,
      selectSkin,
      selectHair,
      selectHairColor,
      getSkinImageById,
      getHairImageById,
      selectedAvatar,
      onSwiper,
      onSlideChange,
    };
  },
};
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
