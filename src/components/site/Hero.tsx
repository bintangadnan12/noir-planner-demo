import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { BRAND, waLink } from "./data";

const VIDEOS = [
  "https://videos.pexels.com/video-files/4066419/4066419-hd_1920_1080_25fps.mp4",
  "https://videos.pexels.com/video-files/3048526/3048526-hd_1920_1080_25fps.mp4",
];

export function Hero() {
  const lineRef     = useRef<HTMLSpanElement>(null);
  const eyebrowRef  = useRef<HTMLSpanElement>(null);
  const titleRef    = useRef<HTMLHeadingElement>(null);
  const descRef     = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(lineRef.current,     { scaleX: 0, transformOrigin: "center" }, { scaleX: 1, duration: 1.0 }, 0.2)
      .fromTo(eyebrowRef.current,  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.5)
      .fromTo(titleRef.current,    { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.1 }, 0.7)
      .fromTo(descRef.current,     { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 1.0)
      .fromTo(ctaRef.current,      { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, 1.2)
      .fromTo(statsRef.current,    { opacity: 0 },        { opacity: 1, duration: 0.8 },       1.4);
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[700px] w-full overflow-hidden flex flex-col items-center justify-center text-center">

      <video className="video-hero" autoPlay muted loop playsInline poster={BRAND.heroImg}>
        {VIDEOS.map((v) => <source key={v} src={v} type="video/mp4" />)}
      </video>

      {/* Very dark overlay — obsidian */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(to bottom, rgba(8,6,4,0.75) 0%, rgba(8,6,4,0.55) 40%, rgba(8,6,4,0.82) 100%)"
      }} />

      <div className="relative z-10 container-x flex flex-col items-center px-6">
        {/* Gold accent line */}
        <span ref={lineRef} className="block h-[1px] w-20 mb-8 mx-auto" style={{ background: "#D4A843", opacity: 0 }} />

        <span ref={eyebrowRef} className="eyebrow mb-6" style={{ color: "#D4A843", opacity: 0 }}>
          {BRAND.tagline}
        </span>

        <h1 ref={titleRef} className="font-display text-white text-[48px] leading-[1.0] md:text-[78px] lg:text-[96px] max-w-4xl" style={{ opacity: 0 }}>
          Keistimewaan
          <br />
          <em style={{ color: "#D4A843" }}>Tanpa</em> Kompromi
        </h1>

        {/* Gold separator */}
        <span className="block h-[1px] w-16 mt-8 mb-8 mx-auto" style={{ background: "rgba(212,168,67,0.4)" }} />

        <p ref={descRef} className="max-w-xl text-white/70 text-base md:text-lg leading-relaxed" style={{ opacity: 0 }}>
          {BRAND.heroDesc}
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ opacity: 0 }}>
          <a
            href={waLink(`Halo ${BRAND.nameShort}, saya tertarik dengan layanan wedding planner eksklusif Anda.`)}
            target="_blank" rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gold text-bg px-9 py-4 text-[0.65rem] tracking-[0.25em] uppercase inline-flex items-center gap-3 font-bold transition-colors"
          >
            <span className="absolute inset-0 bg-ink translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative group-hover:text-gold transition-colors">Mulai Konsultasi</span>
            <span className="relative group-hover:text-gold transition-colors">→</span>
          </a>
          <a href="#galeri"
            className="group relative overflow-hidden border text-gold px-9 py-4 text-[0.65rem] tracking-[0.25em] uppercase inline-flex items-center gap-3"
            style={{ borderColor: "rgba(212,168,67,0.5)" }}
          >
            <span className="absolute inset-0 bg-gold translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative group-hover:text-bg transition-colors">Lihat Portfolio</span>
          </a>
        </div>

        <div ref={statsRef} className="mt-14 flex items-center gap-8 md:gap-12" style={{ opacity: 0, color: "rgba(240,234,224,0.55)" }}>
          {[["600+","Pernikahan Eksklusif"],["8+","Tahun Pengalaman"],["4.9★","Rating Premium"]].map(([val, label]) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="font-display text-2xl md:text-3xl text-gold">{val}</span>
              <span className="text-[0.58rem] tracking-[0.2em] uppercase">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#trust" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5" style={{ color: "rgba(212,168,67,0.5)" }}>
        <span className="eyebrow" style={{ fontSize: "0.5rem", color: "rgba(212,168,67,0.4)" }}>SCROLL</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
