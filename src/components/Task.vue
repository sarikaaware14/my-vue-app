<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" :class="[task.reminder ? 'reminder' : '', 'task']"
    >
      <h3>
        {{ task.text }}
        <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
      </h3>
      <p>{{ task.day }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TaskPage',
    props: {
      task: Object,
    },
    task: [
        {id:1,name: 'Burrito', url: 'img_burrito.svg'},
        {name: 'Salad', url: 'img_salad.svg'},
        {name: 'Cake', url: 'img_cake.svg'},
        {name: 'Soup', url: 'img_soup.svg'},
        {name: 'Fish', url: 'img_fish.svg'},
        {name: 'Pizza', url: 'img_pizza.svg'},
        {name: 'Rice', url: 'img_rice.svg'},
        {name: 'Test', url: 'img_grape.svg'},
        {name: 'URL', url: 'img_blurberry.svg'}
      ],
      
  }
  </script>
  
  <style scoped>
  .fas {
    color: red;
  }
  
  .task {
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .task.reminder {
    border-left: 5px solid green;
  }
  
  .task h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px !important;
  }
  </style>
  