import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [logoRotation, setLogoRotation] = useState(0);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setScrolled(currentY > 50);

            const delta = currentY - lastScrollY.current;
            if (delta !== 0) {
                // Rotate ~0.5 deg per pixel scrolled, direction follows scroll
                setLogoRotation(prev => prev + delta * 0.5);
            }
            lastScrollY.current = currentY;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Trigger load animation
        setTimeout(() => setLoaded(true), 100);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Benefits', href: '#benefits' },
        { name: 'Work', href: '#portfolio' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-[#3F00FF]/50' : 'bg-transparent border-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo with scaleIn */}
                    <div className={`flex-shrink-0 flex items-center gap-3 cursor-pointer ${loaded ? 'anim-scale-in' : 'anim-hidden'}`}>
                        <img
                            src="/logo.jpg"
                            alt="YouSonic Visions Logo"
                            className="h-12 w-12 object-contain"
                            style={{
                                transform: `rotate(${logoRotation}deg)`,
                                transition: 'transform 0.1s linear',
                            }}
                        />
                        <span className="font-black text-2xl tracking-tighter text-white uppercase italic">
                            YOUSONIC VISIONS
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map((link, i) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-zinc-400 hover:text-indigo-400 transition-colors text-sm font-bold uppercase tracking-widest nav-link-sweep ${loaded ? 'anim-fade-in-up' : 'anim-hidden'}`}
                                    style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className={`bg-[#3F00FF] text-white px-6 py-3 font-black uppercase tracking-wider hover:bg-white hover:text-[#3F00FF] transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none border-2 border-transparent ${loaded ? 'anim-scale-in stagger-6' : 'anim-hidden'}`}
                            >
                                Start Now
                            </a>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-indigo-400 p-2">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu with staggered slide-in */}
            {isOpen && (
                <div className="md:hidden bg-zinc-900 border-b border-[#3F00FF]">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                        {navLinks.map((link, i) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-indigo-400 block py-4 text-2xl font-black uppercase border-b border-zinc-800 anim-fade-in-left"
                                style={{ animationDelay: `${i * 0.08}s` }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
