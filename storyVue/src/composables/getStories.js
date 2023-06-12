
import { ref } from 'vue'
const getStories =  () => { 
    const stories = ref([])
    const error = ref(null)
    
    const load = async () => {
        try {
          const data = await fetch('http://localhost:3000/stories')
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