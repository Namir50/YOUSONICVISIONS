import React from 'react';

const Footer = () => (
    <footer className="bg-zinc-950 py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
                <span className="font-black text-xl text-white uppercase italic">YOUSONICVISIONS</span>
            </div>
            <div className="flex gap-8">
                <a href="#" className="text-zinc-500 hover:text-white uppercase text-xs font-bold">Instagram</a>
                <a href="#" className="text-zinc-500 hover:text-white uppercase text-xs font-bold">Twitter</a>
                <a href="#" className="text-zinc-500 hover:text-white uppercase text-xs font-bold">YouTube</a>
            </div>
            <p className="text-zinc-600 text-xs font-mono">© 2025 YOUSONICVISIONS. ALL RIGHTS RESERVED.</p>
        </div>
    </footer>
);

export default Footer;
