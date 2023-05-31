import { ref } from 'vue'

const getStoryTypes = () => {
    const storyTypes = ref([])
    const error = ref(null)
    
    const load = async () => {
        try {
        const data = await fetch('https://145.220.74.171:8082/database/types')
        if (!data.ok) {
            throw Error('no data available')
        }
        storyTypes.value = await data.json()
        } catch (err) {
        error.value = err.message
        console.log(error.value)
        }
    }
    
    return {load, storyTypes, error}
    }

export default getStoryTypes