import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { BRAND, waLink } from "./data";

const VIDEO_SRC = "https://videos.pexels.com/video-files/4066419/4066419-hd_1920_1080_25fps.mp4";
const VIDEO_FALLBACK = "https://videos.pexels.com/video-files/3048526/3048526-hd_1920_1080_25fps.mp4";

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef  = useRef<HTMLSpanElement>(null);
  const descRef     = useRef<HTMLParagraphElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const lineRef     = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(lineRef.current,     { scaleX: 0, transformOrigin: "left" }, { scaleX: 1, duration: 1.0 }, 0.2)
      .fromTo(eyebrowRef.current,  { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.7 }, 0.4)
      .fromTo(headlineRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1.1 }, 0.55)
      .fromTo(descRef.current,     { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.85)
      .fromTo(ctaRef.current,      { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.7 }, 1.05);
  }, []);

  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden flex items-center justify-start"
    >
      {/* Looping video */}
      <video
        className="video-hero"
        autoPlay
        muted
        loop
        playsInline
        poster={BRAND.heroImg}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
        <source src={VIDEO_FALLBACK} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="video-overlay-noir" />

      {/* Content — center-left for dramatic contrast */}
      <div className="relative z-10 container-x">
        <div className="max-w-2xl">
          {/* Gold accent line */}
          <span
            ref={lineRef}
            className="block h-[1px] w-16 mb-8"
            style={{ background: "#D4A843", opacity: 0.8, transform: "scaleX(0)" }}
          />

          <span
            ref={eyebrowRef}
            className="eyebrow"
            style={{ color: "#D4A843", opacity: 0 }}
          >
            {BRAND.tagline}
          </span>

          <h1
            ref={headlineRef}
            className="font-display text-white mt-5 text-[48px] leading-[1.0] md:text-[76px] lg:text-[90px] tracking-tight"
            style={{ opacity: 0 }}
          >
            Keistimewaan
            <br />
            <em style={{ color: "#D4A843" }}>Tanpa</em>
            <br />
            Kompromi
          </h1>

          <p
            ref={descRef}
            className="mt-8 max-w-md text-white/75 text-base md:text-lg leading-relaxed"
            style={{ opacity: 0 }}
          >
            {BRAND.heroDesc}
          </p>

          <div
            ref={ctaRef}
            className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            style={{ opacity: 0 }}
          >
            <a
              href={waLink(`Halo ${BRAND.nameShort}, saya tertarik dengan layanan wedding planner eksklusif Anda.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Mulai Konsultasi →
            </a>
            <a href="#galeri" className="btn-outline">
              Lihat Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#trust"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ color: "rgba(212,168,67,0.6)" }}
        aria-label="Scroll ke bawah"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
