import { useState } from "react";
import Content from "./Content";
import Interval from "./Interval";

function App() {
  
  const [show, setShow] = useState(false)

  const showHandler = () => {
    setShow(!show)
  }

  return (
    <div className="App">
        <button onClick={showHandler}>Show</button>
        {/* { show && <Content/>} */}
        { show && <Interval/>}
    </div>
  );
}

export default App;
