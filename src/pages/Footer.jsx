import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const footerLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Contact', href: '#' },
];

const socialMediaLinks = [
  { icon: <FaFacebook />, href: 'https://facebook.com' },
  { icon: <FaTwitter />, href: 'https://twitter.com' },
  { icon: <FaInstagram />, href: 'https://instagram.com' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/9098559955' }, // WhatsApp link with contact number
];



export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom", // Adjust this according to when you want it to start animating
          end: "top center",
          scrub: 1,
        },
        duration: 1.5,
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="bg-white text-black py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <motion.h2
            className="text-xl font-bold mb-2 md:mb-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
           Muskan Tiffin Services | center
          </motion.h2>
          <div className="flex space-x-4">
            {footerLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="hover:text-gray-600 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          {socialMediaLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="text-xl hover:text-gray-600 transition-transform duration-300 transform hover:scale-125"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        <motion.p
          className="text-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          © {new Date().getFullYear()}  Muskan Tiffin Services | center. All Rights Reserved.
        </motion.p>
        <div className="text-center text-gray-600 mt-4">
          <p>Contact: Diviyanshu Verma, Ritesh Verma</p>
          <p>Phone: 9098559955</p>
          <p>Address: Ahliya Paltan, Sadar Bazar, Indore, MP</p>
        </div>
      </div>
    </footer>
  );
}
