import React, { useState } from "react";
import useStore from "../Stores/SkuConfigStore";

const ToggleInteract = ({ name }) => {
  const [toggle, setToggle] = useState(true);

  const data = useStore((state) => {
    return state;
  });

  const updateToggle = useStore((state) => {
    return state.changeEnabledDisabled;
  });

  const handleToggleChange = () => {
    setToggle(!toggle);
    updateToggle(name);
  };

  console.log(data);
  return (
    <div>
      <input type="checkbox" value={toggle} onChange={handleToggleChange} />{" "}
      Disable
    </div>
  );
};

export default ToggleInteract;
