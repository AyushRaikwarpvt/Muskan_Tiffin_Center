import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css"; // Go up one level to the src directory


gsap.registerPlugin(ScrollTrigger);

const tiffinServices = [
  "Weekly Tiffin Service",
  "Monthly Tiffin Service",
  "Office Tiffin Service",
  "Customized Tiffin Service",
  "Tiffin Service For Senior Citizens",
  "Diet Tiffin Service",
  "Home-Made Tiffin Service",
  "Special Weekend Tiffin",
  "Student-Friendly Tiffin Plans",
];

export default function Micro_Service() {
  const serviceRefs = useRef([]);
  const observer = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('fade-in-left', 'fade-in-right'); // Remove previous classes
          entry.target.classList.add('fade-in'); // Add fade-in class
          observer.current.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    serviceRefs.current.forEach(ref => {
      if (ref) observer.current.observe(ref);
    });

    return () => {
      serviceRefs.current.forEach(ref => {
        if (ref) observer.current.unobserve(ref);
      });
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      serviceRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        stagger: 0.3,
        scrollTrigger: {
          trigger: serviceRefs.current,
          start: "top bottom",
        }
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -50 }, // Initial state
      { 
        opacity: 1, y: 0, // Final state
        duration: 1.2,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      }
    );
  }, []);

  return (
    <div className="bg-white min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        <motion.h1
        ref={headingRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-orange-800"
        >
          Best Tiffin Services in Indore
        </motion.h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiffinServices.map((service, index) => (
            <motion.div
              key={index}
              ref={el => (serviceRefs.current[index] = el)}
              className={`p-6 border border-orange-300 rounded-lg shadow-md flex items-center justify-center text-lg font-medium text-orange-700 transition-all duration-300 transform hover:-translate-y-2 hover:bg-orange-500 hover:shadow-2xl hover:text-white cursor-pointer fade-in-left`} // Initial class for left fade
            >
              <span className="mr-2 text-2xl">😋</span>
              {service}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
