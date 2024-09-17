import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router'
import router from './router'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import HelloWorld from './components/HelloWorld.vue'
import AnimalCollection from './components/AnimalCollection.vue'
// import Tasks from './components/TaskCollection.vue'
// import AddTask from './components/AddTask.vue'

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         { path: '/animals', component: AnimalCollection },
//         { path: '/food', component: FoodItem },
//     ]
// });

const app = createApp(App)
app.component('food-item', FoodItem)
app.component('hello-world', HelloWorld)
app.component('animal-collection', AnimalCollection)
// app.component('task-collection', Tasks)
// app.component('add-task', AddTask)

app.use(router);

app.mount('#app')
