import React, { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  colorPicker: {
    "& .react-colorful": {
      width: "500px",
    },
  },
});

const ColorPicker = () => {
  const classes = useStyles();

  useEffect(() => {
    // function handleClickOutside(event) {
    //   if (ref.current && !ref.current.contains(event.target)) {
    //     alert("You clicked outside of me!");
    //   }
    // }
    // document.addEventListener("mousedown", handleClickOutside)
  }, []);
  const [pickerPopup, setPickerPopup] = useState(false);

  const handleMouseOver = () => {
    setPickerPopup(!pickerPopup);
  };

  return (
    <div>
      Color
      <input
        type="text"
        onClick={handleMouseOver}
        onMouseLeave={handleMouseOver}
        onFocus
      />
      {pickerPopup && (
        <HexColorPicker
          className={classes.colorPicker}
          onMouseOver={handleMouseOver}
        />
      )}
    </div>
  );
};

export default ColorPicker;
