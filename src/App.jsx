import React, { useState } from 'react';
import masha from '../src/assets/masha.png'
function App() {
  // Initialize state for background color
  const [backgroundColor, setBackgroundColor] = useState('white');

  // Function to change background color based on button click
  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div style={{ backgroundColor: backgroundColor, height: '100vh', transition: 'background-color 0.5s' }}>
      <h1 className=' p-5 text-center text-warning'>Background-color-Changer</h1>
      <div className=' text-center'>
        <button className="btn btn-primary  m-5  shadow rounded " onClick={() => changeBackgroundColor('lightblue')}>Light Blue</button>
        <button  className="btn btn-success m-5  shadow rounded " onClick={() => changeBackgroundColor('lightgreen')}>Light Green</button>
        <button  className="btn btn-danger m-5 shadow rounded " onClick={() => changeBackgroundColor('lightcoral')}>Light Coral</button>
      </div>
    </div>
  );
}

export default App;
