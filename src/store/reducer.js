import { SET_TODO_INPUT, TOGGLE_TODO, TOGGLE_ALL_TODO, REMOVE_TODO, ADD_TODO, REMOVE_ALL_COMPLETED, CHANGE_FILTER, UPDATE_TODO } from "./Constants"
import { getStorage, setStorage } from './storage'


const initState = {
    todoList: getStorage(),
    todoInput: '',
    filter: 'all',
    filters: {
        all: () => true,
        active: (todo) => !todo.completed,
        completed: (todo) => todo.completed
    }
}

const reducer = (state, action) => {
    const newState = { ...state }
    const newTodoList = [...newState.todoList]

    switch (action.type) {
        case SET_TODO_INPUT:
            newState.todoInput = action.payload
            break
        case ADD_TODO:
            newState.todoList = [
                ...state.todoList,
                {
                    title: action.payload,
                    completed: false
                }
            ]

            break
        case UPDATE_TODO:
            const { index, newTitle } = action.payload

            newState.todoList[index].title = newTitle

            break
        case REMOVE_TODO:
            newState.todoList = state.todoList.filter((todo, index) => index !== action.payload)

            break
        case TOGGLE_TODO:
            newTodoList[action.payload] = {
                ...newTodoList[action.payload],
                completed: !newTodoList[action.payload].completed
            }

            newState.todoList = newTodoList

            break
        case TOGGLE_ALL_TODO:
            newState.todoList = state.todoList.map(todo => ({
                ...todo,
                completed: action.payload
            }))
            
            break
        case REMOVE_ALL_COMPLETED:
            newState.todoList = state.todoList.filter(todo => !todo.completed)
            
            break
        case CHANGE_FILTER:
            newState.filter = action.payload
            
            break
        default:
            throw new Error('Invalid action')
    }

    setStorage(newState.todoList)
    return newState
}

export { initState }
export default reducer