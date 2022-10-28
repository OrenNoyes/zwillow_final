import React from "react";
import PropCard from "./PropCard";

function PropList({ plants, onDeletePlant, onUpdatePlant }) {
    return (
        <ul className="cards">
            {plants.map((plant) => {
                return (
                    <PropCard
                        key={plant.id}
                        plant={plant}
                        onDeletePlant={onDeletePlant}
                        onUpdatePlant={onUpdatePlant}
                    />
                );
            })}
        </ul>
    );
}

export default PropList;