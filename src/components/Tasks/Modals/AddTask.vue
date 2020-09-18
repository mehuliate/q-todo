<template>
    <q-card>
        <q-card-section class="row">
            <div class="text-h6">Add Task</div>
            <q-space />
            <q-btn flat dense round icon="close" v-close-popup/>
        </q-card-section>
        
        <form @submit.prevent="submitForm">
            <q-card-section class="q-pt-none">
                <div class="row q-mb-xs">
                    <q-input 
                    outlined 
                    v-model="taskToSubmit.name" 
                    :rules="[val => !!val || 'Field is required']"
                    autofocus
                    label="Task Name" 
                    class="col"
                    ref="name">
                        <template v-slot:append>
                            <q-icon 
                            v-if="taskToSubmit.name"
                            name="close" 
                            @click="taskToSubmit.name = ''" class="cursor-pointer" />
                        </template>
                    </q-input>
                </div>
                <div class="rom q-mb-xs">
                    <q-input outlined v-model="taskToSubmit.dueDate" label="Due date" >
                        <template v-slot:append>
                            <q-icon 
                            v-if="taskToSubmit.dueDate"
                            name="close" 
                            @click="clearDueDate" class="cursor-pointer" />
                            <q-icon name="event" class="cursor-pointer">
                                <q-popup-proxy>
                                <q-date v-model="taskToSubmit.dueDate">
                                    <div class="row items-center justify-end">
                                        <q-btn v-close-popup label="Close" color="primary" flat />
                                    </div>
                                </q-date>
                                </q-popup-proxy>
                            </q-icon>
                        </template>
                    </q-input>
                </div>
                <div 
                v-if="taskToSubmit.dueDate"
                class="rom q-mb-xs">
                        <q-input outlined v-model="taskToSubmit.dueTime" label="Due time" >
                            <template v-slot:append>
                                <q-icon 
                                v-if="taskToSubmit.dueTime"
                                name="close" 
                                @click="taskToSubmit.dueTime = ''" class="cursor-pointer" />
                                <q-icon name="access_time" class="cursor-pointer">
                                <q-popup-proxy>
                                    <q-time v-model="taskToSubmit.dueTime">
                                    <div class="row items-center justify-end">
                                        <q-btn v-close-popup label="Close" color="primary" flat />
                                    </div>
                                    </q-time>
                                </q-popup-proxy>
                                </q-icon>
                            </template>
                        </q-input>
                </div>


            </q-card-section>
            <q-card-actions align="right">
                <q-btn 
                label="SAVE" 
                color="primary" 
                type="submit"
                />
            </q-card-actions>
        </form>

    </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data(){
        return {
            taskToSubmit: {
                name: '',
                dueDate: '',
                dueTime: '',
                completed: false
            }
        }
    },
    methods: {
        ...mapActions('tasks', ['addTask']),
        submitForm(){
            this.$refs.name.validate()
            if (!this.$refs.name.hasError) {
                this.submitTask()
            }
        },
        submitTask(){
            this.addTask(this.taskToSubmit)
            this.$emit('close')
        },
        clearDueDate(){
            this.taskToSubmit.dueDate = ''
            this.taskToSubmit.dueTime = ''
        }
    }
}
</script>

<style>

</style>