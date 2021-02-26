import './App.css';
import React, { useEffect, useState, } from 'react'

function App() {

  const [data, setData] = useState({});
  
  function fetchData() {
    const result = fetch("http://localhost:9000/NASA")
      .then(res => res.text())
      .then(res => setData({ apiResponse: res }),
        console.log(data))
      .then(function (res) {
        console.log(res)
      })
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
        {data.apiResponse}
        {/* {data} */}
        {/* {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
        </li>
      ))} */}
        {/* {data.apiResponse.map(() => {

        })} */}
      </header>
    </div>
  );
}

export default App;
