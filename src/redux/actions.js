
export const fetchTodolistSuccess = (todolist) => {
    return {
        type: 'FETCH_TODO',
        payload: todolist
    }
}

// КОГДА УХОДИТ ЗАПРОС И ПРИХОДИТ ОШИБКА
export const fetchTodolistRequest = () => {
    return {
        type: 'FETCH_TODOS_REQUEST'
    }
}

export const fetchTodolistFailure = () => {
    return {
        type: 'FETCH_TODOS_FAILURE',
    }
}

export const openModal = (data = {}, modalType = null) => {
    console.log(modalType)
    return {
        type: 'OPEN_MODAL',
        payload: {data, modalType},
    }
}

export const closeModal = () => {
    return {
        type: 'CLOSE_MODAL',
    }
}
