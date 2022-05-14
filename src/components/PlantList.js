import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

 const renderPlantCard = plants.map(plantDbInfo => <PlantCard
  key={plantDbInfo.id}
  plantDbInfo={plantDbInfo}
  )

  return (
    <ul className="cards">{/* render PlantCards components in here */}</ul>
  );
}

export default PlantList;
