<template>
  
  <div class="audioPlaybackSvg">
    
 <div class="fadeScreenStorylet playerViewFade"  :style="{'--bgCol':backgroundColor}"></div>
<div class="player">
  <div id="backArrow" @click="$router.go(-1)">←</div>
    <div class="toprowPlayer"  v-if="story && storyType" :class="'storyType-' + story.storyType">

      <div class="playerAvatar"><Avatar style="  position: relative; " :avatar-data="story.avatarData"/></div> 
    </div> 
   

    <div class="bottomRowPlayer" v-if="story && storyType">
      <h2>{{ story.title }}</h2>
      <p id="typeTime">{{ storyType.name }} <span id="dot">·</span> 10 min</p>
    
     </div>
     <div id="waveform"></div>

<div id="duration"></div>
<div id="current-time"></div>
  <svg id="playbackControls"  v-if="story && storyType" width="163" height="65" viewBox="0 0 163 65" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect x="24" y="44.5" width="24" height="24" transform="rotate(180 24 44.5)" fill="url(#pattern0)"/>
<rect x="49" width="65" height="65" rx="32.5"  @click="playPause" id="playBtnPlayerSvg" :class="'storyType-' + story.storyType"/>
<rect x="74" y="21.5" width="5.45455" height="22" rx="1" fill="#181818"/>
<rect x="83.5454" y="21.5" width="5.45455" height="22" rx="1" fill="#181818"/>
<rect x="139" y="20.5" width="24" height="24" fill="url(#pattern1)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_503_22222" transform="scale(0.00195312)"/>
</pattern>
<pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_503_22222" transform="scale(0.00195312)"/>
</pattern>
<image id="image0_503_22222" width="512" height="512" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>

  </div>
</div>

</template>



<script>
import WaveSurfer from 'wavesurfer'
import { watch, ref, onMounted } from 'vue';
import getSingleStory from '@/composables/getSingleStory.js';
import getSingleType from '@/composables/getSingleType.js';
import Avatar from '../components/Avatar.vue';
import getAudio from '../composables/getAudio.js'

export default {
name: 'PlayerView',
props: ['id'],
components:{
      Avatar
  },
setup(props) {
  var wavesurfer
  const audioSource = ref(null);
  let randomStories = ref([]);
const playAudio = () => {
if (audioSource.value) {
  audioSource.value.play();
  console.log('weplay')
}
};

const playPause=()=>{
wavesurfer.playPause();
console.log('playToggled')
}  
onMounted(()=>{
    // Initialize WaveSurfer instance

  

    audioSource.value = new Audio("https://i409587.hera.fhict.nl/audio/Voice-Over-Achtergrond.mp3");
  })
  const { load: loadStory, story, error: errorStory } = getSingleStory(props.id); // Pass the id prop to the getSingleStory function
  const { load: loadType, storyType, error: errorType } = getSingleType();
  const { load: loadaudio, audio, error: errorAudio } = getAudio(props.id);
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
  wavesurfer = WaveSurfer.create({
      container: '#waveform',
      barGap: 6,
  barHeight: 1,
  barMinHeight: 1,
  barRadius: 3,
  barWidth: 5,
  height:'auto',
      waveColor: backgroundColor,
      progressColor: 'blue',
      sampleRate: 1000
  });
console.log(audio)
  // Load an audio file
  console.log("http://145.220.74.171:8080/media/get?id="+story.value.id)
  wavesurfer.load("http://145.220.74.171:8080/media/get?id="+story.value.id);

});
});

  return { story, storyType, loading, backgroundColor, playAudio, playPause };
},

};
</script>
