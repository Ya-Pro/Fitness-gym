import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import {
  Home,
  About,
  Contact,
  Gallary,
  Plans,
  Trainers,
  NotFound,
} from "./pages/pages";
function App() {
  return <div className="App">
    <BrowserRouter>
      <NavBar/>
      <Routes>
       <Route index element={<Home />} ></Route>
        <Route path="about" element={ <About/>} ></Route>
        <Route path="gallary" element={ <Gallary/>} ></Route> 
        <Route path="plans" element={ <Plans/>} />
        <Route path="trainers" element={ <Trainers/>} />
        <Route path="contact" element={ <Contact/>} />
        <Route path="*" element={ <NotFound/>} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
  </div>;
}

export default App;
