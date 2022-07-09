import { useState } from 'react';

function App() {

  const gifts = [
    "Iphone 13",
    "Samsung S21",
    "Oppo reno 6"
  ]

  const [ward, setWard] = useState()

  const onChangeHandler = () => {
    setWard(gifts[Math.floor(Math.random() * gifts.length)])
  }
  return (
    <div className="App">
      <div>
        <h1>{ward || "Chưa có phần thưởng"}</h1>
        <button onClick={onChangeHandler}>Cập nhật</button>
      </div>
    </div>
  );
}

export default App;
