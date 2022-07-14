import { useState } from 'react';

import {
    fetchOfflineToDos,
    addToDo,
    updateToDo
} from '../functions';
import Header from './Header';
import ToDoList from './ToDoList';

const Dashboard = () => {
    const storedToDos = fetchOfflineToDos();
    const [todos, setToDos] = useState(storedToDos);

    const updateToDoList = updates => {
        const todoList = addToDo(updates);

        setToDos(todoList);
    };

    const updateToDoStatus = (id, status) => {
        setToDos(updateToDo(id, status));
    }

    return (
        <>
            <Header updateToDoList={updateToDoList} setToDos={setToDos} />
            <ToDoList todos={todos} setToDos={setToDos} updateToDoStatus={updateToDoStatus} />
        </>
    );
}

export default Dashboard;