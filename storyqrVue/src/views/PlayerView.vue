<template>
  <div class="player">
    <!-- Show loading screen while data is being fetched -->
    <div v-if="loading">
      <h1>Loading...</h1>
    </div>
    <!-- Show content when data is available -->
    <div v-else>
      <div class="toprowPlayer"  v-if="story && storyType" :class="'storyType-' + story.storyType">
        <div id="backArrow" @click="$router.go(-1)">←</div>
        <div class="playerAvatar"></div> 
      </div>
      <div class="bottomRowPlayer" v-if="story && storyType">
        <h2>{{ story.title }}</h2>
        <p id="typeTime">{{ storyType.name }} . idk, like 10 min</p>
        <h2>Description</h2>
        <p>{{ story.desc}}</p>
        <p>audio stuff</p>
      </div>
    </div>
  </div>
</template>



<script>
import { watch, ref } from 'vue';
import getSingleStory from '@/composables/getSingleStory.js';
import getSingleType from '@/composables/getSingleType.js';

export default {
  name: 'PlayerView',
  props: ['id'],
  setup(props) {
    const { load, story, error } = getSingleStory();
    const { load: loadType, storyType, error: errorType } = getSingleType();

    // Create a loading state
    const loading = ref(true);

    load(props.id);

    watch(story, async (newVal) => {
      if (newVal) {
        await loadType(newVal.storyType);
        
        // If storyType is loaded, set loading to false
        if(storyType.value) {
          loading.value = false;
        }
      }
    });

    return { story, storyType, loading };
  },
};
</script>



