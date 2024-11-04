import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Lunch Tiffin Service",
    description:
      "Fresh, homemade meals delivered to your desk or doorstep – savor health, taste, and convenience every day.",
    image: "./src/assets/lunch10.png", // Ensure this path is correct
  },
  {
    title: "Nutri-meal Lunch",
    description:
      "Nutri-meal Lunch: Wholesome, delicious meals delivered fresh – fuel your day with taste, health, and convenience!",
    image: "./src/assets/healthy.png",
  },
  {
    title: "Customised Tiffin",
    description:
      "Customized Tiffin: Meals made to match your taste – fresh, healthy, and delivered right to your door or desk!",
    image: "./src/assets/costamize.png",
  },
  {
    title: "Corporate Catering",
    description:
      "Corporate Catering: Elevate your events with delicious, professionally crafted meals that impress and satisfy every guest!",
    image: "./src/assets/corporate.png",
  },
];

export default function ServicePage() {
  const serviceRefs = useRef([]);
  const headerRef = useRef(null); // Ref for the header section

  useEffect(() => {
    // Animate the header (Services title and description)
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%", 
          toggleActions: "play none none none",
        },
      }
    );

    // Animate the cards one by one
    serviceRefs.current.forEach((serviceRef, index) => {
      gsap.fromTo(
        serviceRef,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.2, // Delay for staggered effect
          scrollTrigger: {
            trigger: serviceRef,
            start: "top 85%", // Trigger when each card enters the viewport
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50" data-scroll data-scroll-speed="2">
      <div ref={headerRef} className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2 className="text-4xl font-bold mb-4">Services</motion.h2>
        <motion.p className="text-xl text-gray-600">
          We have an exceptional range of services to help you.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            ref={(el) => (serviceRefs.current[index] = el)} // Save each card reference
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            whileHover={{ y: -20 }} // Move card up on hover
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300">
                Enquire Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
