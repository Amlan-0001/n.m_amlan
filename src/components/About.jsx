import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-10 md:px-20 bg-transparent py-20">

      <div className="max-w-5xl">

        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-primary relative inline-block drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
          <span className="block h-1.5 w-24 bg-gradient-to-r from-primary to-transparent mt-3 rounded-full"></span>
        </motion.h2>

        {portfolio.about
          .split(/\n\n+/)
          .map((paragraph, i) => (
            <motion.p
              key={i}
              className={`text-xl md:text-2xl text-gray-300 leading-relaxed max-w-6xl ${i === 0 ? "mt-10" : "mt-6"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              viewport={{ once: true }}
            >
              {paragraph.trim()}
            </motion.p>
          ))}

      </div>

    </section>
  );
}
