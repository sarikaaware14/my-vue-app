import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import FoodItem from './components/FoodItem.vue'
import HelloWorld from './components/HelloWorld.vue'
import AnimalCollection from './components/AnimalCollection.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/animals', component: AnimalCollection },
        { path: '/food', component: FoodItem },
    ]
});

const app = createApp(App)
app.component('food-item', FoodItem)
app.component('hello-world', HelloWorld)
app.component('animal-collection', AnimalCollection)

app.use(router);

app.mount('#app')
