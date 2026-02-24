import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer = () => {
    const [ref, isVisible] = useScrollAnimation(0.2);

    return (
        <footer ref={ref} className="bg-zinc-950 py-12 border-t border-zinc-900">
            <div className={`max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-1000 ${isVisible ? 'anim-fade-in-up' : 'anim-hidden'}`}>
                <div className={`flex items-center gap-3 ${isVisible ? 'anim-fade-in-left stagger-1' : 'anim-hidden'}`}>
                    <img src="/logo.jpg" alt="YouSonic Visions Logo" className="h-10 w-10 object-contain" />
                    <span className="font-black text-xl uppercase italic">
                        <span className="text-white">YOUSONICVISIONS</span>
                        <span style={{ color: '#3F00FF' }}> by YOUNEEQON</span>
                    </span>
                </div>
                <div className={`flex gap-8 ${isVisible ? 'anim-fade-in-up stagger-2' : 'anim-hidden'}`}>
                    <a href="https://www.instagram.com/yousonicvisions/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white uppercase text-xs font-bold nav-link-sweep transition-colors">Instagram</a>
                    <a href="#" className="text-zinc-500 hover:text-white uppercase text-xs font-bold nav-link-sweep transition-colors">Twitter</a>
                    <a href="#" className="text-zinc-500 hover:text-white uppercase text-xs font-bold nav-link-sweep transition-colors">YouTube</a>
                </div>
                <p className={`text-zinc-600 text-xs font-mono ${isVisible ? 'anim-fade-in-right stagger-3' : 'anim-hidden'}`}>© 2025 YOUSONIC VISIONS. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
};

export default Footer;
