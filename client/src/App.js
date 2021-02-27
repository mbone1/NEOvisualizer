import './App.css';
import React, { useEffect, useState, } from 'react'
import Floaters from './components/sphere'


function App() {
  const [data, setData] = useState([]);
  const getData = () => fetch("http://localhost:9000/NASA").then(res => res.json())

    useEffect(() => {
      getData().then(res => setData(res.near_earth_objects)
      );
    }, []);
  
  console.log(data);
  
  let testRender;
  if (data) {
    testRender = data.map((obs) => <div><span>
      {obs.name_limited}
    </span>
      <p>
      {obs.estimated_diameter.feet.estimated_diameter_min}</p>
      <p>
      {obs.estimated_diameter.feet.estimated_diameter_max}</p>
    </div>)
}
else {
  testRender = <p>"loading..."</p>;
}
   
    return (
      <div className="App">
        <header className="App-header">
          <Floaters />
          {testRender}
        </header>
      </div>
    );
  }
  
  export default App;


  





