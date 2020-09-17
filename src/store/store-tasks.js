import Vue from 'vue'

const state = {
    tasks: {
        'ID1': {
            name: 'Go to shop',
            completed: false,
            dueDate: '2020/10/01',
            dueTime: '18.00'
        },
        'ID2': {
            name: 'Go to shop',
            completed: false,
            dueDate: '2020/10/01',
            dueTime: '18.00'
        },
        'ID3': {
            name: 'Go to shop',
            completed: false,
            dueDate: '2020/10/01',
            dueTime: '18.00'
        }
    }
    // tasks: [
    //     {
    //         id: 1,
    //         name: 'Go to shop',
    //         completed: false,
    //         dueDate: '2020/10/01',
    //         dueTime: '18.00'
    //     },
    //     {
    //         id: 2,
    //         name: 'Go to shop',
    //         completed: false,
    //         dueDate: '2020/10/05',
    //         dueTime: '18.20'
    //     },
    //     {
    //         id: 3,
    //         name: 'Go to shop',
    //         completed: false,
    //         dueDate: '2020/10/06',
    //         dueTime: '18.30'
    //     }

    // ]
}

const mutations = {
    updateTask(state, payload) {
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTask(state, id) {
        // delete state.tasks[id]
        Vue.delete(state.tasks, id)
    }
}

const actions = {
    updateTask({ commit }, payload) {
        commit('updateTask', payload)
    },
    deleteTask({ commit }, id) {
        commit('deleteTask', id)
    }
}

const getters = {
    tasks: () => {
        return state.tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}