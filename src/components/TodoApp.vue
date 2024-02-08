<template>

    <div class="container mx-auto px-10 md:px-0">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div></div>
            <div>
                <div class="mt-10"></div>
                <h1 class="text-5xl font-semibold text-gray-600">TODOs</h1>

                <div class="mt-6">
                    <form @submit.prevent="addTodo()">
                        <div class="grid grid-cols-1 gap-4">
                            <div>
                                <input v-model="newTodo"
                                    class="border-2 outline-none py-2 px-2 shadow-md font-medium w-full rounded border-blue-300 hover:border-blue-600 focus:border-blue-600 focus:shadow-blue-200"/>
                            </div>
                            <div>
                                <div class="grid grid-cols-2 gap-2">
                                    <div>
                                        <button type="button" @click="removeAll()"
                                            class="text-white py-2 px-4 shadow-md w-full rounded bg-red-400 hover:bg-red-600 font-semibold"
                                        >Remove All</button>
                                    </div>
                                    <div>
                                        <button type="submit"
                                        class="text-white py-2 px-4 shadow-md w-full rounded bg-blue-400 hover:bg-blue-600 font-semibold">Add Todo</button>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </form>
                </div>

                <div class="mt-8 text-center">
                    <div class="grid grid-cols-1 gap-3">
                        <div>
                            <div class="h-full" v-if="todos.length === 0">
                                <p class="text-gray-400">
                                    Parece que você não adicionou nenhuma tarefa.
                                </p>
                            </div>
                        </div>
                        <div v-for="(todo, index) in todos" :key="index"
                            @click="completeTodo(todo)"
                            :class="{completed: todo.completed }"
                            class="rounded shadow-md p-3 h-full hover:shadow-gray-400 text-gray-600 text-lg font-semibold"
                        >
                            <span class="text-gray-600 text-lg font-semibold">
                                {{ todo.description }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';

const newTodo = ref("")
const todos = ref([])

function addTodo(){
    if(newTodo.value !== ""){
        todos.value.push({
            completed: false,
            description: newTodo.value
        });

        newTodo.value = ""
    }
}

function removeAll(){
    if(todos.value.length === 0) return  
    todos.value.splice(0, todos.value.length)
}

function completeTodo(todo){
    todo.completed = !todo.completed
}

</script>

<style scoped>
    .completed{
        text-decoration: line-through;
    }
</style>