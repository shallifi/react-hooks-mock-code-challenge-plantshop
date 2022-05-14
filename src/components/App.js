import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useState } from "react";

function App() {
  const [plants, setPlants] = useState([])

  function fetchData(){
    fetch(`http://localhost:6001/plants`)
      .then((resp) => resp.json())
      .then (date => console.log(setPlants)) 
    }
    
  

  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
