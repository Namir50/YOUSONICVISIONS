import React from 'react';

const FeatureCard = ({ icon: Icon, title, desc, num, isVisible = true, index = 0 }) => {
    const delay = index * 0.2;

    return (
        <div
            className={`relative p-8 bg-zinc-900 border border-zinc-800 hover:border-[#3F00FF] transition-all group card-hover-lift border-draw-hover ${isVisible ? 'anim-fade-in-up' : 'anim-hidden'}`}
            style={{ animationDelay: `${0.3 + delay}s` }}
        >
            {/* Number watermark - slides in from right */}
            <div
                className={`absolute -top-6 -right-6 text-9xl font-black text-zinc-800/30 group-hover:text-[#3F00FF]/20 transition-all select-none pointer-events-none ${isVisible ? 'anim-fade-in-right' : 'anim-hidden'}`}
                style={{ animationDelay: `${0.5 + delay}s` }}
            >
                {num}
            </div>

            {/* Icon box with scaleIn */}
            <div
                className={`w-16 h-16 bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-8 group-hover:bg-[#3F00FF] transition-all duration-300 ${isVisible ? 'anim-scale-in' : 'anim-hidden'}`}
                style={{ animationDelay: `${0.4 + delay}s` }}
            >
                <Icon className="w-8 h-8 text-white group-hover:text-white transition-colors" />
            </div>

            <h3 className="text-2xl font-black text-white uppercase mb-4 tracking-tight">{title}</h3>
            <p className="text-zinc-400 font-mono text-sm leading-relaxed border-l-2 border-zinc-800 pl-4 group-hover:border-[#3F00FF] transition-colors">{desc}</p>
        </div>
    );
};

export default FeatureCard;
