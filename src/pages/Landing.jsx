import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, Home } from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "./src/assets/Landing_1.png",
    "./src/assets/lunch4.jpg",
    "./src/assets/lunch10.png",
  ];

  const heroTextRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(heroTextRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // When the top of the container reaches 80% of the viewport
        toggleActions: "play none none none", // Plays animation on enter
      },
    });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    gsap.fromTo(
      heroTextRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: -50, duration: 2 }
    );
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen" data-scroll data-scroll-speed="1">
      <header className="bg-white shadow-sm relative">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Home className="h-8 w-8 text-orange-500" />
            <span className="text-gray-600 font-semibold">
              Muskan Tiffin Center
            </span>
          </div>

          <nav className="hidden md:flex space-x-4">
            {[
              // Add menu items if needed
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-gray-800"
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center min-h-[80vh]">
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left" ref={heroTextRef}>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Home Cooked Food
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            Tiffin Services
          </h2>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
            Enquire Now
          </button>
        </div>

        <div className="md:w-1/2 h-[300px] md:h-[400px] flex items-center justify-center">
          <img
            src={images[currentImageIndex]}
            alt="Tiffin food items"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </main>
    </div>
  );
}
