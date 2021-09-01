import React, { useState } from "react";

const PositionInput = () => {
  const [xyz, setXyz] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const handlePositionInput = (e) => {
    const inputName = e.target.name;
    switch (inputName) {
      default: {
        return { ...xyz };
      }
      case "x": {
        setXyz({ ...xyz, x: e.target.value });
        break;
      }
      case "y": {
        setXyz({ ...xyz, y: e.target.value });
        break;
      }
      case "z": {
        setXyz({ ...xyz, z: e.target.value });
        break;
      }
    }
    return undefined;
  };

  return (
    <div>
      Position Input
      <input
        type="text"
        value={xyz.x}
        onChange={handlePositionInput}
        name="x"
      />
      <input
        type="text"
        value={xyz.y}
        onChange={handlePositionInput}
        name="y"
      />
      <input
        type="text"
        value={xyz.z}
        onChange={handlePositionInput}
        name="z"
      />
    </div>
  );
};

export default PositionInput;
