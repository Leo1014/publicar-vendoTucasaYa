import React from "react";
import SliderHouse from "./components/Slider/Slider";
import CasaSoacha from "./components/casaSoacha/CasaSoacha";
import NavBar from "./components/NavBar/NavBar"
import Landing from './components/Landing/Landing'
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";



function App() {
  
  return (
    <div>
      <NavBar />
      <CasaSoacha />
      <SliderHouse />
      <Banner/>
      <Landing />
      <Footer />
    </div>
  )
}

export default App;
