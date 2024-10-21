import { useState } from "react";
import { Utensils, Clock, DollarSign, Leaf } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./cards.css";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const [activeVideo, setActiveVideo] = useState("");

  const reasons = [
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Hygienic",
      description: "Prepared in a clean environment",
      video: "./src/assets/hygine.mp4", // Direct path from public folder
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Affordable",
      description: "Quality meals at reasonable prices",
      video: "./src/assets/Afoor.mp4",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Timely Delivery",
      description: "Always on time, every time",
      video: "./src/assets/fastD.mp4",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Fresh Ingredients",
      description: "Only the best quality produce",
      video: "./src/assets/fresh.mp4",
    },
  ];

  return (
    <section className="w-full h-full py-16 relative overflow-hidden">
      {/* Background Video */}
      {activeVideo && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          preload="none" // Performance improvement
          src={activeVideo}
          aria-hidden="true" // Accessibility improvement
        />
      )}

      <div className="container mx-auto px-4">
        <h2 className="why text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="relative top-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className=" w-60 h-60 hover:rounded-xl cursor-pointer hover:relative hover:bottom-12 text-center"
              onMouseEnter={() => setActiveVideo(item.video)} // Set video on hover
              onMouseLeave={() => setActiveVideo("")} // Clear video on mouse leave
            >
              <div className="bg-gray-200 rounded-full p-4 inline-block mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
