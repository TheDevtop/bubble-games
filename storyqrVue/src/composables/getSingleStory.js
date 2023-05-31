import { ref } from 'vue'

const getSingleStory = () => {
    const story = ref(null)
    const error = ref(null)
  
    const load = async (id) => {
      try {
        // Adjust the URL to match your proxy setup
        const url = 'https://145.220.74.171:8082/database/stories/single?id=' + id
        const res = await fetch(url)
        if (!res.ok) {
          throw Error('No data available')
        }
        story.value = await res.json()
      } catch (err) {
        error.value = err.message
      }
    }
  
    return { load, story, error }
  }
  

export default getSingleStory