import React from "react";
import Configurator from "./components/Configurator";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div id="renderer">Renderer</div>
      <div id="configurator">
        <Configurator />
      </div>
    </div>
  );
}

export default App;
