import clsx from 'clsx'
import { useStore, actions } from '../../../store'

function Footer() {
    const [state, dispatch] = useStore()
    const { todoList, filters } = state

    const handleChangeFilter = (e, filter) => {
        e.preventDefault()
        dispatch(actions.changeFilter(filter))
    }

    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{state.todoList.filter((todo) => !todo.completed).length}</strong> item left
            </span>

            <ul className='filters'>
                {Object.keys(filters).map((filter, index) => (
                    <li key={index}>
                        <a
                            className={clsx({
                                selected: state.filter === filter,
                            })}
                            href='/'
                            onClick={e => handleChangeFilter(e,filter)}
                        >
                            {filter[0].toUpperCase() + filter.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
            {todoList.filter((todo) => todo.completed).length > 0 && (
                <button className='clear-completed' onClick={() => dispatch(actions.removeAllCompleted())}>
                    Clear completed
                </button>
            )}
        </footer>
    )
}

export default Footer
