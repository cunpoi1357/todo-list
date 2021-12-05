import { ADD_TODO, CHANGE_FILTER, REMOVE_ALL_COMPLETED, REMOVE_TODO, SET_TODO_INPUT, TOGGLE_ALL_TODO, TOGGLE_TODO, UPDATE_TODO } from './Constants'

export const setTodoInput = (payload) => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodo = payload => ({
    type: ADD_TODO,
    payload
})

export const toggleTodo = payload => ({
    type: TOGGLE_TODO,
    payload
})

export const toggleAllTodo = payload => ({
    type: TOGGLE_ALL_TODO,
    payload
})

export const removeTodo = payload => ({
    type: REMOVE_TODO,
    payload
})

export const removeAllCompleted = () => ({
    type: REMOVE_ALL_COMPLETED
})

export const changeFilter = payload => ({
    type: CHANGE_FILTER,
    payload
})

export const updateTodo = payload => ({
    type: UPDATE_TODO,
    payload
})