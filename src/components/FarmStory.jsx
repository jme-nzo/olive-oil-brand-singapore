import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FarmStory() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.farm-quote', {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 0.6,
        },
      });

      gsap.to('.farm-line', {
        scaleX: 1,
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 60%',
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="farm"
      ref={root}
      className="relative min-h-[120vh] overflow-hidden"
    >
      <div
        className="parallax-bg absolute inset-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1444858345857-66a5ec5290b3?auto=format&fit=crop&w=2200&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-linen via-soil/60 to-soil/85" />

      <div className="relative mx-auto flex min-h-[120vh] max-w-5xl flex-col items-center justify-center px-6 py-32 text-center text-linen">
        <p className="farm-quote gsap-fade-init font-mono text-[11px] uppercase tracking-[0.4em] text-gold">
          The Estate · Botanic District, Singapore
        </p>
        <div className="farm-line mt-8 h-px w-32 origin-left scale-x-0 bg-gold" />

        <h2 className="farm-quote gsap-fade-init mt-10 font-display text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[1.02] tracking-tightest text-linen">
          We were told olives
          <span className="block italic text-gold">would not grow here.</span>
          <span className="block">We planted them anyway.</span>
        </h2>

        <p className="farm-quote gsap-fade-init mt-12 max-w-2xl text-base leading-relaxed text-linen/80 md:text-lg">
          Twelve hectares of Arbequina and Koroneiki cultivars adapted to our tropical microclimate.
          We harvest at dawn, press within four hours, and decant into heritage glass — never plastic,
          never blended with imports. What you taste is exactly what came from the grove.
        </p>

        <div className="farm-quote gsap-fade-init mt-16 grid w-full max-w-3xl grid-cols-3 gap-6 border-t border-linen/20 pt-10 text-left">
          <div>
            <p className="font-mono text-3xl text-gold">12<span className="text-linen/60">ha</span></p>
            <p className="mt-2 text-xs uppercase tracking-widest text-linen/60">Estate hectares</p>
          </div>
          <div>
            <p className="font-mono text-3xl text-gold">2<span className="text-linen/60">×</span></p>
            <p className="mt-2 text-xs uppercase tracking-widest text-linen/60">Annual harvests</p>
          </div>
          <div>
            <p className="font-mono text-3xl text-gold">04<span className="text-linen/60">hr</span></p>
            <p className="mt-2 text-xs uppercase tracking-widest text-linen/60">Press window</p>
          </div>
        </div>
      </div>
    </section>
  );
}
