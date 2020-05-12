import React, { useState } from "react";

import {
  linearSearch,
  binarySearch,
} from "./simplePerformance";

function Graph() {
  const [sliderValue, setSliderValue] = useState("1000");
  const [inputList, setInputList] = useState([]);

  function handleSliderValue(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;

    setSliderValue(target.value);
  }

  function generateInputList() {
    const limit = parseInt(sliderValue, 10);
    const list = [];

    for (let i = 1000; i < limit + 1000; i++) {
    }

    setInputList(list);
    generatePerformanceGraphs(list);
  }

  function generatePerformanceGraphs(list) {
    const target = Math.floor(Math.random() * list.length);


  }

  return (
    <div>
      <input
        type="range"
        name="slider"
        id="slider"
        min="1000"
        max="20000"
        value={sliderValue}
        onChange={handleSliderValue}
      />
      <button onClick={generateInputList}>Generate</button>
    </div>
  );
}

export default Graph;
