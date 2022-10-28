import React from "react";
import PropCard from "./PropCard";

function PropList({ props, deleteProp, updateProp}) {
    return (
        <ul className="cards">
            {props.map((prop) => {
                return (
                    <PropCard
                        key={prop.id}
                        prop={prop}
                        deleteProp={deleteProp}
                        updateProp={updateProp}
                    />
                );
            })}
        </ul>
    );
}

export default PropList;