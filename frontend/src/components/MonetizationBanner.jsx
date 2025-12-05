import React from 'react';
import { DollarSign } from 'lucide-react';

const MonetizationBanner = () => {
    return (
        <div className="bg-[#3F00FF] py-20 border-y-4 border-black relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>

            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                <div className="flex-1 text-left">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="bg-black p-3">
                            <DollarSign className="w-8 h-8 text-indigo-300" />
                        </div>
                        <span className="font-black text-2xl uppercase tracking-tighter text-white">Monetization Active</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-none mb-6">
                        COPYRIGHT <br /> CLEAR.
                    </h2>
                    <p className="text-xl text-indigo-100 font-medium leading-relaxed">
                        Don't get demonetized. Our AI generates 100% original imagery. You own the assets. You keep the royalties. Realism without the risk.
                    </p>
                </div>

                <div className="bg-black p-8 -rotate-2 group-hover:rotate-0 transition-transform duration-500 shadow-[10px_10px_0px_0px_rgba(30,27,75,0.5)]">
                    <div className="text-indigo-400 font-mono text-sm mb-2 border-b border-zinc-800 pb-2">ESTIMATED SAVINGS</div>
                    <div className="text-5xl font-black text-white mb-1">80%</div>
                    <div className="text-zinc-500 text-sm">vs Traditional Production</div>
                </div>
            </div>
        </div>
    );
};

export default MonetizationBanner;
