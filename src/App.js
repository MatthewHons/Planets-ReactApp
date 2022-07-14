import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Planet from "./components/Planet";
import MenuNav from "./components/MenuNav";
import dataPlanet from "./assets/data/db.json";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <MenuNav />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={`/planet-mercury`}
          element={<Planet planet={dataPlanet.planets[0]} />}
        />
        ;
        <Route
          path={`/planet-venus`}
          element={<Planet planet={dataPlanet.planets[1]} />}
        />
        ;
        <Route
          path={`/planet-earth`}
          element={<Planet planet={dataPlanet.planets[2]} />}
        />
        ;
        <Route
          path={`/planet-mars`}
          element={<Planet planet={dataPlanet.planets[3]} />}
        />
        ;
        <Route
          path={`/planet-jupiter`}
          element={<Planet planet={dataPlanet.planets[4]} />}
        />
        ;
        <Route
          path={`/planet-saturn`}
          element={<Planet planet={dataPlanet.planets[5]} />}
        />
        ;
        <Route
          path={`/planet-uranus`}
          element={<Planet planet={dataPlanet.planets[6]} />}
        />
        ;
        <Route
          path={`/planet-neptune`}
          element={<Planet planet={dataPlanet.planets[7]} />}
        />
        ;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
