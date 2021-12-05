import { setTodoInput } from '../../../store/actions';
import { actions, useStore } from './../../../store'


function Header() {
	const [state, dispatch] = useStore()

	const handleKeyDown = (e) => {
		if (e.charCode === 13 && state.todoInput) {
			dispatch(actions.addTodo(state.todoInput))
			dispatch(setTodoInput(''))
		}
	}

    return (
        	<header className="header">
				<h1>todos</h1>
				<input 
					className="new-todo" 
					placeholder="What needs to be done?" 
					value={state.todoInput}
					onChange={e => dispatch(setTodoInput(e.target.value))}
					onKeyPress={handleKeyDown}
				/>
			</header>
    );
}	

export default Header;