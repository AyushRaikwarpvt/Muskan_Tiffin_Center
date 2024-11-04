import React from "react";
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/src/locomotive-scroll.scss';
import Landing from "./pages/Landing";
import WhyChooseUs from "./pages/WhyChooseUs";
import ServicePage from "./pages/ServicePage";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Micro_Service from "./pages/Micro_Service";
import './App.css'; 
// import { useEffect, useRef } from 'react';

function App() {
  // const scrollRef = useRef(null);

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });

  //   return () => {
  //     if (scroll) scroll.destroy();
  //   };
  // }, []);

  return (
    // <div data-scroll-container ref={scrollRef}>
    <div>
      <Landing />
      <ServicePage />
      <Micro_Service/>
      <WhyChooseUs />
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
