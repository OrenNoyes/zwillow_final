import React from "react";

function Search({ searchTerm, onSearchChange }) {
    return (
        <div className="searchbar">
            <label htmlFor="search">Find a property 🔎 </label>
            <input
                type="text"
                id="search"
                placeholder="Type an address"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
}

export default Search;