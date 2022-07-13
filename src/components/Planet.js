import React from "react";

const Planet = ({ planet }) => {
  console.log(planet);
  return (
    <div>
      <img src={`./image/planet-${planet.name}.svg`} alt="{planet.name}" />
      <h2>{planet.name}</h2>
    </div>
  );
};

export default Planet;
