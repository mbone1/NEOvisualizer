import './App.css';
import React, { useEffect, useState, } from 'react'
import Sphere2 from './components/sphere2'
import P5Wrapper from 'react-p5-wrapper'


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
        <header className="">
        </header>
          <P5Wrapper sketch={Sphere2} />
          {/* <Floaters /> */}
          {/* <Sphere2 /> */}
          {testRender}
      </div>
    );
  }
  
  export default App;


  





