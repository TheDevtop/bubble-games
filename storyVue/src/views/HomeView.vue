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
  <h3>FONTYS PRESENTS</h3>
  <h1>BUBBLE GAME</h1>
  <h3 style="width: 90vw;">Listen to life stories from people in your neighbourhood, share your own story and break through your bubble!</h3>
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
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '230%', left: '5%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) },
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '208%', left: '35%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) },
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '235%', left: '45%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) },
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '210%', left: '70%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) },
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '245%', left: '80%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) },
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '277%', left: '20%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) },
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '280%', left: '55%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) },
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '315%', left: '10%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) },
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '315%', left: '40%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) },
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '315%', left: '80%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) },
  { startPosition: { top: '0%', left: getRandomValue(0,100)+'%' }, endPosition: { top: '350%', left: '70%' }, durationdown: getRandomValue(3000, 4700), durationvibrate: getRandomValue(1500, 2700) }
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
