import TodoList from './components/TodoList'
import { StoreProvider } from './store'
function App() {
	return (
		<StoreProvider>
			<TodoList />
		</StoreProvider>
	);
}

export default App;
