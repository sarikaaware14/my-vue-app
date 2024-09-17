
<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="tasks">
        <p v-for="(x, index) in tasks" :key="index"   >
            {{ x.name }}<i @click="onDelete(x.id)" class="fa fa-close"></i><br>{{ x.desc }} <br>
            
        </p>
  </div>
</template>
<script>
export default {
  data() { 
    return {
    tasks: [
        { id: 1,
          name: 'Template changes', 
          desc: 'Proper data not coming' },
        { id: 2,
          name: 'Issue manager', 
          desc: 'Issue not get inserted' },
        { id: 3,
          name: 'Resources', 
          desc: 'Resources is not get display in project' },
        { id: 4,
          name: 'Timesheet', 
          desc: 'Time is not proper in Timesheet' },
        { id: 5,
          name: 'Timesheet', 
          desc: 'Time is not proper in Timesheet' },
        { id: 6,
          name: 'Campaign',
          desc: 'Campaign can be happen for the group of some of people'

          }
      ]
    }
},
methods:{
    onDelete(id){
        this.$emit('delete-task',id)
    }
}
}
</script>
<style>
    p{
        padding: 10px 10px 10px 10px;
        background: #e7e7e7;
    }
    .tasks{
        padding: 0px 25px 10px 25px;
    }
</style>