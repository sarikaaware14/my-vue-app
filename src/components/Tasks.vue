<template>
  <div :key="task.id" v-for="task in tasks">
    <Task @toggle-reminder="$emit('toggle-reminder', task.id)" @edit-task="$emit('edit-task',task.id)" @delete-task="$emit('delete-task',task.id)" :task="task" />
  </div>
  <!-- <div :key="task.id" v-for="task in tasks">
    <h3>{{ task.text }}</h3>
  </div> -->
</template>

<script>
import Task from './Task'

export default {
  name: 'Tasks-name',
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  emits: ['delete-task','toggle-reminder','edit-task'],
}
</script>
