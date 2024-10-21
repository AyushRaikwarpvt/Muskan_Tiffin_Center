import React from "react";
import Landing from "./pages/Landing";
import WhyChooseUs from "./pages/WhyChooseUs";
import ServicePage from "./pages/ServicePage";
import About from "./pages/About";
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
      <Landing />
  
      <ServicePage />
      <WhyChooseUs />
      <About/>
      <Footer/>
  
    </div>
  );
}

export default App;