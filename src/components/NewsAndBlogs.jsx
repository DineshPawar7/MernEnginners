import { motion } from "framer-motion";
import blogs from "../data/newsBlogs.json";
import Heading from "./ui/Heading";

export default function NewsAndBlogs() {
  return (
    <section className="bg-black text-white py-10 md:px-32">
      <div className="container mx-auto text-center px-4">
        <Heading
          level={1}
          variant="hero"
          tag="News & Blogs"
          firstText="Our Latest"
          secondText="News & Blogs"
          secondTextClassName="text-brand"
          className="text-white"
          tagClassname="text-textWhite"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-[#111] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-left">
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-2">
                  <span className="text-brand font-work">{blog.category}</span>
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-roboto">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4 font-work">
                  {blog.excerpt}
                </p>
                <motion.a
                  href="#"
                  className="text-black font-semibold bg-brand rounded-full p-2 font-work"
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
