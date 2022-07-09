import { useState } from "react";

function App() {
  const courses = [
    { id: 1, name: "ReactJS" },
    { id: 2, name: "Angular" },
    { id: 3, name: "VueJs" },
  ];

  const [checked, setChecked] = useState(2);

  const onChangeHandler = () => {
    console.log({id: checked})
  };
  return (
    <div className="App">
      <div>
        {courses.map((course) => (
          <div key={course.id}>
            <input
              type="radio"
              
              checked={checked === course.id}
              onChange={() => setChecked(course.id)}
            />{course.name}
          </div>
        ))}
        <button onClick={onChangeHandler}>Cập nhật</button>
      </div>
    </div>
  );
}

export default App;
