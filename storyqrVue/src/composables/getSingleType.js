import { ref } from 'vue'

const getSingleType = () => {
    const storyType = ref([])
    const error = ref(null)
    
    const load = async (id) => {
       
        try {
            const response = await fetch('http://localhost:3000/storyTypes')
            if (!response.ok) {
                throw Error('no data available')
            }
            const data = await response.json()
            console.log(data)
            storyType.value = data.find(type=>type.id==id)
            console.log(storyType.value, id)
        } catch (err) {
            error.value = err.message
       
        }
    }
    
    return {load, storyType, error}
    }

export default getSingleType
