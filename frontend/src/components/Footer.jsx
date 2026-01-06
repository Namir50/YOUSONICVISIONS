import React from 'react';

const Footer = () => (
    <footer className="bg-zinc-950 py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
                <img src="/logo.jpg" alt="YouSonic Visions Logo" className="h-10 w-10 object-contain" />
                <span className="font-black text-xl uppercase italic">
                    <span className="text-white">YOUSONICVISIONS</span>
                    <span style={{ color: '#3F00FF' }}> by YOUNEEQON</span>
                </span>
            </div>
            <div className="flex gap-8">
                <a href="https://www.instagram.com/yousonicvisions/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white uppercase text-xs font-bold">Instagram</a>
                <a href="#" className="text-zinc-500 hover:text-white uppercase text-xs font-bold">Twitter</a>
                <a href="#" className="text-zinc-500 hover:text-white uppercase text-xs font-bold">YouTube</a>
            </div>
            <p className="text-zinc-600 text-xs font-mono">© 2025 YOUSONIC VISIONS. ALL RIGHTS RESERVED.</p>
        </div>
    </footer>
);

export default Footer;
