import { useStore, actions } from '../../store'

import './style.scss'

import Header from './components/Header'
import TodoList from './components/TodoList'
import Footer from './components/Footer'


function TodoApp() {

    const [state, dispatch] = useStore()

    return (
        <section className="todoapp">
            <Header />
			<section className="main">
				<input 
                    id="toggle-all" 
                    className="toggle-all" 
                    type="checkbox" 
                    onClick={(e) => dispatch(actions.toggleAllTodo(e.target.checked))}
                />
				<label htmlFor="toggle-all">Mark all as complete</label>
                <TodoList />
			</section>
            {(state.todoList.length > 0) && <Footer/>}
		</section>
    );
}

export default TodoApp;