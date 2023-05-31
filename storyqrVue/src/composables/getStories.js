
import { ref } from 'vue'
const getStories =  () => { 
    const stories = ref([])
    const error = ref(null)
    
    const load = async () => {
        try {
          const data = await fetch('https://145.220.74.171:8082/database/stories')
          if (!data.ok) {
            throw Error('no data available')
          }
          stories.value = await data.json()
          console.log(stories)
       
        } catch (err) {
          error.value = err.message
        
        }}
      return { stories, error, load }
}

export default getStories