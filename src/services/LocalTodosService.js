import { TodosService } from "./TodosService";


export class LocalTodosService extends TodosService {
    constructor() {
        super()
    }

    getTodos() {
        return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    }

    updateTodos(todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}