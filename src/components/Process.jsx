import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    n: '01',
    title: 'Hand Harvest',
    body: 'Picked at first light when oil polyphenols peak. No machine shake — every olive is selected.',
    image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    n: '02',
    title: 'Cold Press',
    body: 'Pressed within four hours at ≤27°C. Never heated, never refined — only mechanical extraction.',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    n: '03',
    title: 'Heritage Glass',
    body: 'Decanted into UV-blocking green glass. Numbered, dated, and sealed at the estate.',
    image: 'https://images.unsplash.com/photo-1571066811602-716837d681de?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Process() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.process-card', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        stagger: 0.18,
        scrollTrigger: { trigger: root.current, start: 'top 80%' },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={root}
      className="relative bg-linen px-6 py-28 md:px-12 lg:px-20"
    >
      <div className="mb-16 max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-canopy" />
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-canopy">
            Process · From Grove to Bottle
          </p>
        </div>
        <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tightest text-soil md:text-6xl">
          Three steps.
          <span className="italic text-canopy"> No shortcuts.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {steps.map((s) => (
          <article
            key={s.n}
            className="process-card gsap-fade-init flex flex-col gap-5"
          >
            <div className="aspect-[5/6] overflow-hidden rounded-3xl bg-stone">
              <img
                src={s.image}
                alt={s.title}
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-cinematic hover:scale-105"
              />
            </div>
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-sm text-canopy">{s.n}</span>
              <h3 className="font-display text-3xl tracking-tightest text-soil">{s.title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-soil/65">{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
