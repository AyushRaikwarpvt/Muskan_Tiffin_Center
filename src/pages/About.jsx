import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "./src/assets/About_2.jpg",
  "./src/assets/About_2.jpg",
  "./src/assets/About_3.jpg",
  "./src/assets/About_4.jpg",
  "./src/assets/About_6.jpg",
  // Add more images as needed
];

export default function About() {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const headingRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // GSAP ScrollTrigger for image
  useEffect(() => {
    const imageAnimation = gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%", // Adjust trigger point if necessary
          toggleActions: "play none none none", // Animation only plays once
        },
      }
    );
    // Cleanup on component unmount
    return () => {
      imageAnimation.scrollTrigger.kill();
    };
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

  // GSAP ScrollTrigger for text
  useEffect(() => {
    const textAnimation = gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%", // Adjust trigger point for text
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      textAnimation.scrollTrigger.kill();
    };
  }, []);

  // Interval for changing images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.img
          ref={imageRef}
          src={images[currentImageIndex]} // Current image based on index
          width={800}
          height={400}
          alt="Various Indian dishes"
          className="rounded-lg shadow-lg mb-8"
        />
        <motion.p
          ref={textRef}
          className="text-center text-gray-700 leading-relaxed"
        >
          We, Star Tiffin Services, situated at Malad West, Mumbai, Maharashtra, offer pre-planned meal packages that a customer can customize to his liking. It is our endeavor to make sure that you enjoy homely cooked food at very affordable rates and hassle-free packages. We offer a wide array of meal options in vegetarian and non-vegetarian sections. Each option is not just finger-licking good but highly nutritious and prepared under very hygienic conditions.
        </motion.p>
      </motion.div>
    </section>
  );
}
