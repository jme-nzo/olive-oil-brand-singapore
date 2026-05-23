import { useEffect, useState } from 'react';
import { ShoppingBag, User } from 'lucide-react';

export default function Navbar({ onSignInClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`flex items-center gap-8 rounded-full border border-soil/10 px-6 py-3 backdrop-blur-xl transition-all duration-700 ease-cinematic ${
          scrolled ? 'bg-linen/85 shadow-bottle' : 'bg-linen/60'
        }`}
      >
        <a href="#top" className="font-display text-xl tracking-tightest text-soil leading-none">
          Olive Oil Brand <span className="text-canopy">Singapore</span>
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm tracking-wide text-soil/80">
          <li><a href="#shop" className="link-underline">Shop</a></li>
          <li><a href="#farm" className="link-underline">Our Farm</a></li>
          <li><a href="#process" className="link-underline">Process</a></li>
        </ul>

        <div className="flex items-center gap-3 pl-2">
          <button
            aria-label="Cart"
            className="relative p-2 rounded-full hover:bg-stone transition-colors duration-300 ease-cinematic"
          >
            <ShoppingBag size={18} strokeWidth={1.6} />
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-gold text-[10px] font-mono text-soil flex items-center justify-center">
              2
            </span>
          </button>
          <button
            onClick={onSignInClick}
            className="group flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-medium text-soil transition-all duration-500 ease-cinematic hover:bg-soil hover:text-gold hover:scale-[1.03]"
          >
            <User size={16} strokeWidth={1.8} />
            <span>Sign In</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
