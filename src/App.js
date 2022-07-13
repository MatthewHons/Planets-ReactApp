import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Planet from './Planet';

function App() {
  
  return (
      <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/planetname" element={<Planet/>}/>
              </Routes>
          </BrowserRouter>
  );
}

export default App;
