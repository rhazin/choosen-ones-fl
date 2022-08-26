import './App.css';
import Home from './components/Home';

import Header from './components/Header';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {

  return (<>
    <BrowserRouter>

      <AnimatedRoutes />
    </BrowserRouter>
  </>
  );
}

export default App;
