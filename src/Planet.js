import React from 'react';
import { useLocation } from 'react-router-dom';

const Planet = () => {
    const location = useLocation();
    const {planet} = location.state;
    console.log(planet);
    return (
        <div>
            <h2>{planet.name}</h2>
        </div>
    );
};

export default Planet;