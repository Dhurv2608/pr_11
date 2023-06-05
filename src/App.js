import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

import Layout from './Pages/Layout/Layout';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
         <Route  element={<Layout />}>
             <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
         </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
