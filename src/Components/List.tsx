import React from "react";
import { IState as IProps } from "../App";

// interface IProps{
//   people: {
//       name: string
//       age: number
//       url: string
//       notes?: string
//   }[]
// }

const List: React.FC<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => {
        return people.map((person) => {
            return (
                <li className="List">
                <div className="List-header">
                    <img src={person.url} alt="" className="List-img" />
                </div>
                <h2>{person.name}</h2>
                <p>{person.age} years old</p>
                <p className="List-note">{person.notes}</p>
            </li>
            )
        }
    )}

    return (
    <>
        <h4>I am a list of person</h4>
        <ul>
          {renderList()}
        </ul>
    </>
    )
}

export default List;