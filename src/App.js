import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const initialData = [];


function App() {

  const [data, setData] = useState(initialData)

  const getData = () => {
    axios
      .get(`http://localhost:3000/data`)
      .then((res) => {
        setData(res.data)
      })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
        This is an app
        <button onClick={() => console.log(data)}>Click Me</button>

    </div>
  );
}

export default App;
