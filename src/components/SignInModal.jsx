import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X, Mail, Lock, ArrowRight } from 'lucide-react';

export default function SignInModal({ isOpen, onClose }) {
  const backdropRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0, backdropFilter: 'blur(0px)' },
        { opacity: 1, backdropFilter: 'blur(18px)', duration: 0.6, ease: 'power2.out' }
      );
      gsap.fromTo(
        panelRef.current,
        { y: 80, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }
      );
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-soil/30 p-4"
      style={{ backdropFilter: 'blur(18px)' }}
    >
      <div
        ref={panelRef}
        onClick={(e) => e.stopPropagation()}
        className="relative grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-3xl bg-linen shadow-bottle md:grid-cols-2"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 z-10 rounded-full bg-linen/80 p-2 backdrop-blur hover:bg-stone transition-colors duration-300"
        >
          <X size={18} />
        </button>

        <div className="relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1601556123240-462c758a929d?auto=format&fit=crop&w=1200&q=80"
            alt="Olive farm"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-soil/70 via-canopy/30 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-linen">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold/90">Members Only</p>
            <h3 className="mt-3 font-display text-4xl leading-tight tracking-tightest">
              Step into the grove.
            </h3>
            <p className="mt-3 max-w-xs text-sm text-linen/80">
              Allocations from our smallest harvests are reserved for our members first.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6 p-10 md:p-14">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-canopy">Sign in</p>
            <h2 className="mt-2 font-display text-4xl tracking-tightest text-soil">
              Welcome back.
            </h2>
            <p className="mt-2 text-sm text-soil/60">
              Continue to your cellar and saved harvests.
            </p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <label className="flex items-center gap-3 rounded-full border border-soil/15 bg-stone/60 px-5 py-3 focus-within:border-canopy transition-colors">
              <Mail size={16} className="text-canopy" />
              <input
                type="email"
                placeholder="you@estate.sg"
                className="w-full bg-transparent text-sm placeholder:text-soil/40 focus:outline-none"
              />
            </label>
            <label className="flex items-center gap-3 rounded-full border border-soil/15 bg-stone/60 px-5 py-3 focus-within:border-canopy transition-colors">
              <Lock size={16} className="text-canopy" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent text-sm placeholder:text-soil/40 focus:outline-none"
              />
            </label>

            <button
              type="submit"
              className="group mt-2 flex items-center justify-between rounded-full bg-gold px-6 py-3 text-sm font-medium text-soil transition-all duration-500 ease-cinematic hover:bg-soil hover:text-gold hover:scale-[1.02]"
            >
              <span>Continue</span>
              <ArrowRight size={16} className="transition-transform duration-500 ease-cinematic group-hover:translate-x-1" />
            </button>
          </form>

          <div className="flex items-center gap-4 text-xs text-soil/50">
            <div className="h-px flex-1 bg-soil/15" />
            <span className="font-mono uppercase tracking-[0.25em]">Or</span>
            <div className="h-px flex-1 bg-soil/15" />
          </div>

          <p className="text-center text-sm text-soil/70">
            New to the estate?{' '}
            <a href="#" className="font-medium text-canopy link-underline">Request membership</a>
          </p>
        </div>
      </div>
    </div>
  );
}
