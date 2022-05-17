import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState,useEffect } from 'react'



function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
      .then((resp) => resp.json())
      .then ((plantsArr) => {setPlants(plantsArr); 
    }) }, []);
    
  function handleAddPlant (newPlant)  {
    const updatedPlantsArr = [...plants, newPlant]
    setPlants(updatedPlantsArr)

  }


  console.log(handleAddPlant)

  function handleDeletePlant(id) {
    const updatedPlantsArray = plants.filter((plantDbInfo) => plantDbInfo.id !== id);
    setPlants(updatedPlantsArray);
  }
  function handleUpdatePlant(updatedPlant) {
    const updatedPlantsArray = plants.map((plantDbInfo) => {
      if (plantDbInfo.id === updatedPlant.id) {
        return updatedPlant;
      } else {
        return plantDbInfo;
      }
    });
    setPlants(updatedPlantsArray);
  }


  const displayedPlants = plants.filter((plantDbInfo) => {
    return plantDbInfo.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <NewPlantForm />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <PlantList 
      plants={displayedPlants}
      onDeletePlant={handleDeletePlant}
      onUpdatePlant={handleUpdatePlant}
      />
     </main>
  );
}

export default PlantPage;
