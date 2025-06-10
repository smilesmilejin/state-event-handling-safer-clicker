import React, { useState } from "react";
import './App.css'

function App() {
    const [likesCount, setLikesCount] = useState(0);
  
    const increaseLikes = () => {
      setLikesCount((prevLikesCount) => prevLikesCount + 1);
    };
  
    return (
      <div className="App">
        <p>How much do you like React?</p>
        <button onClick={(e) => increaseLikes()}>Like</button>
        <p>This much: {likesCount}</p>
      </div>
    );
}
  
export default App
