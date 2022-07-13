import React from 'react';
import { useLocation } from 'react-router-dom';
import MenuNav from './MenuNav';


const Planet = () => {
    const location = useLocation();
    const {planet} = location.state;
    console.log(planet);
    return (
        
        <div>
            <MenuNav />
            <img src={`./image/planet-${planet.name}.svg`} alt="{planet.name}" />
            <h2>{planet.name}</h2>
        </div>
    );
};

export default Planet;