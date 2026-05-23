import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus } from 'lucide-react';
import { products } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

export default function ShopGrid() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.shop-card', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        stagger: 0.15,
        scrollTrigger: {
          trigger: root.current,
          start: 'top 75%',
        },
      });
      gsap.to('.shop-heading', {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        scrollTrigger: {
          trigger: root.current,
          start: 'top 85%',
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="shop"
      ref={root}
      className="relative px-6 py-28 md:px-12 lg:px-20"
    >
      <div className="mb-16 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
        <div className="shop-heading gsap-fade-init">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-canopy" />
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-canopy">
              The Harvest · 2024
            </p>
          </div>
          <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-tightest text-soil md:text-6xl">
            Three bottles.
            <span className="block italic text-canopy">One quiet obsession.</span>
          </h2>
        </div>
        <p className="shop-heading gsap-fade-init max-w-sm text-sm leading-relaxed text-soil/70">
          Each bottle is pressed within hours of harvest and labelled with the grove it came from.
          Allocations are limited.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {products.map((p, i) => (
          <article
            key={p.id}
            className="shop-card gsap-fade-init group relative flex flex-col overflow-hidden rounded-3xl bg-stone transition-shadow duration-500 ease-cinematic hover:shadow-bottle"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-[1200ms] ease-cinematic group-hover:scale-[1.06] group-hover:brightness-90"
              />
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-soil/95 via-soil/70 to-transparent p-6 transition-transform duration-700 ease-cinematic group-hover:translate-y-0">
                <button className="flex w-full items-center justify-between rounded-full bg-gold px-5 py-3 text-sm font-medium text-soil transition-all duration-500 ease-cinematic hover:scale-[1.02]">
                  <span>Quick Add</span>
                  <Plus size={16} strokeWidth={2} />
                </button>
              </div>
              <span className="absolute top-4 left-4 rounded-full bg-linen/85 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-soil backdrop-blur">
                {String(i + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
              </span>
            </div>

            <div className="flex flex-col gap-3 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl leading-tight tracking-tightest text-soil">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-widest text-soil/50">
                    {p.tagline}
                  </p>
                </div>
                <span className="rounded-full bg-canopy/10 px-3 py-1 font-mono text-xs text-canopy whitespace-nowrap">
                  {p.volume}
                </span>
              </div>

              <p className="text-sm text-soil/65">{p.notes}</p>

              <div className="mt-3 flex items-center justify-between border-t border-soil/10 pt-4">
                <div>
                  <p className="font-mono text-2xl text-soil">{p.price}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-soil/40">
                    {p.sku}
                  </p>
                </div>
                <button className="rounded-full bg-soil px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-gold transition-all duration-500 ease-cinematic hover:bg-gold hover:text-soil hover:scale-[1.03]">
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
