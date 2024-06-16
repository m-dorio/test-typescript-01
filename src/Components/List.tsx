import React from "react";

interface IProps{
  people: {
    name: string
    age: number
    url: string
    notes?: string
  }[]
}

const List: React.FC<IProps> = ({ people }) => {
    return (
    <>
        <h4>I am a list of person</h4>
        <ul>
            {people.map(person => {
                    return (
                    <li>{person.name}</li>
                )
            })}
        </ul>
    </>
    )
}

export default List;