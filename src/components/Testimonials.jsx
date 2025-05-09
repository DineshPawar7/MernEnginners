import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import HeroMove from "./ui/HeroMove";
import Heading from "./ui/Heading";

const testimonials = [
  {
    name: "Alex",
    role: "Owner of CRM",
    rating: 5,
    review:
      "Partnering with this team elevated our CRM platform's performance beyond expectations.",
    image: "https://mernengineers.netlify.app/assets/crm-cmED4qud.png",
  },
  {
    name: "Empty Review",
    role: "Empty Review",
    rating: 0,
    review:
      "Become Our Client and Enjoy the Privilege of Sharing Your Testimonials Here",
    image:
      "https://i.pinimg.com/736x/c8/91/ef/c891ef6e76121c27aab6483ec7e0757a.jpg",
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <>
      <section className="bg-white text-black p-10 text-center font-body">
        <Heading
          level={1}
          variant="hero"
          tag="Clients Testimonials"
          firstText="Testimonials That"
          secondText="Make Us Proud"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-3xl mx-auto bg-gray-100 rounded-xl p-8 flex flex-col lg:flex-row items-center gap-6 mt-8 shadow-xl"
        >
          <div className="relative">
            <img
              src={testimonials[currentTestimonial].image}
              alt="Client"
              className="w-32 h-32 rounded-full"
            />
            <span className="absolute top-0 right-0 bg-neon w-8 h-8 flex items-center justify-center text-black text-xl rounded-full">
              “
            </span>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2 mb-2">
              {Array(testimonials[currentTestimonial].rating)
                .fill(0)
                .map((_, i) => (
                  <AiFillStar key={i} className="text-brand" />
                ))}
              <span className="font-semibold ml-2">
                {testimonials[currentTestimonial].rating}.0
              </span>
            </div>

            <p className="text-sm text-gray-700 mb-4">
              {testimonials[currentTestimonial].review}
            </p>
            <p className="font-bold">{testimonials[currentTestimonial].name}</p>
            <p className="text-sm text-gray-500">
              {testimonials[currentTestimonial].role}
            </p>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-[-30px] top-1/2 -translate-y-1/2 bg-black text-white w-10 h-10 rounded-full"
          >
            &#8592;
          </button>

          <button
            onClick={goToNext}
            className="absolute right-[-30px] top-1/2 -translate-y-1/2 bg-neon text-black w-10 h-10 rounded-full"
          >
            &#8594;
          </button>
        </motion.div>
      </section>

      <HeroMove />
    </>
  );
}
