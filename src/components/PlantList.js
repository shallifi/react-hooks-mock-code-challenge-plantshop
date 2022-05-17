import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantDbInfo, onUpdatePlant, onDeletePlant}) {

  function renderPlants() {plantDbInfo.map((plantDbInfo) => {
      return (
        <PlantCard
          key={plantDbInfo.id}
          plantDbInfo={plantDbInfo}
          onDeletePlant={onDeletePlant}
          onUpdatePlant={onUpdatePlant}
        />
      );
    })}

  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
