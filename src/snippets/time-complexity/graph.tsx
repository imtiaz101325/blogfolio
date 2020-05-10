import React, { useState } from "react";

import {
  linearSearch,
  binarySearch,
  generateRandomArray,
  mapFunctionPerformanceToInputs,
} from "./simplePerformance";

function Graph() {
  const [sliderValue, setSliderValue] = useState("10000");
  const [inputList, setInputList] = useState([]);

  function handleSliderValue(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;

    setSliderValue(target.value);
  }

  function generateInputList() {
    const limit = parseInt(sliderValue, 10);
    const list = [];

    for (let i = 0; i < limit; i++) {
      list.push(generateRandomArray(i, true));
    }

    setInputList(list);
    generatePerformanceGraphs(list);
  }

  function generatePerformanceGraphs(list) {
    const target = Math.floor(Math.random() * list.length);

    const linearSearchData = mapFunctionPerformanceToInputs(
      linearSearch,
      list,
      target
    );

    const binarySearchData = mapFunctionPerformanceToInputs(
      binarySearch,
      list,
      target
    );

    console.log(linearSearchData);
    console.log(binarySearchData);
  }

  return (
    <div>
      <input
        type="range"
        name="slider"
        id="slider"
        min="10000"
        max="20000"
        value={sliderValue}
        onChange={handleSliderValue}
      />
      <button onClick={generateInputList}>Generate</button>
    </div>
  );
}

export default Graph;
