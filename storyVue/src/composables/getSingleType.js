import { ref } from 'vue'

const getSingleType = (id) => {
    const storyType = ref(null)
    const error = ref(null)
  
    const load = async (id) => {
      try {
        // Adjust the URL to match your proxy setup
        const url = "http://145.220.74.171:3000/storyTypes?id=" + id
        const res = await fetch(url)

        if (!res.ok) {
          throw Error('No data available')
        }
        const data = await res.json();
        storyType.value = data[0];  // Get the first item from the array
console.log('Story:', storyType.value);

        
      } catch (err) {
        error.value = err.message
      }
    }
  
    return { load, storyType, error }
}

export default getSingleType
