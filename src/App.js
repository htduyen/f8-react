import {useEffect, useRef, useState } from "react";


function App() {

	const [count, setCount] = useState(60);

	const interval = useRef();
	const prevCount = useRef()

	useEffect(() => {
		prevCount.current = count
	}, [count]);

	const handlerStart = () => {
		interval.current = setInterval(() => {
			setCount(prev => prev -1)
		}, 1000)
	};

	const handlerStop = () => {
		clearInterval(interval.current)
	};

	console.log(prevCount.current, count);
	return (
		<div className="App">
			<h1>{count}</h1>
			<button onClick={handlerStart}>Start</button>
			<button  onClick={handlerStop}>Stop</button>

		</div>
	);
}

export default App;
