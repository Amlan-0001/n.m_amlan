import { motion } from "framer-motion";
import { portfolio } from "../data/portfolio";

export default function Navbar() {
  return (
    <motion.nav 
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-[#161b22]/70 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl px-4 md:px-6 py-3"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
    >

      <div className="flex justify-between items-center text-gray-200 gap-4">

        <a
          href="#hero"
          className="text-primary font-bold text-xl tracking-widest drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] cursor-pointer shrink-0 hover:text-emerald-300 transition-colors"
        >
          {portfolio.brandName}
        </a>

        <div className="flex flex-wrap justify-end gap-x-4 gap-y-2 md:gap-x-6 font-medium text-sm md:text-base">

          <a href="#about" className="hover:text-primary transition-colors hover:scale-110">About</a>
          <a href="#education" className="hover:text-primary transition-colors hover:scale-110">Education</a>
          <a href="#experience" className="hover:text-primary transition-colors hover:scale-110">Experience</a>
          <a href="#skills" className="hover:text-primary transition-colors hover:scale-110">Skills</a>
          <a href="#projects" className="hover:text-primary transition-colors hover:scale-110">Projects</a>
          <a href="#research" className="hover:text-primary transition-colors hover:scale-110">Research</a>
          <a href="#achievements" className="hover:text-primary transition-colors hover:scale-110">Achievements</a>
          <a href="#leadership" className="hover:text-primary transition-colors hover:scale-110">Leadership</a>
          <a href="#contact" className="hover:text-primary transition-colors hover:scale-110">Contact</a>

        </div>

      </div>

    </motion.nav>
  );
}
