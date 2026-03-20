import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

export default function Experience() {
  const exp = portfolio.experience;

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center px-10 md:px-20 bg-transparent py-20"
    >
      <div className="w-full max-w-5xl space-y-8">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-primary drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="group p-8 bg-[#161b22]/50 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-primary/50 hover:bg-[#161b22]/80 transition-all duration-500 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-100 group-hover:text-primary transition-colors">
            {exp.title}
          </h3>

          <p className="text-gray-400 mt-3 text-lg leading-relaxed">
            {exp.intro}
          </p>

          <ul className="mt-6 space-y-3 text-gray-300 text-lg list-disc pl-6">
            {exp.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            {exp.closing}
          </p>

          {exp.certificateUrl ? (
            <a
              href={exp.certificateUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center bg-primary hover:bg-accent text-white px-10 py-3 rounded-full font-bold shadow-[0_0_15px_rgba(52,211,153,0.4)] transition-all duration-300 transform hover:scale-105"
            >
              {exp.certificateLabel || "View Certificate"}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
