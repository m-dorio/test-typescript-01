import React from "react";

interface IProps{
  people: {
    name: string
    age: number
    url: string
    notes?: string
  }[]
}

const List = (props: IProps) => {

    return (
        <div>
            I am a list of person
        </div>
    )
}

export default List;