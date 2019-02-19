import React from "react";
import CoolButton from "./coolButton";

let texto = "Ironhack 2"

export const listItems = [
    <li>A</li>,
    <li>B</li>,
    <li>C</li>,
    <li>{texto}</li>
]

export const listItemsMap = [...Array(50)].map((oneNumber, idx) => <li key={idx}><CoolButton></CoolButton></li> );


export function randomizer() {
    return Math.random() * 100
}

export function randomizer2() {
    return Math.random() * 1000
}