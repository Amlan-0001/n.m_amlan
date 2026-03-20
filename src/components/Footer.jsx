import { portfolio } from "../data/portfolio";

export default function Footer() {
  const year = portfolio.footerYear ?? new Date().getFullYear();
  const { fullName, social } = portfolio;

  const sloka = portfolio.footerSloka;

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0b0f19]/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-6">
        {sloka ? (
          <p
            lang="sa"
            className="quote-devanagari text-center text-sm md:text-base text-emerald-100/75 italic whitespace-pre-line leading-relaxed max-w-2xl mx-auto [text-shadow:0_0_24px_rgba(52,211,153,0.25),0_0_48px_rgba(16,185,129,0.12)]"
          >
            {sloka}
          </p>
        ) : null}

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-400">
            © {year} {fullName}. All rights reserved.
          </p>

          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-white transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            {social.instagram ? (
              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
            ) : null}
            {social.x ? (
              <a
                href={social.x}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-white transition-colors"
                aria-label="X"
              >
                X
              </a>
            ) : null}
          </div>
        </div>

      </div>
    </footer>
  );
}
