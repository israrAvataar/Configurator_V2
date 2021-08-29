import React from "react";
import Slider from "./Slider";
import ColorPicker from "./ColorPicker";

function AmbientLight() {
  return (
    <div>
      Ambient Light
      <ColorPicker />
      <Slider />
    </div>
  );
}

export default AmbientLight;
