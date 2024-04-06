import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import TodoItem from "./TodoItem";
import {fetchTasks} from "../api/todolistServices";
import Button, {ButtonTheme} from "../ui/button/Button";
import {openModal} from "../redux/actions";
import GlobalModal, {MODAL_TYPES} from "./GlobalModal";

const TodoList = () => {

    const todoList = useSelector(state => state.todoList);

    const dispatch = useDispatch();

    // для ЛОАДИНГА И ОШИБКИ
    const isLoading = useSelector(state => state.isLoading);
    const error = useSelector(state => state.error);

    const onCreateTask = () => {
        dispatch(openModal(null, MODAL_TYPES.CREATE_MODAL))
    }

    useEffect(() => {
        dispatch(fetchTasks())
    }, [])

    return (
        <div>
            <h1>Todo List</h1>
            <div style={{textAlign: 'right', marginRight: '5%'}}>
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onCreateTask}
                >
                    Create new task
                </Button>
            </div>

            {error &&
                <div>{error}</div>}

            {isLoading &&
                <div>Loading...</div>}

            {(!isLoading && !error) &&
                todoList.map(task => <TodoItem key={task._id} task={task}/>)}

            <GlobalModal/>
        </div>
    );
};

export default TodoList;
