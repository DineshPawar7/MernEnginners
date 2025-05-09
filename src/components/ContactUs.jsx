import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  FaFacebookF,
  FaTwitter,
  FaGithubSquare,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Heading from "./ui/Heading";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
  .sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )

      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10"
      >
        <div className="md:col-span-2">
          <Heading
            level={1}
            variant="hero"
            tag="Contact Us"
            firstText="Join Us in Creating"
            secondText="Something Great"
            secondTextClassName="text-brand"
            className="text-white"
            tagClassname="text-textWhite"
          />

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5 mt-8"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="First Name *"
                name="first_name"
                required
                className="bg-zinc-900 text-white p-4 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Last Name *"
                name="last_name"
                required
                className="bg-zinc-900 text-white p-4 rounded-md w-full"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="email"
                placeholder="Email *"
                name="email"
                required
                className="bg-zinc-900 text-white p-4 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Phone Number *"
                name="mobile"
                required
                className="bg-zinc-900 text-white p-4 rounded-md w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Subject *"
              name="subject"
              required
              className="bg-zinc-900 text-white p-4 rounded-md w-full"
            />
            <textarea
              placeholder="Message *"
              name="message"
              rows="5"
              required
              className="bg-zinc-900 text-white p-4 rounded-md w-full"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-brand text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-lime-300 transition duration-300"
            >
              Send Message
              <span className="inline-block bg-black text-brand rounded-full p-2">
                <FaArrowRightLong />
              </span>
            </button>
          </form>
        </div>

        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-brand text-black rounded-xl p-8 shadow-xl"
        >
          <div className="mb-6">
            <h3 className="font-bold text-subTitle mb-2 font-roboto">Address</h3>
            <p className="text-secondaryText">Chhatrapati Sambhajinagar, Maharashtra, India 431116</p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-subTitle mb-2 font-roboto">Contact</h3>
            <p className="text-secondaryText font-work">Phone: +91 72640 63562</p>
            <p className="text-secondaryText font-work">Email: work.mernengineers@gmail.com</p>
          </div>
          <div className="mb-6">
            <h3 className="font-bold text-subTitle mb-2 font-roboto">Open Time</h3>
            <p className="text-secondaryText font-work">Monday - Sunday : 9:00 AM – 11:00 PM</p>
          </div>
          <div>
            <h3 className="font-bold text-subTitle mb-2 font-roboto">Stay Connected</h3>
            <div className="flex gap-4 mt-2 text-lg">
              <a href="https://www.facebook.com/profile.php?id=100091281086250" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://x.com/pawar_dine52549" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://github.com/DineshPawar7" target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithubSquare /></a>
              <a href="https://www.instagram.com/mernengineers" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.youtube.com/@DineshPawar_.07" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
