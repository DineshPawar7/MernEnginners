import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeroMove from "./ui/HeroMove";
import Heading from "./ui/Heading";

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="mb-4 border border-gray-300 rounded-xl overflow-hidden shadow-md">
      <button
        className="w-full flex justify-between items-center px-5 py-4 text-left text-base sm:text-lg font-medium bg-white hover:bg-gray-50 transition-colors"
        onClick={toggle}
      >
        <span className="text-gray-800">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown className="w-6 h-6 text-green-600" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="px-5 py-4 bg-gray-50 text-sm sm:text-base text-gray-700"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqData = [
    {
      question: "What services does your MERN development agency offer?",
      answer:
        "We specialize in full-stack web development using the MERN stack (MongoDB, Express.js, React, and Node.js). Our services include custom web application development, API development, e-commerce solutions, and frontend/backend development.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We work with clients across various industries, including e-commerce, education, healthcare, fintech, and startups. Our experience with diverse domains enables us to build tailored, scalable, and robust solutions.",
    },
    {
      question: "What is your process for working with clients?",
      answer:
        "Our process includes understanding your business needs, designing a solution, developing the application with the latest technologies, testing, deploying, and providing ongoing maintenance and support to ensure long-term success.",
    },
    {
      question: "What platforms and technologies do you specialize in?",
      answer:
        "We specialize in the MERN stack (MongoDB, Express.js, React, Node.js), as well as related technologies like Redux, GraphQL, WebSockets, REST APIs, and cloud platforms like AWS and Heroku for deployment.",
    },
    {
      question: "How can your agency help my business grow online?",
      answer:
        "We help businesses scale by building high-performance web applications that are user-friendly, secure, and optimized for speed. Our solutions aim to enhance your online presence, improve customer engagement, and drive business growth.",
    },
    {
      question:
        "How do you handle communication and feedback during a project?",
      answer:
        "We prioritize clear and continuous communication throughout the project via email, calls, and project management tools like Jira or Trello. We value client feedback and ensure that the project evolves based on your requirements and feedback.",
    },
  ];

  return (
    <>
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Heading
            level={1}
            variant="hero"
            tag="FAQs"
            firstText="Questions? Look here"
          />
        </div>
        <div className="max-w-4xl mx-auto font-work">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </section>

      <HeroMove />
    </>
  );
};

export default FAQSection;
