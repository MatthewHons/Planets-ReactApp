import React from "react";
const Planet = ({ planet }) => {
 
  return (
    <div>
      <div className='navbar-border'>
            <div className='navbar'>
            <button style={{ borderBottom: '2px solid', padding:5, borderColor: planet.color  }}>overview</button>
            </div>
      </div>
      <img src={`./image/planet-${planet.name}.svg`} alt="{planet.name}" />
      <h2>{planet.name}</h2>
      <p className="text">{planet.overview.content}</p>
      <p className="source">Source : <a className="link" href={`${planet.overview.source}`}>Wikipedia</a></p>
      <table class="tg">
        <tr>
            <td class="tg-item"><span className="table-title">Rotation time</span> <span className="table-data">{planet.rotation}</span></td>
        </tr>
        <tr>
            <td class="tg-item"><span className="table-title">Revolution time</span> <span className="table-data">{planet.revolution}</span></td>
        </tr>
        <tr>
            <td class="tg-item"><span className="table-title">Radius</span> <span className="table-data">{planet.radius}</span></td>
        </tr>
        <tr>
            <td class="tg-item"><span className="table-title">Average temp.</span> <span className="table-data">{planet.temperature}</span></td>
        </tr>
      </table>
    </div>
  );
};

export default Planet;
