import { ArrowRight, Send, Globe, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-soil text-linen">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-24 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-16 border-b border-linen/10 pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          <div className="flex flex-col gap-6">
            <a href="#top" className="font-display text-3xl tracking-tightest text-linen">
              Olive Oil Brand <span className="text-gold">Singapore</span>
            </a>
            <p className="max-w-xs text-sm text-linen/65 leading-relaxed">
              A single-estate tropical olive grove in the heart of Lebanon. Cold-pressed,
              heritage glass, never blended.
            </p>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2">
              <MapPin size={14} className="text-gold" />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
                Locally Harvested in Lebanon
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-linen/40">Shop</p>
            <ul className="flex flex-col gap-3 text-sm text-linen/75">
              <li><a href="#shop" className="link-underline">Extra Virgin Reserve</a></li>
              <li><a href="#shop" className="link-underline">Cold-Pressed Gold</a></li>
              <li><a href="#shop" className="link-underline">Estate Blend</a></li>
              <li><a href="#shop" className="link-underline">Gift Sets</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-linen/40">Estate</p>
            <ul className="flex flex-col gap-3 text-sm text-linen/75">
              <li><a href="#farm" className="link-underline">Our Farm</a></li>
              <li><a href="#process" className="link-underline">Process</a></li>
              <li><a href="#" className="link-underline">Sustainability</a></li>
              <li><a href="#" className="link-underline">Visit</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-linen/40">
              Join the harvest list
            </p>
            <p className="text-sm text-linen/70">
              First access to new pressings and limited allocations.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 rounded-full border border-linen/20 bg-linen/5 px-2 py-2 focus-within:border-gold transition-colors"
            >
              <Mail size={16} className="ml-3 text-gold" />
              <input
                type="email"
                placeholder="you@estate.sg"
                className="w-full bg-transparent px-2 py-1 text-sm text-linen placeholder:text-linen/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="group flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-medium text-soil transition-all duration-500 ease-cinematic hover:scale-[1.04]"
              >
                <span>Join</span>
                <ArrowRight size={14} className="transition-transform duration-500 ease-cinematic group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-10 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-linen/40">
            © {new Date().getFullYear()} Olive Oil Brand Singapore · All Rights Reserved
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Social" className="rounded-full border border-linen/15 p-2.5 hover:border-gold hover:text-gold transition-colors duration-500 ease-cinematic">
              <Send size={16} />
            </a>
            <a href="#" aria-label="Website" className="rounded-full border border-linen/15 p-2.5 hover:border-gold hover:text-gold transition-colors duration-500 ease-cinematic">
              <Globe size={16} />
            </a>
          </div>
          <div className="flex items-center gap-5 text-xs text-linen/50">
            <a href="#" className="link-underline">Privacy</a>
            <a href="#" className="link-underline">Terms</a>
            <a href="#" className="link-underline">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
