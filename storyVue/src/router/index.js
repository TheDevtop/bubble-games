import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlayerView from '../views/PlayerView.vue'
import ThemeView from '../views/ThemeView.vue'
import AddStoryView from '../views/AddStoryView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/story/:id',
    name: 'story',
    component:PlayerView,
    props: true
  },
  {path:'/theme/:id',
name:'theme',
component:ThemeView,
props:true},
{
  path:'/addstory',
  name:'addStory',
  component:AddStoryView
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
