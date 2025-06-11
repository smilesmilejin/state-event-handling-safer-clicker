import React, { useState } from "react";
import './App.css'

function App() {
    const [likesCount, setLikesCount] = useState(0);

    // This is called the functional updater form. It’s best practice when your new state depends on the previous state, because:
    // React batches state updates and they can be asynchronous.
    // use this if state uses previous state value! 
    // This guarantees you always get the latest value of likesCount (not a stale closure value).
    const increaseLikes = () => {
      setLikesCount((prevLikesCount) => prevLikesCount + 1);

      // Instead of this
      // Uses the current value of likesCount as it was when this render happened.
      // if clicked 10 times, it might still uses the same values, not updating
      // If you call this multiple times quickly, or if React batches updates, this can cause stale state issues (incrementing from an outdated value).
      // setLikesCount(likesCount + 1);
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
