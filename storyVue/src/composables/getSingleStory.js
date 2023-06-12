import { ref } from 'vue'

const getSingleStory = (id) => {
    const story = ref(null)
    const error = ref(null)
  
    const load = async () => {
      try {
        // Adjust the URL to match your proxy setup
        const url = "http://145.220.74.171:3000/stories?id=" + id
        const res = await fetch(url)

        if (!res.ok) {
          throw Error('No data available')
        }
        const data = await res.json();
story.value = data[0];  // Get the first item from the array
console.log('Story:', story.value);

        
      } catch (err) {
        error.value = err.message
      }
    }
  
    return { load, story, error }
}

export default getSingleStory
