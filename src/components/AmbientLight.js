import React from "react";
import Slider from "./Slider";
import ColorPicker from "./ColorPicker";
import ToggleInteract from "./ToggleInteract";

function AmbientLight() {
  return (
    <div>
      Ambient Light
      <ToggleInteract name="ambientLight" />
      <ColorPicker />
      <Slider />
    </div>
  );
}

export default AmbientLight;
