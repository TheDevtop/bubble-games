<template>
    <div class="fadeScreenStorylet" :id="'fadeScreenStorylet-' + story.id" :style="{'--bgCol':bgColor}"></div>
    <div v-if="colorBg">
    <div @click="showFade"  class="storylet"  :class="'storyType-' + story.storyType">
    <div  >
      <div id="storyletToprow"> <div id="avatarPic"><Avatar style="  position: relative;  left: -23px; top: 15px;" :avatar-data="story.avatarData"/></div>
      <h2 >{{ story.title }}</h2></div> 
     
      <p class="storyletDateTime">{{ story.dateTime }}</p>
    </div>
    
</div>
</div>
<div v-else>
    <div  @click="showFade" class="storylet" :to="{name:'story', params:{id:story.id}}">
    <div  >
      <div id="storyletToprow"> <div id="avatarPic"><Avatar style="  position: relative;  left: -23px; top: 15px;" :avatar-data="story.avatarData"/></div>
      <h2 >{{ story.title }}</h2></div> 
     
      <p class="storyletDateTime">{{ story.dateTime }}</p>
    </div>
    
</div>
</div>
  </template>
  

<script>
import { computed, onMounted, onUnmounted, onUpdated,ref, watch,nextTick } from 'vue';
import {useRouter} from 'vue-router';
import Avatar from './Avatar.vue';

export default{
    name: 'SingleStory',
    components:{
        Avatar
    },
    props: {
        story: {
            type: Object,
            required: true
        },
        colorBg:{
            type:Object,
            required:true
        }
    },
    setup(props){
        const bgColor=ref(null)
        const router= useRouter();
      const story = props.story
      const colorBg=props.colorBg


      const showFadeScreen=ref(false)
      watch(showFadeScreen, (newVal, oldVal) => {
      nextTick(() => {
        const fadeScreenElement = document.querySelector('#fadeScreenStorylet-'+story.id);
        console.log(fadeScreenElement)
        if (newVal) {
            fadeScreenElement?.classList.add('reveal');
        } else {
            fadeScreenElement?.classList.remove('reveal');
        }
      });
    });

    function showFade() {
        showFadeScreen.value=true;
        console.log('showing')
        setTimeout(() => {
            sessionStorage.setItem('backgroundColor', bgColor.value);
            showFadeScreen.value=false
            router.push({name:'story', params:{id:props.story.id}});
            
        }, 1500);
    }
    
// router.push({name:'story', params:{id:props.story.id}});
        onMounted(() => {
            let storyElement = document.querySelector(".storyType-" + story.storyType);
    if (storyElement) {
        bgColor.value = window.getComputedStyle(storyElement).getPropertyValue('background-color');
    }
   
        })
        onUnmounted(() => {
            
        })
        onUpdated(() => {
           
        })
        
        return {
            story,colorBg,bgColor,showFade
        }
    }
    
}
</script>