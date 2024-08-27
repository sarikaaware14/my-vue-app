<template>
    <div>
      <button v-on:click="toggleFavorite">Favorite</button>
      <h2>
        {{ foodName }}
        <img src="https://www.w3schools.com/vue/img_pizza.svg" v-show="foodIsFavorite">
      </h2>
      <p>{{ foodDesc }}</p>
      
    </div>

    <h2>Different Kinds of Food</h2>
    <p><mark>In this application, food data is provided in "App.vue", and injected in the "FoodKinds.vue" component so that it can be shown here:</mark></p>
    <div  v-for="(x, index) in junkFoods" :key="index">
        <img :src="x.imgUrl">
        <p class="pName">{{ x.name }}</p>
    </div>
  </template>
  
  <script>
    export default {
      props: ['foodName','foodDesc','isFavorite'],
      data() {
        return {
          foodIsFavorite: this.isFavorite
        }
      },
      methods: {
        toggleFavorite() {
          this.foodIsFavorite = !this.foodIsFavorite;
        }
      }
    }
  </script>
  
<style>
  img {
    height: 100px;
    width: 100px;
  }
</style>