import PropTypes from 'prop-types'
import { useRef } from 'react'
import { useStore ,actions } from './../../../store'

TodoItem.propTypes = {
    index: PropTypes.number.isRequired,
    todo: PropTypes.object.isRequired,
    onEditing: PropTypes.func,
}

TodoItem.defaultProps = {
    onEditing: null
}

function TodoItem({ index, todo, onEditing }) {
    const [, dispatch] = useStore()
    const editInput = useRef(null)

    const handleEditing = index => {
        onEditing(index)
        editInput.current.value = todo.title
        setTimeout(() => {
            if (editInput.current) 
                editInput.current.focus()      
        }, 0);
    } 

    const handleUpdateTodo = e => {
        const newTitle = editInput.current.value.trim()
        if (e.charCode === 13) {
            if (newTitle!== todo.title)
                dispatch(actions.updateTodo({
                    index,
                    newTitle
                }))    
            onEditing(null)
        }
    }

    return (
        <>
            <div className='view' onDoubleClick={() => handleEditing(index)}>
                <input 
                    className='toggle' 
                    type='checkbox' 
                    onChange={() => dispatch(actions.toggleTodo(index))}
                    checked={todo.completed}
                />
                <label>{ todo.title } </label>
                <button 
                    className='destroy'
                    onClick={() => dispatch(actions.removeTodo(index))}
                >
                </button>
            </div>
            <input
                ref={editInput}
                className='edit'
                onBlur={() => onEditing(null)}
                onKeyPress={handleUpdateTodo}
            />
        </>
    )
}

export default TodoItem
