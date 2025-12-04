import React, { useState, useEffect } from 'react';
import { Aperture, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
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
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
                        <div className="w-10 h-10 bg-[#3F00FF] rotate-3 group-hover:rotate-0 transition-transform flex items-center justify-center border-2 border-white/10 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
                            <Aperture className="text-white w-6 h-6" />
                        </div>
                        <span className="font-black text-2xl tracking-tighter text-white uppercase italic">
                            YOUSONICVISION<span className="text-[#3F00FF]">.AI</span>
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-zinc-400 hover:text-indigo-400 transition-colors text-sm font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a href="#contact" className="bg-[#3F00FF] text-white px-6 py-3 font-black uppercase tracking-wider hover:bg-white hover:text-[#3F00FF] transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none border-2 border-transparent">
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

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-zinc-900 border-b border-[#3F00FF]">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-indigo-400 block px-3 py-4 text-2xl font-black uppercase border-b border-zinc-800"
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
