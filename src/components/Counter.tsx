import { useState, type FunctionComponent } from 'react'
interface CounterProps {}

export const Counter: FunctionComponent<CounterProps> = () => {
	const [count, setCount] = useState(0)
	return <button onClick={() => setCount(count + 1)}>You clicked me {count} times</button>
}
