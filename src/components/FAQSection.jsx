import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import HeroMove from './ui/HeroMove';

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
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
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
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const faqData = [
    {
      question: 'What services does your digital agency offer?',
      answer: 'We offer a wide range of digital marketing services including SEO, social media marketing, content creation, PPC advertising, and web development.',
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We work with clients across various industries, including e-commerce, healthcare, technology, and finance. Our diverse experience allows us to tailor strategies to specific business needs.',
    },
    {
      question: 'What is your process for working with clients?',
      answer: 'Our process involves an initial consultation, strategy development, implementation, regular reporting, and ongoing optimization to ensure client goals are met.',
    },
    {
      question: 'What platforms and technologies do you specialize in?',
      answer: 'We specialize in platforms like Google Ads, Facebook Ads, Instagram, LinkedIn, WordPress, Shopify, and utilize various analytics and marketing automation tools.',
    },
    {
      question: 'How can your agency help my business grow online?',
      answer: 'We drive online growth by increasing visibility, attracting targeted traffic, improving user engagement, generating leads, and ultimately boosting sales and revenue.',
    },
    {
      question: 'How do you handle communication and feedback during a project?',
      answer: 'We maintain transparent and regular communication through email, calls, and project management tools. We also value client feedback and incorporate it to ensure the project aligns with their vision.',
    },
  ];

  return (
    <>
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Questions? Look here.</h2>
        <p className="mt-2 text-gray-500 text-sm sm:text-base">Frequently Asked Questions</p>
      </div>
      <div className="max-w-4xl mx-auto">
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
