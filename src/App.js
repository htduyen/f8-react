import React, { useReducer, useState} from "react";

// Init value
const initCount = 0

// Actions
const UP_ACTION = "up"
const DOWN_ACTION = "down"

const reducer = (state, action) => {
	switch (action) {
		case UP_ACTION:
			return state + 1	
		case DOWN_ACTION:
			return state - 1
		default:
			break;
	}
}

function App() {
    const [count, dispatch] = useReducer(reducer, initCount)

    return (
        <>
            <p>{count}</p>
			<button onClick={() => {dispatch(DOWN_ACTION)}}>Down</button>
			<button onClick={() => {dispatch(UP_ACTION)}}>Up</button>
        </>
    );
}

export default App;
