<template>
  <div class="addStory">
    <div v-if="showBlackScreen" class="black-screen"></div>
    <div class="toprow">
    <div id="backArrow" @click="$router.go(-1)">←  </div>
    <h2>Share Your Story</h2></div>
    <p>Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet.Nunc vulputate libero.</p>

    <form @submit="postStoryData">
      <label for="title">Story Name</label>
      
      <input type="text" id="name" name="title" placeholder="Story title..." required v-model="story.title">
      <div>{{ story.title }}</div>
      
      <label for="storyType">Story Type</label>
      
      <select name="storyType" v-model="story.storyType">
        <option v-for="storyType in storyTypes" :value="storyType.id" :key="storyType.id">
          {{ storyType.name }}
        </option>
      </select>
      <div id="addAudio">

        <label>Upload audio with the story</label>
        
        <label v-if="audioFileName"  for="audio" id="audioUpload">
 {{ audioFileName }}
        </label>
        <label v-else for="audio" id="audioUpload">
          Choose file to upload your audio   
        </label>
        <input type="file" id="audio" name="audio" accept="audio/*" @change="handleAudioUpload">

        <br>
      </div>
      
      <br>
      <AvatarBuilder @avatar-data="handleAvatarData"/>
      <br>
    
      <input type="submit" value="CONTINUE  →">
    </form>
  </div>
</template>

<script>
import getStoryTypes from '@/composables/getStoryTypes.js'
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import getSingleStory from '@/composables/getSingleType.js'
import AvatarBuilder from '@/components/AvatarBuilder.vue'

export default {
  name: 'AddStory',
  components:{AvatarBuilder},
  setup() {
    
    const story = ref({
      id: '',
      title: '',
      storyType: '',
      dateTime: ''
    });
    const handleAvatarData = (data) => {
  story.value.avatarData = data;
  console.log(story)
};
const audioFile = ref(null);
const audioFileName = ref('');

     const { storyTypes, error2, load: loadTypes } = getStoryTypes();
    loadTypes();

    const { load: checkID } = getSingleStory();
    
    const showBlackScreen = ref(false);

    const generateID = () => {
      return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    };
    
    const checkAndAssignID = async () => {
  let id;
  let exists = true;

  while (exists) {
    id = generateID();
    let storyExists = await checkID(id);
    exists = storyExists;
  }

  // Once a unique ID is found, assign it to the story
  story.value.id = id;
  console.log(id)
}

const handleAudioUpload = (event) => {
   audioFile.value = event.target.files[0];
   audioFileName.value = event.target.files[0].name;
   console.log(audioFileName.value)
};

    checkAndAssignID();
watch(showBlackScreen, (newVal, oldVal) => {
  nextTick(() => {
    const blackScreenElement = document.querySelector('.black-screen');

    if (newVal) {
      blackScreenElement?.classList.add('unreveal');
    } else {
      blackScreenElement?.classList.remove('unreveal');
    }
  });
});
onMounted(() => {
  showScreen();
      router.beforeEach((to, from, next) => {
       
        next();
      });
    });
    const router = useRouter();
function showScreen() {
      showBlackScreen.value = true;
      setTimeout(() => {
        // Put your navigation logic here
        showBlackScreen.value = false;
      }, 1500);  // transition duration
    }
    const postStoryData = (e) => {
      e.preventDefault();
      console.log('submitted');
      console.log(story);
      if (audioFile.value) {
   const formData = new FormData();
   formData.append('file', audioFile.value);
/* edit the urls*/
   fetch(`http://145.220.74.171:8080/media/post?=`+story.value.id, {
      method: 'POST',
      body: formData
   })
   .then(response => {
      if (!response.ok) {
         throw new Error('Network response was not ok');
      }
      console.log('Audio file uploaded successfully');
   })
   .catch(error => {
      console.error('There was a problem with the fetch operation: ', error);
   });
}

      // Get the current date and time
      const currentDateTime = new Date().toISOString().replace('T', ' ').slice(0, 19);

      // Add the dateTime field to the story object with the current date and time
      story.value.dateTime = currentDateTime;

      fetch('http://145.220.74.171:3000/stories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(story.value),
      })
        .then((response) => {
          if (response.ok) {
            console.log('Post request success:', response);
            router.push('/');
          } else {
            console.error('Post request failed:', response);
            // Handle error cases
          }
        })
        .catch((error) => {
          console.error('Post request error:', error);
          // Handle error cases
        });
    };
    
    return { story, storyTypes, postStoryData,showBlackScreen,handleAvatarData, handleAudioUpload, audioFile,audioFileName  }
  }
}
</script>
