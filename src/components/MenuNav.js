import React, { useState } from "react";
import dataPlanet from "./../assets/data/db.json";
import { Link } from "react-router-dom";
import { fallDown as Menu } from "react-burger-menu";
const MenuNav = () => {
  const [isMenuOpen, handleMenu] = useState(false);
  const handleCloseMenu = () => {
    handleMenu(false);
  };
  const handleStateChange = (state) => {
    handleMenu(state.isOpen);
  };
  return (
    <div>
      <div className="container-top">
        <h1>The planets</h1>
      </div>
      <Menu width={375}  isOpen={isMenuOpen} onStateChange={handleStateChange}>
        <div className="container-list">
          {dataPlanet.planets.map((data, key) => {
            return (
              <div key={key} className="container-list-item">
                <Link className="item" to={`/planet-${data.name}`} state={{ planet: data }} onClick={() => handleCloseMenu()}>
                  <div
                    id="circle"
                    style={{ background: data.color }}
                  ></div>
                  {data.name}
                </Link>
                <span className="arrow">&#62;</span>
              </div>
            );
          })}
        </div>
      </Menu>
    </div>
  );
};

export default MenuNav;
