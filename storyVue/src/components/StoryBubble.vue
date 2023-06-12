<template>
  
   <div class="storyBubble" style="animation-fill-mode: forwards;" :class="'storyType-' + storyType.id" :id="'storyBubble-'+storyType.id"  @click="expandBubble" >
   
   
        <h3>{{storyType.name}}</h3>
 


</div>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'StoryBubble',
  props: {
    storyType: {
      type: String,
      required: true
    }},
    setup(props){
       const router = useRouter();
      const storyType = props.storyType
       onMounted(()=>{
        console.log(storyType)
        animateBubble('#storyBubble-'+storyType.id,storyType.startPosition,storyType.endPosition,storyType.durationdown,storyType.durationvibrate)
       })
      //adds a class to the story bubble to expand it
      function expandBubble(){
  const bubbleElement = event.currentTarget;
  bubbleElement.style.zIndex="10"
  if (bubbleElement) {
    bubbleElement.animate([
      // keyframes
      { transform: 'scale(1)', },
      { transform: 'scale(20)' } // adjust scale as per requirement
    ], {
      // timing options
      duration: 1500, // adjust duration as per requirement
      fill: "forwards"
    }).finished.then(() => {
        //and go to the theme page
        bubbleElement.style.zIndex="1"
        router.push({name:'theme',params:{id:storyType.id}})
      });
    
  }
}


      function animateBubble(bubbleID, startPosition, endPosition, durationdown, durationvibrate) {
    const bubble = document.querySelector(bubbleID);
    console.log(bubbleID)
    bubble.animate([
      // keyframes
      { top: startPosition.top, left: startPosition.left },
      { top: endPosition.top, left: endPosition.left }
    ], {
      // timing options
      duration: durationdown,
      iterations: 1,
      fill: "forwards"
    }).finished.then(() => {
      bubble.animate([
        // keyframes for floating animation
        { transform: 'translate(0,0)' },
        { transform: 'translate(-10px,10px)' },
        { transform: 'translate(10px,0)',
          transform:'translate(0,0)'}
      ], {
        // timing options for floating animation
        duration: durationvibrate,
        iterations: Infinity
      });
    });
  }
  
  // Then you call this function for each bubble,
  // passing in the appropriate arguments.
  


      return {
        storyType,expandBubble
      }
    }
}

</script>