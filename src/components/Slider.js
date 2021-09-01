import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import useStore from "../Stores/SkuConfigStore";

const useStyles = makeStyles({
  root: {
    width: "50%",
    marginTop: "50px",
    marginLeft: "10px",
  },
});

const IntensitySlider = () => {
  // const [intensitySlider, setIntensitySlider] = useState(1)
  const classes = useStyles();

  const intensity = useStore((state) => {
    return state.config.ambientLight.intensity;
  });

  const updateSlider = useStore((state) => {
    return state.changeIntensity;
  });

  //   const data = useStore((state) => {
  //     return state.config;
  //   });

  const handleSliderChange = (e, newValue) => {
    //   setIntensityState(newValue);
    updateSlider(newValue);
  };

  return (
    <div>
      <Slider
        onChange={handleSliderChange}
        value={intensity}
        className={classes.root}
        aria-labelledby="discrete-slider-always"
        step={1}
        valueLabelDisplay="on"
        min={0}
        max={5}
      />
    </div>
  );
};

export default IntensitySlider;
