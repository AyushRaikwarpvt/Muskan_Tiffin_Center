import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const images = [
  "./src/assets/About_2.jpg",
  "./src/assets/About_2.jpg",
  "./src/assets/About_3.jpg",
  "./src/assets/About_4.jpg",
  "./src/assets/About_6.jpg",

//   Aap apne images yahan add karein
];

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // 3000 milliseconds = 3 seconds

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
          src={images[currentImageIndex]} // Current image based on index
          width={800}
          height={400}
          alt="Various Indian dishes"
          className="rounded-lg shadow-lg mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.p 
          className="text-center text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          We, Star Tiffin Services, situated at Malad West, Mumbai, Maharashtra, offer pre-planned meal packages that a customer can customize to his liking. It is our endeavor to make sure that you enjoy homely cooked food at very affordable rates and hassle-free packages. We offer a wide array of meal options in vegetarian and non-vegetarian sections. Each option is not just finger-licking good but highly nutritious and prepared under very hygienic conditions.
        </motion.p>
      </motion.div>
    </section>
  );
}
