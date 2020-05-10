import React, { useState } from "react";

function Graph() {
  const [sliderValue, setSliderValue] = useState("0");

  function handleSliderValue(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;

    setSliderValue(target.value);
  }

  return (
    <div>
      <input
        type="range"
        name="slider"
        id="slider"
        min="0"
        max="100000"
        value={sliderValue}
        onChange={handleSliderValue}
      />
    </div>
  );
}

export default Graph;
