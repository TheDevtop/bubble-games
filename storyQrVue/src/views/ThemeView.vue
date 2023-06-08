<template>
    <div class="singleThemeBg" v-if="storyType" :class="'storyType-' + storyType.id">
        <div class="toprow">   <div id="backArrow" @click="$router.go(-1)">←</div><h2>{{storyType.name}}</h2></div>
        <p>{{ storyType.desc }}</p>

        <SingleStory class="singleThemeStorylet" v-if="!error" v-for="story in posts" :key="story.id" :story="story" :colorBg="false" />
    </div>
</template>

<script>
import SingleStory from '@/components/SingleStory.vue';
import getStories from '@/composables/getStories';
import getSingleTypeStories from '@/composables/getSingleTypeStories.js'
import getSingleType from '@/composables/getSingleType.js'

export default{
    name:'ThemeView',
    components:{SingleStory},
    props:['id'],
    setup(props){
        
      

        const {load, posts, error}=getSingleTypeStories()
        load(props.id)
        const {load:loadType,storyType,error:errorType}=getSingleType()
        loadType(props.id)

     
        return {posts,error,storyType}
    }
}

</script>