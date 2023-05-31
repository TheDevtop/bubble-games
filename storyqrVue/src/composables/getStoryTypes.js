import { ref } from 'vue'

const getStoryTypes = () => {
    const storyTypes = ref([])
    const error = ref(null)
    
    const load = async () => {
        try {
        const data = await fetch('http://localhost:3000/storyTypes')
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