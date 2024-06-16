import React from "react";
import { useState } from "react";

const AddToList = () => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        imgUrl: "",
        notes: ""
    })

    return (
        <div className="AddToList">
            <h2>Add to List</h2>
            <input type="text" placeholder="Name" value={input.name} name="name" className="AddToList-input" />

            <input type="text" placeholder="Age" value={input.age} name="name" className="AddToList-input" />

            <input type="text" placeholder="Image URL" value={input.imgUrl} name="name" className="AddToList-input" />

            <textarea placeholder="Notes" value={input.notes} name="name" className="AddToList-input" />
        </div>
    );
}

export default AddToList;