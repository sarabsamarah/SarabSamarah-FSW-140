import React from "react";
import "./styles.css";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Characters from "./components/Chars";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/chars">
          <Characters />
        </Route>
      </Switch>
    </div>
  );
}
export default App;






// import React from 'react'
// import axios from 'axios'
// function App() {
//   function getAllData(){
//     axios.get('/data')
//     .then(res => {
//       mapItToLi(res.data)
//       console.log(res.data)
//     })
//   }
//   function mapItToLi(arr){
//     arr.map(item => {
//       let x = document.getElementById("App")
//       let y = document.createElement('h3')
//       y.innerHTML = `Avenger: ${item["Name/Alias"]}`
//       x.append(y)
//     })
//   }
//   return (
//     <div id="App">
//       <h2>The Biggest Avengers Database!</h2>
//       <button onClick={getAllData}>Click me!</button>
//     </div>
//   );
// }
// export default App;







// import React from 'react'
// import axios from 'axios'
// function App() {
//   function getAllData(){
//     axios.get('/data')
//     .then(res => {
//       mapItToLi(res.data)
//       console.log(res.data)
//     })
//   }
//   function mapItToLi(arr){
//     arr.map(item => {
//       let x = document.getElementById("App")
//       let y = document.createElement('h3')
//       y.innerHTML = `Avenger: ${item["Name/Alias"]}`
//       x.append(y)
//     })
//   }
//   return (
//     <div id="App">
//       <h2>Click button to interact with DB</h2>
//       <button onClick={getAllData}>Click me!</button>
//     </div>
//   );
// }
// export default App;