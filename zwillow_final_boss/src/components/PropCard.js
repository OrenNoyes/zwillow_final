import React, { useState } from "react";

function PropCard({ prop, deleteProp, updateProp }) {
    const { id, price, address, image  } = prop;

    const [isAvailable, setIsAvailable] = useState(true);
    const [newPrice, setNewPrice] = useState(price);

    function handleToggleAvb() {
        setIsAvailable((isAvailable) => !isAvailable);
    }

    function handleDeleteClick() {
        fetch(`http://localhost:3000/properties/${id}`, {
            method: "DELETE",
        });

        deleteProp(id);
    }

    function handlePriceFormSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/properties/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ price: newPrice }),
        })
            .then((r) => r.json())
            .then((updateProp) => {
                updateProp(updateProp);
            });
    }

    return (
        <li className="card">
            <img src={image} alt={address} />
            <h4>{address}</h4>
            <p>Price: {price}</p>
            {isAvailable ? (
                <button className="primary" onClick={handleToggleAvb}>
                    Available
                </button>
            ) : (
                <button onClick={handleToggleAvb}>Unavailable</button>
            )}
            <button onClick={handleDeleteClick}>Delete</button>
            <form onSubmit={handlePriceFormSubmit}>
                <input
                    type="number"
                    step="100"
                    placeholder="Price"
                    value={newPrice}
                    onChange={(e) => setNewPrice(parseFloat(e.target.value))}
                />
                <button type="submit">Update Price</button>
            </form>
        </li>
    );
}

export default PropCard;