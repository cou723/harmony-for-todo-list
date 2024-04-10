import { ClockButton } from './components/ClockButton'
import { Counter } from './components/Counter'
import Header from './components/Header'

export function App() {
	return (
		<>
			<Header />
			<main>
				<h1>Hello, Hono with React!</h1>
				<h2>Example of useState()</h2>
				<Counter />
				<h2>Example of API fetch()</h2>
				<ClockButton />
			</main>
		</>
	)
}
