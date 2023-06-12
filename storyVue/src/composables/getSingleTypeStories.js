import { ref } from "vue"


const getSingleTypeStories = ()=>{
    const posts = ref(null)
    const error = ref(null)
    

    const load = async (id)=>{
                        
try{
    
let data = await fetch('http://localhost:3000/stories')
if (!data.ok){
    throw Error('data not available')
}
posts.value= await data.json();

posts.value=posts.value.filter(post=>post.storyType== id)
}
catch(err){
error.value=err.message

}
}
return {load,posts, error}

}
export default getSingleTypeStories