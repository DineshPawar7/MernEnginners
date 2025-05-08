import { motion } from 'framer-motion';

const blogs = [
  {
    title: "Unveiling the Secrets of Successful Mobile App Development",
    category: "Mobile App Development",
    date: "21 April 2024",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    image: "https://www.m9.news/wp-content/uploads/2025/05/salman-khan-768x576.jpg",
  },
  {
    title: "From Pixels to Perfection: The Website Development Process",
    category: "Website Development",
    date: "20 April 2024",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    image: "https://www.m9.news/wp-content/uploads/2025/05/salman-khan-768x576.jpg",
  },
  {
    title: "The Evolution of UX/UI: Trends Shaping the Future of Design",
    category: "UX/UI Design",
    date: "19 April 2024",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
    image: "https://www.m9.news/wp-content/uploads/2025/05/salman-khan-768x576.jpg",
  },
  
];

export default function NewsAndBlogs() {
  return (
    <section className="bg-black text-white py-10 md:px-32">
      <div className="container mx-auto text-center px-4">
        <h4 className="text-green-400 uppercase mb-2">News & Blogs</h4>
        <h2 className="text-3xl font-bold mb-8">Our Latest News & Blogs</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-left">
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-2">
                  <span className="text-green-400">{blog.category}</span>
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{blog.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{blog.excerpt}</p>
                <motion.a
                  href="#"
                  className="text-green-400 font-semibold hover:text-green-600"
                  whileHover={{ scale: 1.05 }}
                >
                  Read More →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
