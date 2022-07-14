/**
 * This file contains utility functions and session storage
 */


// fetch available todos
export const fetchOfflineToDos = () => {
    const store = localStorage.getItem('todos');
    const todos = !store ? [] : JSON.parse(store);
    
    return !todos ? [] : todos;
};

// add todo
export const addToDo = (payload) => {
    const store = localStorage.getItem('todos');
    const todos = !store ? [] : JSON.parse(store);
    
    todos.unshift(payload);
    const updatedToDos = JSON.stringify(todos);
    
    localStorage.setItem('todos', JSON.stringify(updatedToDos));
    
    return sortToDoList(todos);
}

// update todo
export const updateToDo = (id, isCompleted) => {
    const store = localStorage.getItem('todos');
    const todos = !store ? [] : JSON.parse(store);

    todos.forEach(todo => {
        if (todo.id === id) todo.completed = isCompleted
    });

    localStorage.setItem('todos', JSON.stringify(todos));

    return todos
}

// remove todo
export const removeToDo = (id) => {
    const store = localStorage.getItem('todos');
    const todos = !store ? [] : JSON.parse(store);
    const updatedToDos = todos.filter(todo => todo.id !== id);
    const serializedToDos = JSON.stringify(updatedToDos);

    localStorage.setItem('todos', serializedToDos);

    return updatedToDos
}

// clear all todos 
export const clearAllToDos = () => localStorage.removeItem('todos')

// sort todo list
export const sortToDoList = (todoList) => {
    const sortedToDos = todoList.sort((a) => a.completed ? 1 : -1);
    const serializedToDos = !sortedToDos ? JSON.stringify([]) : JSON.stringify(sortedToDos);

    localStorage.setItem('todos', serializedToDos);

    return sortedToDos;
}