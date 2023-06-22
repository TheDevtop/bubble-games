import { ref } from 'vue'

const getAudio = (id) => {
    const audio = ref(null)
    const error = ref(null)
  
    const load = async () => {
      try {
        // Adjust the URL to match your proxy setup
        const url = " http://145.220.74.171:8080/media/get?=" + id
        const res = await fetch(url)

        if (!res.ok) {
          throw Error('No data available')
        }
        const data = await res.json();
story.value = data[0];  // Get the first item from the array
console.log('audio:', audio.value);

        
      } catch (err) {
        error.value = err.message
      }
    }
  
    return { load, audio, error }
}

export default getAudio
