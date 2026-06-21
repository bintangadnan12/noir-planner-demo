import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { BRAND, waLink } from "./data";

export function Hero() {
  const lineRef    = useRef<HTMLSpanElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);
  const sepRef     = useRef<HTMLSpanElement>(null);
  const descRef    = useRef<HTMLParagraphElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(lineRef.current,    { scaleX: 0, transformOrigin: "center" }, { scaleX: 1, duration: 1.0 }, 0.2)
      .fromTo(eyebrowRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.5)
      .fromTo(titleRef.current,   { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.1 }, 0.7)
      .fromTo(sepRef.current,     { scaleX: 0, transformOrigin: "center" }, { scaleX: 1, duration: 0.7 }, 1.1)
      .fromTo(descRef.current,    { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 1.2)
      .fromTo(ctaRef.current,     { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, 1.4)
      .fromTo(statsRef.current,   { opacity: 0 },        { opacity: 1, duration: 0.8 },        1.6);
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[700px] w-full overflow-hidden flex flex-col items-center justify-center text-center">

      <div className="absolute inset-0" style={{ background: "#0A0806" }} />

      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        autoPlay muted loop playsInline
        preload="auto"
      >
        <source src="/video/wedding.mp4" type="video/mp4" />
      </video>

      {/* Heavy dark overlay for Noir */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(to bottom, rgba(6,4,2,0.82) 0%, rgba(6,4,2,0.60) 40%, rgba(6,4,2,0.88) 100%)"
      }} />

      <div className="relative z-10 container-x flex flex-col items-center">
        <span
          ref={lineRef}
          className="block h-[1px] w-16 mb-8 mx-auto"
          style={{ background: "#D4A843", transform: "scaleX(0)" }}
        />

        <span ref={eyebrowRef} className="eyebrow mb-6" style={{ color: "#D4A843", opacity: 0 }}>
          {BRAND.tagline}
        </span>

        <h1 ref={titleRef} className="font-display text-white text-[48px] leading-[1.0] md:text-[76px] lg:text-[92px] max-w-4xl" style={{ opacity: 0 }}>
          Keistimewaan
          <br />
          <em style={{ color: "#D4A843" }}>Tanpa</em> Kompromi
        </h1>

        <span
          ref={sepRef}
          className="block my-8 mx-auto h-[1px] w-16"
          style={{ background: "rgba(212,168,67,0.40)", transform: "scaleX(0)" }}
        />

        <p ref={descRef} className="max-w-xl text-white/78 text-base md:text-lg leading-relaxed" style={{ opacity: 0 }}>
          {BRAND.heroDesc}
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ opacity: 0 }}>
          <a
            href={waLink(`Halo ${BRAND.nameShort}, saya tertarik dengan layanan wedding planner eksklusif Anda.`)}
            target="_blank" rel="noopener noreferrer"
            className="group relative overflow-hidden px-9 py-4 text-[0.65rem] tracking-[0.25em] uppercase inline-flex items-center gap-3 font-semibold"
            style={{ background: "#D4A843", color: "#0E0C0A" }}
          >
            <span className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
            <span className="relative group-hover:text-ink transition-colors">Mulai Konsultasi</span>
            <span className="relative group-hover:text-ink transition-colors">→</span>
          </a>
          <a href="#galeri"
            className="group relative overflow-hidden border px-9 py-4 text-[0.65rem] tracking-[0.25em] uppercase inline-flex items-center gap-3"
            style={{ borderColor: "rgba(212,168,67,0.5)", color: "#D4A843" }}
          >
            <span className="absolute inset-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" style={{ background: "#D4A843" }} />
            <span className="relative group-hover:text-bg transition-colors">Lihat Portfolio</span>
          </a>
        </div>

        <div ref={statsRef} className="mt-14 flex items-center gap-8 md:gap-14" style={{ opacity: 0, color: "rgba(240,234,224,0.45)" }}>
          {[["600+","Pernikahan Eksklusif"],["8+","Tahun Pengalaman"],["4.9★","Rating Premium"]].map(([val, label]) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <span className="font-display text-[1.75rem] md:text-[2rem] leading-none" style={{ color: "#D4A843" }}>{val}</span>
              <span className="eyebrow" style={{ fontSize: "0.55rem", color: "rgba(240,234,224,0.35)" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#trust" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5" style={{ color: "rgba(212,168,67,0.45)" }}>
        <span className="eyebrow" style={{ fontSize: "0.5rem", color: "rgba(212,168,67,0.35)" }}>SCROLL</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
