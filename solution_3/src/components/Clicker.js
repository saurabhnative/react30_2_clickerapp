import React from "react";
import './Clicker.css'


export default function Clicker({ number, addNumber, removeNumber, resetNumber }) {
    return (
        <div className="counter">
            <h3>{number}</h3>
            <button onClick={addNumber}>+</button>
            <button onClick={removeNumber}>-</button>
            <button onClick={resetNumber}>reset</button>
        </div>
    )
}