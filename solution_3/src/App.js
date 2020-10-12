import React, { useState } from "react";
import Header from "./components/Header";
import Clicker from "./components/Clicker";
import "./App.css";

export default function App() {

  const [clicker, setClicker] = useState(0)
  const plusOne = () => {
    setClicker(clicker + 1)

  }
  const minusOne = () => {
    if (clicker === 0) {
      return
    }
    setClicker(clicker - 1)
  }

  const resetHandler = () => {
    setClicker(0)
  }

  const [title] = useState("Clicker");
  return (
    <div className="App">
      <Header title={title} />
      <Clicker number={clicker}
        addNumber={plusOne}
        removeNumber={minusOne}
        resetNumber={resetHandler}
      />
    </div>
  );
}
