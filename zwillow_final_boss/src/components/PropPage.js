import React, { useEffect, useState } from "react";
import NewPropForm from "./NewPropForm";
import PropList from "./PropList";
import Search from "./Search";

function PropPage() {
    const [props, setProps] = useState([]);
    const [searchWord, setSearchWord] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/properties")
            .then((r) => r.json())
            .then((propsArray) => {
                setProps(propsArray);
            });
    }, []);

    function handleAddProp(newProp) {
        const updatedPropsArray = [...props, newProp];
        setProps(updatedPropsArray);
    }

    function handleDeleteProp(id) {
        const updatedPropsArray = props.filter((prop) => prop.id !== id);
        setProps(updatedPropsArray);
    }

    function handleUpdateProp(updatedProp) {
        const updatedPropsArray = props.map((props) => {
            if (props.id === updatedProp.id) {
                return updatedProp;
            } else {
                return props;
            }
        });
        setProps(updatedPropsArray);
    }

    const displayedProps = props.filter((prop) => {
        return prop.address.toLowerCase().includes(searchWord.toLowerCase());
    });

    return (
        <main>
            <NewPropForm onAddProp={handleAddProp} />
            <Search searchWord={searchWord} onSearchChange={setSearchWord} />
            <PropList
                props={displayedProps}
                onDeleteProp={handleDeleteProp}
                onUpdateProp={handleUpdateProp}
            />
        </main>
    );
}

export default PropPage;