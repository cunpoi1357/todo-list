import clsx from 'clsx'
import { useState } from 'react'
import { useStore } from './../../../store'

import TodoItem from './TodoItem'

function TodoList(props) {
    const [state, ] = useStore()
    const [editing, setEditing] = useState(null)

    return (
        <ul className='todo-list'>
            {
                state.todoList.filter(state.filters[state.filter]).map((todo, index) => (
                    <li 
                        key={index}
                        className={clsx(
                            {
                                'completed': todo.completed,
                                'editing': editing === index
                            }
                        )}
                    >
                        <TodoItem 
                            index={index} 
                            todo={todo} 
                            onEditing={setEditing}
                        />
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoList
