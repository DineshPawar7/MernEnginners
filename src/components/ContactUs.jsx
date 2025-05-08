import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10"
      >
        <div className="md:col-span-2">
          <p className="text-lime-400 mb-1 text-sm">— Contact Us</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-10">
            Join Us in Creating <span className="text-lime-400">Something Great</span>
          </h2>
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input type="text" placeholder="First Name *" className="bg-zinc-900 text-white p-4 rounded-md w-full" />
              <input type="text" placeholder="Last Name *" className="bg-zinc-900 text-white p-4 rounded-md w-full" />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <input type="email" placeholder="Email *" className="bg-zinc-900 text-white p-4 rounded-md w-full" />
              <input type="text" placeholder="Phone Number *" className="bg-zinc-900 text-white p-4 rounded-md w-full" />
            </div>
            <input type="text" placeholder="Subject *" className="bg-zinc-900 text-white p-4 rounded-md w-full" />
            <textarea placeholder="Message *" rows="5" className="bg-zinc-900 text-white p-4 rounded-md w-full" />
            <button
              type="submit"
              className="flex items-center gap-2 bg-lime-400 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-lime-300 transition duration-300"
            >
              Send Message
              <span className="inline-block bg-black text-lime-400 rounded-full p-2">+</span>
            </button>
          </form>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-lime-400 text-black rounded-xl p-8 shadow-xl"
        >
          <div className="mb-6">
            <h3 className="font-bold text-xl mb-2">Address</h3>
            <p className="text-sm">4517 Washington Ave, Manchester, Kentucky 39495</p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-xl mb-2">Contact</h3>
            <p className="text-sm">Phone: +0123-456-789</p>
            <p className="text-sm">Email: example@gmail.com</p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-xl mb-2">Open Time</h3>
            <p className="text-sm">Monday - Friday : 10:00 - 20:00</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2">Stay Connected</h3>
            <div className="flex gap-4 mt-2 text-lg">
              <FaFacebookF />
              <FaTwitter />
              <FaPinterestP />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
