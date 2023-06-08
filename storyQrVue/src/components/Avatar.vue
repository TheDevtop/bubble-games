<template>
  
      
      <div
        class="avatar"
        v-if="avatarData.skinId && avatarData.hairId && selectedAvatar.hairColor"
        :style="{
          '--hue': selectedAvatar.hairColor.hue,
          '--contrast': selectedAvatar.hairColor.contrast,
          '--brightness': selectedAvatar.hairColor.brightness
        }"
      >
        <img class="selectedSkin" :src="getSkinImageById(avatarData.skinId)" />
        <img class="selectedHair" :src="getHairImageById(avatarData.hairId)" />
      </div>

  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    name: 'Avatar',
    props: {
      avatarData: {
        type: Object,
        required: true,
      },
    },
    setup(props) {
        const hairColorOptions = ref([
      { id: 1, hue: 0, contrast: 120, brightness: 90 },
      { id: 2, hue: 13, contrast: 355, brightness: 165 },
      { id: 3, hue: 350, contrast: 160, brightness: 310 },
      { id: 4, hue: -25, contrast: 220, brightness: 170 },
      // Add more colors as needed...
    ]);
      const skins = require.context('../img/', false, /s[0-9]+\.png$/);
      const hairs = require.context('../img/', false, /h[0-9]+\.png$/);
  
      const extractHairId = (filename) => {
        const match = filename.match(/h([0-9]+)\.png$/);
        return match ? parseInt(match[1]) : '';
      };
  
      const extractSkinId = (filename) => {
        const match = filename.match(/s([0-9]+)\.png$/);
        return match ? parseInt(match[1]) : '';
      };
  
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
  
      const receivedData = ref(props.avatarData);
  
      const getSkinImageById = (id) => {
        const skin = skinImages.value.find((skin) => skin.id === id);
        return skin ? skin.src : '';
      };
  
      const getHairImageById = (id) => {
        const hair = hairImages.value.find((hair) => hair.id === id);
        return hair ? hair.src : '';
      };
  
      const selectedAvatar = computed(() => {
        const skin = getSkinImageById(props.avatarData.skinId);
        const hair = getHairImageById(props.avatarData.hairId);
        const hairColorId = props.avatarData.hairColorId;
        const hairColor = hairColorOptions.value.find((color) => color.id === hairColorId);
        return {
          skin,
          hair,
          hairColor,
        };
      });
  
      return {
        receivedData,
        getSkinImageById,
        getHairImageById,
        selectedAvatar,
      };
    },
  };
  </script>
  
  <style scoped>
  .selectedAvatar {
    /* Add necessary styles for the selected avatar container */
  }
  
  .selectedAvatar img {
    /* Add necessary styles for the selected avatar images */
  }
  </style>
  