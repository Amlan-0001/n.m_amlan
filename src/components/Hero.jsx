import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { portfolio } from "../data/portfolio";

export default function Hero() {
  const { hero, fullName, resumeUrl, social, heroImage } = portfolio;

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 md:px-20 relative bg-transparent overflow-hidden pt-24"
    >

      {/* LEFT */}
      <motion.div 
        className="max-w-2xl text-center md:text-left z-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-gray-400 text-lg uppercase tracking-widest font-medium">{hero.greeting}</p>

        <h1 className="text-6xl md:text-8xl font-extrabold text-primary mt-2 drop-shadow-[0_0_20px_rgba(52,211,153,0.4)]">
          {fullName}
        </h1>

        <TypeAnimation
          sequence={hero.roles}
          wrapper="span"
          speed={45}
          deletionSpeed={65}
          className="text-xl md:text-2xl text-primary block mt-4 min-h-[2.75rem] font-semibold drop-shadow-[0_0_12px_rgba(52,211,153,0.35)]"
          repeat={Infinity}
        />

        <p className="mt-8 text-lg text-gray-400 max-w-2xl leading-relaxed">
          {hero.tagline}
        </p>

        {hero.showQuote && hero.quote ? (
          <p
            lang="sa"
            className="quote-devanagari mt-6 text-base md:text-lg text-gray-300/90 max-w-2xl mx-auto leading-relaxed text-center italic"
          >
            {hero.quote}
          </p>
        ) : null}

        <div className="mt-10 flex flex-col items-center md:items-start gap-8">
          {resumeUrl ? (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-primary hover:bg-accent text-white px-10 py-3 rounded-full font-bold shadow-[0_0_15px_rgba(52,211,153,0.4)] transition-all duration-300 transform hover:scale-105"
            >
              Resume
            </a>
          ) : null}

          <div className="flex gap-6 items-center">
            <a href={social.github} target="_blank" rel="noreferrer" className="text-primary hover:text-white transition-all transform hover:scale-125 drop-shadow-[0_0_8px_rgba(52,211,153,0.35)]" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="text-primary hover:text-white transition-all transform hover:scale-125 drop-shadow-[0_0_8px_rgba(52,211,153,0.35)]" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            {social.instagram ? (
              <a href={social.instagram} target="_blank" rel="noreferrer" className="text-primary hover:text-white transition-all transform hover:scale-125 drop-shadow-[0_0_8px_rgba(52,211,153,0.35)]" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
            ) : null}
            {social.x ? (
              <a href={social.x} target="_blank" rel="noreferrer" className="text-primary hover:text-white transition-all transform hover:scale-125 drop-shadow-[0_0_8px_rgba(52,211,153,0.35)]" aria-label="X">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.956l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
              </a>
            ) : null}
          </div>
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div 
        className="relative mt-10 md:mt-0 z-10"
        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-primary blur-[100px] opacity-20 rounded-full animate-pulse scale-110"></div>
        <div className="relative w-72 h-72 md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-4 border-primary shadow-glow-lg ring-2 ring-primary/35">
          <img
            src={heroImage}
            className="w-full h-full object-cover object-top object-[center_8%] scale-100 md:object-[center_5%] md:scale-[1.02] filter contrast-110"
            alt={fullName}
          />
        </div>
      </motion.div>

    </section>
  );
}
