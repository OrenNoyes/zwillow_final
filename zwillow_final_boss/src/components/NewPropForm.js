import React, { useState } from "react";

function NewPropForm({ onAddProp }) {
    const [address, setAddress] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:6001/properties", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                address: address,
                image: image,
                price: price,
            }),
        })
            .then((r) => r.json())
            .then((newProp) => onAddProp(newProp));
    }

    return (
        <div className="new-prop-form">
            <h2>Add Property!</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <input
                    type="number"
                    name="price"
                    step="100000"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                />
                <button type="submit">Add Property</button>
            </form>
        </div>
    );
}

export default NewPropForm;