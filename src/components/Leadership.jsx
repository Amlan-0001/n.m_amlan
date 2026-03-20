import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="min-h-screen flex items-center px-10 md:px-20 bg-transparent py-20 overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-primary mb-16 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Leadership
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 mt-12 text-left">
          {portfolio.leadership.map((item, i) => (
            <motion.div
              key={i}
              className="group p-10 bg-[#161b22]/50 backdrop-blur-xl rounded-3xl border border-white/5 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)] cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-100 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 mt-4 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
