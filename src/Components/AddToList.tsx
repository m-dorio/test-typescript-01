import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        imgUrl: "",
        notes: ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    }

    const handleClick = (): void => {
        if (
            !input.name || !input.age || !input.imgUrl || !input.notes
        ) {
            return
        }

        setPeople([
            // every person from people list
            ...people, {
                name: input.name,
                age: input.age,
                img: input.img,
                note: input.notes
            }

        ])
    }

    return (
        <div className="AddToList">
            <h2>Add to List</h2>
            <input type="text" placeholder="Name" value={input.name} onChange={handleChange} name="name" className="AddToList-input" />

            <input type="text" placeholder="Age" value={input.age} onChange={handleChange} name="age" className="AddToList-input" />

            <input type="text" placeholder="Image URL" value={input.imgUrl} onChange={handleChange} name="imgUrl" className="AddToList-input" />

            <textarea placeholder="Notes" value={input.notes}
                onChange={handleChange} name="notes"
                className="AddToList-input" />

            <button type="button" className="btn AddToList-btn" onClick={handleClick}>+</button>

        </div>
    );
}

export default AddToList;