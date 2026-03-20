import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center px-10 md:px-20 bg-transparent py-12 overflow-hidden">

      <div className="w-full max-w-[90rem]">

        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <p className="mt-5 text-gray-400 text-base md:text-lg max-w-3xl">
          {portfolio.skillsIntro}
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 xl:gap-3">
          {portfolio.skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="group p-3 md:p-4 bg-[#161b22]/50 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-primary/50 hover:bg-[#161b22]/80 transition-all duration-500 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base md:text-lg font-bold text-gray-100 group-hover:text-primary transition-colors leading-snug">
                {cat.title}
              </h3>

              <div className="mt-2 flex flex-wrap gap-1.5 content-start">
                {cat.items.map((item) => (
                  <motion.span
                    key={item}
                    className="inline-flex items-center px-2 py-1 text-[11px] md:text-xs leading-tight rounded-full bg-[#0b0f19]/40 border border-white/10 text-gray-200 hover:border-primary/50 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.15 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}
