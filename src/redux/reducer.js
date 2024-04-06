const initialState = {

    todoList: [],

    modal: {
        data: {},
        isOpen: false,
        modalType: null
    },
    isLoading: false,
    error: null,
}

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_TODO":
            return {
                ...state,
                isLoading: false,
                todoList: [...action.payload]
            };



        case "FETCH_TODOS_REQUEST": // когда уходит запрос
            return {
                ...state,
                isLoading: true,
            };

        case "FETCH_TODOS_FAILURE":  // когда приходит ошибка
            return {
                ...state,
                isLoading: false,
                error: 'Something went wrong, try again later.'
            };

        case "OPEN_MODAL":
            console.log(action.payload)
            return {
                ...state,
                modal: {
                    data: action.payload.data,
                    isOpen: true,
                    modalType: action.payload.modalType,
                }
            };

        case "CLOSE_MODAL":
            return {
                ...state,
                modal: {
                    data: {},
                    isOpen: false,
                    modalType: null
                }
            };

        default:
            return state;

    }
}

export default todoListReducer;
