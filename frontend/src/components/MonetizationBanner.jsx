import React from 'react';
import { DollarSign } from 'lucide-react';
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';

const MonetizationBanner = () => {
    const [sectionRef, isVisible] = useScrollAnimation(0.2);
    const [countRef, count] = useCountUp(80, 1500);

    return (
        <div ref={sectionRef} className="bg-[#3F00FF] py-20 border-y-4 border-black relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>

            <div className={`max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="flex-1 text-left">
                    <div className={`flex items-center gap-4 mb-4 ${isVisible ? 'anim-fade-in-left' : 'anim-hidden'}`}>
                        <div className="bg-black p-3">
                            <DollarSign className="w-8 h-8 text-indigo-300" />
                        </div>
                        <span className="font-black text-2xl uppercase tracking-tighter text-white">Monetization Active</span>
                    </div>
                    <h2 className={`text-4xl md:text-6xl font-black text-white leading-none mb-6 ${isVisible ? 'anim-text-reveal' : 'anim-hidden'}`} style={{ animationDelay: '0.2s', animationDuration: '1s' }}>
                        COPYRIGHT <br /> CLEAR.
                    </h2>
                    <p className={`text-xl text-indigo-100 font-medium leading-relaxed ${isVisible ? 'anim-fade-in-up stagger-3' : 'anim-hidden'}`}>
                        Don't get demonetized. Our AI generates 100% original imagery. You own the assets. You keep the royalties. Realism without the risk.
                    </p>
                </div>

                <div ref={countRef} className={`bg-black p-8 -rotate-2 group-hover:rotate-0 transition-transform duration-500 shadow-[10px_10px_0px_0px_rgba(30,27,75,0.5)] ${isVisible ? 'anim-scale-in stagger-4' : 'anim-hidden'}`}>
                    <div className="text-indigo-400 font-mono text-sm mb-2 border-b border-zinc-800 pb-2">ESTIMATED SAVINGS</div>
                    <div className="text-5xl font-black text-white mb-1 anim-number-glow">{count}%</div>
                    <div className="text-zinc-500 text-sm">vs Traditional Production</div>
                </div>
            </div>

            {/* Marquee Ticker */}
            <div className={`mt-12 border-t border-indigo-800/40 pt-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="marquee-container">
                    <div className="marquee-content">
                        {[...Array(2)].map((_, i) => (
                            <span key={i} className="flex items-center gap-8 px-8 text-sm font-mono uppercase tracking-widest text-indigo-200/60 whitespace-nowrap">
                                <span>COPYRIGHT CLEAR</span>
                                <span className="text-indigo-400">•</span>
                                <span>100% ORIGINAL</span>
                                <span className="text-indigo-400">•</span>
                                <span>ZERO RISK</span>
                                <span className="text-indigo-400">•</span>
                                <span>YOU OWN IT</span>
                                <span className="text-indigo-400">•</span>
                                <span>AI GENERATED</span>
                                <span className="text-indigo-400">•</span>
                                <span>ROYALTY FREE</span>
                                <span className="text-indigo-400">•</span>
                                <span>MONETIZE EVERYWHERE</span>
                                <span className="text-indigo-400">•</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonetizationBanner;
