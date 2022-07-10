import { useState } from "react";

function App() {
  const storageJobs = localStorage.getItem("jobs");
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    return JSON.parse(storageJobs) ?? [];
  });

  const onChangeHandler = () => {
    setJobs((prev) => {
     
    const newJobs = [...prev, job];
    localStorage.setItem("jobs", JSON.stringify(newJobs));
    return newJobs;
    });
    setJob("");
  };

  return (
    <div className="App">
      <div>
        <input value={job} onChange={(e) => setJob(e.target.value)} />
        <button onClick={onChangeHandler}>Cập nhật</button>
      </div>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
