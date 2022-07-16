import React, { useReducer, useRef } from "react";

// Init value
const initState = {
    job: "",
    jobs: [],
};

// Actions
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DEL_JOB = "del_job";

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload,
    };
};
const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload,
    };
};

const delJob = (payload) => {
    return {
        type: DEL_JOB,
        payload,
    };
};

// Reducer
const reducer = (state, action) => {
    console.log("Action: ", action);
    console.log("Prev state: ", state);

    let newState;
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload,
            };
            break;

        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload],
            };
            break;
		case DEL_JOB: 

			const newJobs = [...state.jobs]
			newJobs.splice(action.payload, 1)

			newState = {
				...state,
				jobs: newJobs,
			};
			break;
	
		default:
		throw new Error("Fail");
    }
    return newState;
};

function App() {
    const [state, dispatch] = useReducer(reducer, initState);

	const jobRef = useRef()

    const { job, jobs } = state;

    const handlerSubmit = () => {
        dispatch(addJob(job));
		dispatch(setJob(''))
		jobRef.current.focus()
    };

    return (
        <div>
            <input
                type="text"
                value={job}
				ref={jobRef}
                onChange={(e) => {
                    dispatch(setJob(e.target.value));
                }}
            />
            <button onClick={handlerSubmit}> Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}
					<span onClick={() => {dispatch(delJob(index))}}>
						&times;
					</span>
					</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
