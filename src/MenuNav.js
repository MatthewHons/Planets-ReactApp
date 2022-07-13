import React from 'react';
import dataPlanet from "./db.json"
import { Link } from 'react-router-dom';
const MenuNav = () => {
    return (
        <div>
            <div className='container-top'>
            <h1>The planets</h1>
        </div>
        <div className='container-list'>
            {dataPlanet.planets.map((data, key) => {
                console.log(data)
                return (
                    <div className='container-list-item'>
                        <Link to="/planetname" state={{planet:data}}><div id='circle' style={{background: data.color}}></div>{data.name}</Link>
                        <span className='arrow'>&#62;</span>
                    </div>
                    
                )

            })}
            </div>
        </div>
    );
};

export default MenuNav;