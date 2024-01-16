import React from 'react';
import Welcome from './components/Welcome';
import './style/Welcome.css'; // Include the CSS file here

function App() {
  return (
    <div className="App">
      <button onClick={() => setShow((show) => !show)}> Show / Hide</button>
      {show ? <h1>Welcome to React Challenges</h1> : null}
      <Welcome />
    </div>
  );
}

export default App;