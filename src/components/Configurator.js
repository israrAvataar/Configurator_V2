import React from "react";
import AmbientLight from "./AmbientLight";
import PositionInput from "./PositionInput";

import "./css/Configurator.css";

const Configurator = () => {
  return (
    <div>
      <AmbientLight />
      <PositionInput />
    </div>
  );
};

export default Configurator;
