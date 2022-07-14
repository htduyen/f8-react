import {useState, useCallback } from "react";
import TestMemo from "./TestMemo";


function App() {

	const [count, setCount] = useState(60);

	const handlerNumber = useCallback(() => {
		setCount(prev => prev + 1);
	}, []);

	return (
		<div className="App">
			<h1>{count}</h1>
			<TestMemo onBtnClicked={handlerNumber}/>
		</div>
	);
}

export default App;
