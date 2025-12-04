import React from 'react';

const FeatureCard = ({ icon: Icon, title, desc, num }) => (
    <div className="relative p-8 bg-zinc-900 border border-zinc-800 hover:border-[#3F00FF] transition-colors group">
        <div className="absolute -top-6 -right-6 text-9xl font-black text-zinc-800/30 group-hover:text-[#3F00FF]/20 transition-colors select-none pointer-events-none">
            {num}
        </div>
        <div className="w-16 h-16 bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 group-hover:bg-[#3F00FF] transition-colors">
            <Icon className="w-8 h-8 text-white group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-2xl font-black text-white uppercase mb-4 tracking-tight">{title}</h3>
        <p className="text-zinc-400 font-mono text-sm leading-relaxed border-l-2 border-zinc-800 pl-4 group-hover:border-[#3F00FF] transition-colors">{desc}</p>
    </div>
);

export default FeatureCard;
