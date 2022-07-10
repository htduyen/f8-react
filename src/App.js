import { useState } from "react";
import Content from "./Content";

function App() {
  
  const [show, setShow] = useState(false)

  const showHandler = () => {
    setShow(!show)
  }

  return (
    <div className="App">
        <button onClick={showHandler}>Show</button>
        { show && <Content/>}
    </div>
  );
}

export default App;
