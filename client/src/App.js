import './App.css';
import React, { useEffect, useState, } from 'react'
import axios from 'axios'

function App() {

  const [data, setData] = useState({});
  
  function fetchData() {
    const result = fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setData({ apiResponse: res }))
      .catch(err => err);

  }

  

  useEffect(() => {
    // const result = await axios("http://localhost:9000/testAPI");
    fetchData()
    
    // async function fetchData() {
    //   const result = axios("http://localhost:9000/testAPI");
    //   setData (result)
    // }
    // fetchData()
  }, []);


  // callAPI() {
  //   fetch("http://localhost:9000/testAPI")
  //     .then(res => res.text())
  //     .then(res => this.setState({ apiResponse: res }));
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* {data} */}
        {/* {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
        </li>
      ))} */}
        {data.apiResponse}
      </header>
    </div>
  );
}

export default App;
