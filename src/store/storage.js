import { TODO_KEY } from "./Constants"

export const getStorage = () => {
    return JSON.parse(localStorage.getItem(TODO_KEY)) || []
} 

export const setStorage = todoList => {
    localStorage.setItem(TODO_KEY, JSON.stringify(todoList))
}