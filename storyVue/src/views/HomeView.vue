<template>
  <div class="home">

 <div id="containerContainer">
  <div id="bubbleContainer">
 <!-- HomeView.vue template -->
<StoryBubble  
  v-for="storyType in addedStoryTypes" 
  :key="storyType.id" 
  :storyType="storyType"

/>
  </div></div>
  <div id="homeDescription">
    <h2 style="margin-block-end: 1rem;"><svg width="20" height="20" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.333328 6.3785C0.333328 3.31193 2.89592 0.833332 5.99563 0.833332C9.10407 0.833332 11.6667 3.31193 11.6667 6.3785C11.6667 7.92379 11.1047 9.35842 10.1797 10.5744C9.1592 11.9157 7.90143 13.0843 6.48569 14.0016C6.16167 14.2136 5.86924 14.2296 5.51363 14.0016C4.08982 13.0843 2.83205 11.9157 1.82033 10.5744C0.894651 9.35842 0.333328 7.92379 0.333328 6.3785ZM4.12948 6.55117C4.12948 7.57847 4.96777 8.38645 5.99563 8.38645C7.02416 8.38645 7.87051 7.57847 7.87051 6.55117C7.87051 5.53186 7.02416 4.68455 5.99563 4.68455C4.96777 4.68455 4.12948 5.53186 4.12948 6.55117Z" fill="#181818"/>
</svg> Strijp-S</h2>
  <h3>FONTYS PRESENTS</h3>
  <h1>BUBBLE GAME</h1>
 
  <h3 style="width: 90vw;">Listen to neighbours' tales, share yours, and explore by popping bubbles!</h3>
  <div id="homeButtons" ref="buttons">
   <button @click="addStory" style="background-color: black; color: white;">add story</button>
       
   <div v-if="showBlackScreen" class="black-screen"></div>
   <button @click="scrollToButtons">explore</button>
</div>

</div>
  <div id="exploreHome">
    <h2>Explore Stories</h2>
  <SingleStory v-if="!error" v-for="story in stories" :key="story.id" :story="story" :colorBg="true" />
</div>
</div>
 
</template>


<script>
import { ref, onMounted, watch,nextTick,computed } from 'vue';
import { useRouter } from 'vue-router';
import SingleStory from '@/components/SingleStory.vue'
import StoryBubble from '@/components/StoryBubble.vue'
import getStories  from '@/composables/getStories.js'
import getStoryTypes from '@/composables/getStoryTypes.js'

export default {
  name: 'HomeView',
  components: {
    SingleStory,
    StoryBubble
  },
  setup() {
    const router = useRouter();

    const addStoryAnim = ref('');
    const buttons = ref(null);

    const scrollToButtons = () => {
      buttons.value.scrollIntoView({ behavior: "smooth" });
    };
    const showBlackScreen = ref(false);

    watch(showBlackScreen, (newVal, oldVal) => {
      nextTick(() => {
        const blackScreenElement = document.querySelector('.black-screen');

        if (newVal) {
          blackScreenElement?.classList.add('reveal');
        } else {
          blackScreenElement?.classList.remove('reveal');
        }
      });
    });
    const expandingBubbleId = ref(null);


    function addStory() {
      showBlackScreen.value = true;
      setTimeout(() => {
        // Put your navigation logic here
        router.push('/addstory')
        showBlackScreen.value = false;
      }, 1500);  // transition duration
    }

    onMounted(() => {
      router.beforeEach((to, from, next) => {
       
        next();
      });
    });

    const { storyTypes, error:e2, load:loadTypes } = getStoryTypes();
    loadTypes();

    const { stories , error , load } = getStories();
    load();
    const addedStoryTypes = computed(()=>{
      return storyTypes.value.map((storyType,index)=>{
        return{
          ...storyType,
          ...animationSettings[index]
        }
      })
    })
    const animationSettings = [
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '465%', left: '5%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) },
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '405%', left: '35%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) },
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '470%', left: '45%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) },
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '405%', left: '70%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) },
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '490%', left: '80%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) },
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '583%', left: '20%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) },
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '575%', left: '55%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) },
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '670%', left: '10%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) },
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '660%', left: '40%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) },
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '660%', left: '80%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) },
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '685%', left: '70%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) }
];

function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
    return {
      stories, addedStoryTypes, error, e2, buttons, scrollToButtons,showBlackScreen, addStoryAnim, addStory,
     
    };
  }
}
</script>
