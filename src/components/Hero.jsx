import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const root = useRef(null);
  const image = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-fade', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        stagger: 0.12,
        delay: 0.2,
      });

      gsap.to(image.current, {
        scale: 1.05,
        duration: 10,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative grid min-h-[100dvh] grid-cols-1 items-center gap-12 px-6 pb-16 pt-36 md:grid-cols-2 md:gap-16 md:px-12 lg:px-20 lg:pt-32"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-linen to-transparent" />

      <div className="flex flex-col gap-8">
        <div className="hero-fade gsap-fade-init flex items-center gap-3">
          <span className="h-px w-10 bg-canopy" />
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-canopy">
            Est. 2019 · Single Estate · Lebanon
          </p>
        </div>

        <h1 className="hero-fade gsap-fade-init font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-tightest text-soil">
          Liquid Gold,
          <span className="block italic text-canopy">grown in the heart</span>
          <span className="block">of Lebanon.</span>
        </h1>

        <p className="hero-fade gsap-fade-init max-w-md text-base leading-relaxed text-soil/70">
          A single-estate Mediterranean olive grove. Hand harvested at dawn, cold-pressed within four
          hours, and bottled in heritage glass at our estate in the hills above Beirut.
        </p>

        <div className="hero-fade gsap-fade-init flex flex-wrap items-center gap-5">
          <a
            href="#shop"
            className="group inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-medium text-soil transition-all duration-500 ease-cinematic hover:bg-soil hover:text-gold hover:scale-[1.03] shadow-bottle"
          >
            <span className="tracking-wide">Taste Liquid Gold</span>
            <ArrowRight size={16} className="transition-transform duration-500 ease-cinematic group-hover:translate-x-1.5" />
          </a>
          <a href="#farm" className="text-sm text-soil/70 link-underline">
            Our story
          </a>
        </div>

        <div className="hero-fade gsap-fade-init mt-4 flex items-center gap-8 border-t border-soil/15 pt-6">
          <div>
            <p className="font-mono text-2xl text-soil">04</p>
            <p className="text-xs uppercase tracking-widest text-soil/50">Hour harvest-to-press</p>
          </div>
          <div>
            <p className="font-mono text-2xl text-soil">12<span className="text-canopy">ha</span></p>
            <p className="text-xs uppercase tracking-widest text-soil/50">Estate grove</p>
          </div>
          <div className="hidden sm:block">
            <p className="font-mono text-2xl text-soil">100<span className="text-canopy">%</span></p>
            <p className="text-xs uppercase tracking-widest text-soil/50">Locally pressed</p>
          </div>
        </div>
      </div>

      <div className="hero-fade gsap-fade-init relative h-[60vh] w-full overflow-hidden rounded-3xl md:h-[85vh]">
        <img
          ref={image}
          src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1600&q=80"
          alt="Olive oil pouring from glass bottle"
          className="absolute inset-0 h-full w-full object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-soil/40 via-transparent to-transparent" />

        <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
          <div className="rounded-2xl bg-linen/85 px-5 py-3 backdrop-blur">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-canopy">Harvest 24</p>
            <p className="font-display text-lg text-soil">Cold-Pressed Reserve</p>
          </div>
          <div className="rounded-full bg-gold px-4 py-2 font-mono text-xs text-soil shadow-bottle">
            500ml · $48
          </div>
        </div>
      </div>
    </section>
  );
}
