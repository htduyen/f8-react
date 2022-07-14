import {useState } from "react";
import TestMemo from "./TestMemo";


function App() {

	const [count, setCount] = useState(60);

	const handlerNumber = () => {
		setCount(count + 1);
	};

	return (
		<div className="App">
			<TestMemo/>
			<h1>{count}</h1>
			<button  onClick={handlerNumber}>Stop</button>

		</div>
	);
}

export default App;
