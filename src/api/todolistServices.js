import axios from "axios";
import {
    fetchTodolistFailure, fetchTodolistRequest,
    fetchTodolistSuccess
} from "../redux/actions";

export const fetchTasks = () => {
    return (dispatch) => {

        dispatch(fetchTodolistRequest()) // ДЛЯ ЛОАДИНГА

        axios.get('https://expressjs-server.vercel.app/todolist')
            .then(response => {
                const todolist = response.data
                dispatch(fetchTodolistSuccess(todolist))
            })
            .catch(error => {
                alert('Ошибка')
                dispatch(fetchTodolistFailure()) // ДЛЯ ЛОАДИНГА
            })
    }
}

export const postTask = (newTodo) => {
    return (dispatch) => {
        axios.post('https://expressjs-server.vercel.app/todolist', newTodo)
            .then(response => {
                dispatch(fetchTasks())
            })
            .catch(error => {
                alert('Ошибка')
                dispatch(fetchTodolistFailure()) // ДЛЯ ЛОАДИНГА
            })
    }
}

export const deleteTask = (id) => {
    return (dispatch) => {
        axios.delete(`https://expressjs-server.vercel.app/todolist/${id}`,)
            .then(response => {
                dispatch(fetchTasks())
            })
            .catch(error => {
                alert('Ошибка')
                dispatch(fetchTodolistFailure()) // ДЛЯ ЛОАДИНГА
            })
    }
}

export const changeTask = (task) => {
    return (dispatch) => {
        axios.patch(`https://expressjs-server.vercel.app/todolist/${task._id}`, task)
            .then(response => {
                dispatch(fetchTasks())
            })
            .catch(error => {
                alert('Ошибка')
                dispatch(fetchTodolistFailure()) // ДЛЯ ЛОАДИНГА
            })
    }
}
