import { motion } from "framer-motion";

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
  return (
    <section className="py-12 px-4 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4">Services</h2>
        <p className="text-xl text-gray-600">
          We have an exceptional range of services to help you.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -40 }} // This will move the card up by 40px on hover
            className="bg-white rounded-lg shadow-lg overflow-hidden"
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
