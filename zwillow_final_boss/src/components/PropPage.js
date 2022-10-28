import React, { useEffect, useState } from "react";
import NewPropForm from "./NewPropForm";
import PropList from "./PropList";
import Search from "./Search";

function PropPage() {
    const [plants, setPlants] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/properties")
            .then((r) => r.json())
            .then((plantsArray) => {
                setPlants(plantsArray);
            });
    }, []);

    function handleAddPlant(newPlant) {
        const updatedPlantsArray = [...plants, newPlant];
        setPlants(updatedPlantsArray);
    }

    function handleDeletePlant(id) {
        const updatedPlantsArray = plants.filter((plant) => plant.id !== id);
        setPlants(updatedPlantsArray);
    }

    function handleUpdatePlant(updatedPlant) {
        const updatedPlantsArray = plants.map((plant) => {
            if (plant.id === updatedPlant.id) {
                return updatedPlant;
            } else {
                return plant;
            }
        });
        setPlants(updatedPlantsArray);
    }

    const displayedPlants = plants.filter((plant) => {
        return plant.address.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <main>
            <NewPropForm onAddPlant={handleAddPlant} />
            <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <PropList
                plants={displayedPlants}
                onDeletePlant={handleDeletePlant}
                onUpdatePlant={handleUpdatePlant}
            />
        </main>
    );
}

export default PropPage;