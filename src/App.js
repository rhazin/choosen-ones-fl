import './App.css';
import Home from './components/Home';

import Header from './components/Header';

import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Utility from './components/Utility';
import RoadMap from './components/RoadMap';
import Team from './components/Team';
import About from './components/About';


function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path='utility' element={<Utility />} />
          <Route path='roadmap' element={<RoadMap />} />
          <Route path='team' element={<Team />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
