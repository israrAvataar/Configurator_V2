import create from "zustand";

const data = require("../translatedSkuConfig.json");

console.log(data);

const useStore = create((set) => ({
  config: data,
  enabledDisabled: {
    ambientLight: true,
    directionalLight: true,
  },
  changeIntensity: (intensityInput) => {
    set((state) => {
      return {
        ...state,
        config: {
          ...state.config,
          ambientLight: {
            ...state.config.ambientLight,
            intensity: intensityInput,
          },
        },
      };
    });
  },
  changeEnabledDisabled: (componenetName) => {
    if (componenetName === "ambientLight") {
      set((state) => {
        return {
          ...state,
          enabledDisabled: {
            ...state.enabledDisabled,
            ambientLight: !state.enabledDisabled.ambientLight,
          },
        };
      });
    }
  },
}));

export default useStore;
