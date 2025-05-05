import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import teamImage from '../assets/team.jpg'; 

const services = [
  {
    id: 1,
    title: 'MERN Stack Development',
    tags: [
      'Full-Stack JavaScript Solutions',
      'E-Commerce Platforms',
      'Custom CRM Systems',
      'Admin Dashboards'
    ],
    content:
      'Harness the power of the MERN stack (MongoDB, Express, React, Node.js) to build high-performance, scalable web applications. We specialize in e-commerce systems, dynamic dashboards, and custom enterprise solutions.',
    image: teamImage 
  },
  {
    id: 2,
    title: 'Website Development',
    tags: [
      'Corporate Websites',
      'Single-Page Applications (SPA)',
      'Backend Integration',
      'Responsive Frontend Design'
    ],
    content:
      'Delivering modern, responsive websites tailored for your business needs. We build fast-loading SPAs and full-featured websites using Angular, Vue, Laravel, and more.',
    image: teamImage 
  },
  {
    id: 3,
    title: 'SaaS Platform Development',
    tags: [
      'Cloud-Ready Architecture',
      'Subscription & Billing Systems',
      'User Role Management',
      'Scalable Multi-Tenant Solutions'
    ],
    content:
      'We craft robust SaaS platforms designed for scale. From subscription billing to user access control, our solutions are secure, maintainable, and built to grow with your business.',
    image: teamImage 
  },
  {
    id: 4,
    title: 'Website Maintenance & Support',
    tags: [
      'Security Monitoring',
      'Performance Optimization',
      'Bug Fixes & Troubleshooting',
      'Content & Feature Updates'
    ],
    content:
      'Keep your website running smoothly and securely. Our ongoing maintenance services ensure optimal performance, regular updates, and proactive support.',
    image: teamImage 
  },
  {
    id: 5,
    title: 'API Development & Integration',
    tags: [
      'RESTful or GraphQL APIs',
      'Secure data transmission',
      'Third-party service integrations',
    ],
    content:
      'Develop fast, secure, and scalable APIs tailored to your application needs. We offer REST and GraphQL API solutions with smooth third-party integrations.',
    image: teamImage
  }
];

export default function OurServices() {
  const [active, setActive] = useState(null);
  const [hasReached, setHasReached] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const element = document.getElementById('services');
      if (element && !hasReached) {
        const top = element.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.8) {
          setHasReached(true);
        }
      }
    };

    onScroll();

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [hasReached]);

  return (
    <section
      id="services"
      className="px-4 sm:px-6 md:px-16 lg:px-32 py-12 md:py-16 lg:py-20 space-y-10 md:space-y-12 bg-white"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-12 mb-10 md:mb-16">
        <div className="flex-shrink-0">
          <div className="hero-first-title inline-flex items-center mb-2">
            <div className="hero-line w-8 h-0.5 bg-gray-400 mr-3"></div>
            <p className="text-base md:text-lg font-semibold text-gray-600">Our Services</p>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mt-1">
            Discover Our <br /> Digital Solutions
          </h1>
        </div>

        <div className="flex items-start space-x-4 lg:w-2/5 lg:pt-4">
          <div className="vertical-separator hidden lg:block h-16 w-[1px] bg-gray-300 flex-shrink-0"></div>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            We deliver web solutions that empower businesses, specializing in powerful apps, seamless integrations, and scalable platforms.
          </p>
        </div>
      </div>

      <div className="space-y-6 md:space-y-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: hasReached ? 1 : 0, y: hasReached ? 0 : 50 }}
            transition={{ delay: hasReached ? index * 0.15 : 0, duration: 0.5 }} 
            className="bg-gray-50 rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 md:gap-6">
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-gray-800 flex items-baseline">
                  <span className="text-lime-500 font-bold text-lg sm:text-xl md:text-2xl mr-2">
                    {service.id < 10 ? `0${service.id}` : service.id}.
                  </span>
                  <span>{service.title}</span>
                </h2>
                <div className="flex flex-wrap gap-2 mb-4 lg:mb-0">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-white text-gray-700 py-1 px-3 rounded-full text-xs sm:text-sm border border-gray-300 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActive(prev => (prev === service.id ? null : service.id))}
                className="bg-lime-500 text-black rounded-full px-5 py-2 sm:px-6 sm:py-2.5 flex items-center gap-2 hover:bg-lime-600 transition-all duration-300 group flex-shrink-0 self-start lg:self-center" // Adjusted alignment
              >
                <span className="text-sm sm:text-base font-medium">Learn More</span>
                <motion.span
                  animate={{ rotate: active === service.id ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 sm:w-6 sm:h-6 bg-black text-white flex items-center justify-center rounded-full text-sm group-hover:scale-110 transition-transform duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                   </svg>
                </motion.span>
              </button>
            </div>

            <AnimatePresence>
              {active === service.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: 'auto', opacity: 1, marginTop: '1.5rem' }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row gap-6 items-start pt-2">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed lg:w-3/5 xl:w-2/3 lg:pr-6">
                      {service.content}
                    </p>
                    <img
                      src={service.image}
                      alt={`${service.title} visual representation`}
                      className="rounded-xl w-full max-w-md lg:w-2/5 xl:w-1/3 object-cover self-center lg:self-start shadow-md mt-4 lg:mt-0" // Responsive width and margin
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}