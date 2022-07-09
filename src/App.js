import { useState } from "react";

function App() {
  const courses = [
    { id: 1, name: "ReactJS" },
    { id: 2, name: "Angular" },
    { id: 3, name: "VueJs" },
  ];

  const [checked, setChecked] = useState([]);

  const onChangeHandler = (id) => {
    setChecked(prev =>{
      const isChecked = checked.includes(id)

      if (isChecked){
          return [...prev].filter(item => item !== id)
      }
      else{
          return [...prev, id]
      }
    }
      
    )
    console.log(checked)
  };

  // const updateHandler = () => {

  // }
  return (
    <div className="App">
      <div>
        {courses.map((course) => (
          <div key={course.id}>
            <input
              type="checkbox"
              checked={checked.includes(course.id)} 
              onChange={() => onChangeHandler(course.id)}
            />{course.name}
          </div>
        ))}
        <button >Cập nhật</button>
      </div>
    </div>
  );
}

export default App;
