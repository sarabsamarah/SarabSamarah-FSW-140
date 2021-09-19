import React from "react";
import axios from "axios"




export default function addAvenger() {
    function addNew() {
      axios.get("/data").then((res) => {
        mapItToLi(res.data);
        console.log(res.data);
      });
    }
    function mapItToLi(arr) {
        arr.map((item) => {
          let x = document.getElementById("Avengers");
          let y = document.createElement("h3");
          y.className = "name";
          y.innerHTML = `Avenger Name: ${item["Name/Alias"]}`;
          x.append(y);
        });
      }
      return (
        <div id="Avengers">
          <h1 className="header">Avengers</h1>
          <h3>Add a new Avenger!</h3>
          <button onClick={addNew} className="Interact">
            Add New Character
          </button>
        </div>
      );
    }
    