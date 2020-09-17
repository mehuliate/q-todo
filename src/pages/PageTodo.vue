<template>
  <q-page padding>
    <q-list 
    separator
    bordered>

    <task
      v-for="(task, key) in tasks"
      :key="key"
      :task="task"
      :id="key"
    ></task>

    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  // name: 'PageIndex',
  // computed: {
  //   tasks(){
  //     return this.$store.getters['tasks/tasks']
  //   }
  // }
  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    'task' : require('components/Tasks/Task.vue').default
  }
}
</script>
