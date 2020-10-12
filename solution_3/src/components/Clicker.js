import React from "react";
import './Clicker.css'


export default function Clicker({ number, addNumber, removeNumber, resetNumber }) {
    return (
        <div className="counter">
            <h3>{number}</h3>
            <div className="buttons">
                <button className="plus" onClick={addNumber}>+</button>
                <button className="minus" onClick={removeNumber}>-</button>
                <button className="reset" onClick={resetNumber}>reset</button>
            </div>
        </div>
    )
}