import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import HeroMove from './ui/HeroMove';

const testimonials = [
  {
    name: "Dianne Russell",
    role: "Owner, Architecture Studio",
    rating: 5,
    review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "John Doe",
    role: "Founder, Tech Innovators",
    rating: 5,
    review: "I highly recommend this service. It was a game-changer for my business!",
    image: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Sarah Williams",
    role: "CEO, Creative Solutions",
    rating: 4,
    review: "Great work, I was really impressed with the result. Highly professional!",
    image: "https://i.pravatar.cc/150?img=34",
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
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <>
    <section className="bg-white text-black p-10 text-center font-body">
      <h4 className="uppercase text-neon mb-2">Clients Testimonials</h4>
      <h2 className="text-3xl font-bold mb-10">
        Testimonials that <br /> Speak to My Results
      </h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-3xl mx-auto bg-gray-100 rounded-xl p-8 flex flex-col lg:flex-row items-center gap-6 shadow-xl"
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
            {'⭐'.repeat(testimonials[currentTestimonial].rating).split('').map((star, i) => (
              <span key={i}>{star}</span>
            ))}
            <span className="font-semibold ml-2">{testimonials[currentTestimonial].rating}.0</span>
          </div>
          <p className="text-sm text-gray-700 mb-4">
            {testimonials[currentTestimonial].review}
          </p>
          <p className="font-bold">{testimonials[currentTestimonial].name}</p>
          <p className="text-sm text-gray-500">{testimonials[currentTestimonial].role}</p>
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
