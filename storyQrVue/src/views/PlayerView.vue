<template>
   <div class="fadeScreenStorylet playerViewFade"  :style="{'--bgCol':backgroundColor}"></div>
  <div class="player">

      <div class="toprowPlayer"  v-if="story && storyType" :class="'storyType-' + story.storyType">
        <div id="backArrow" @click="$router.go(-1)">←</div>
        <div class="playerAvatar"><Avatar style="  position: relative;  transform: scale(.5);        top: 50px; left: -20px;" :avatar-data="story.avatarData"/></div> 
      </div>
      <div class="bottomRowPlayer" v-if="story && storyType">
        <h2>{{ story.title }}</h2>
        <p id="typeTime">{{ storyType.name }} . idk, like 10 min</p>
        <h2>Description</h2>
        <p>{{ story.desc}}</p>
        <p>audio stuff</p>
      
    </div>
  </div>
</template>



<script>
import { watch, ref } from 'vue';
import getSingleStory from '@/composables/getSingleStory.js';
import getSingleType from '@/composables/getSingleType.js';
import Avatar from '../components/Avatar.vue';

export default {
  name: 'PlayerView',
  props: ['id'],
  components:{
        Avatar
    },
  setup(props) {
    const { load: loadStory, story, error: errorStory } = getSingleStory(props.id); // Pass the id prop to the getSingleStory function
    const { load: loadType, storyType, error: errorType } = getSingleType();
    let backgroundColor = sessionStorage.getItem('backgroundColor');
console.log(backgroundColor, "bgcol")
    // Create a loading state
    const loading = ref(true);

    watch(loading, (newVal) => {
      if (!newVal) { // If loading has changed to false
        const fadeScreenElement = document.querySelector('.fadeScreenStorylet');
        
        // If the fadeScreenElement exists, add the 'unreveal' class to it
        if (fadeScreenElement) {
          fadeScreenElement.classList.remove('playerViewFade')
          fadeScreenElement.classList.add('unreveal');
          
  setTimeout(() => {
    fadeScreenElement.classList.remove('unreveal');
  }, 1500);
        }
      }
    });
    // Load the story
   // Load the story
   loadStory().then(() => {
  console.log('Loaded story:', story.value);
  // Once the story is loaded, load the story type
  loadType(story.value.storyType).then(() => {
    // Once the story type is loaded, set loading to false
    loading.value = false;
  });
});



    return { story, storyType, loading, backgroundColor };
},

};
</script>



