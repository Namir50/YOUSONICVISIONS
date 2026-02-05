import React from 'react';
import { Zap } from 'lucide-react';

const ServiceList = () => {
    const services = [
        {
            name: "Full music video",
            items: ["Comprehensive Scripting", "Custom AI Models", "High-Quality Render", "Advanced FX & Grading"]
        },
        {
            name: "Reel video",
            items: ["Short-form Optimization", "Looping/Seamless Cuts", "Mobile Aspect Ratio", "Trend-based Visuals"]
        },
        {
            name: "Lyrical video",
            items: ["AI Locations and Visuals", "Audio-Reactive Elements", "Custom Typography", "Fast Turnaround"]
        },
        {
            name: "Advertisement video",
            items: ["AI-Powered Visuals", "Lip Sync Technology", "Brand-Focused Storytelling", "Realistic and Identical Products"]
        },
    ];

    return (
        <section id="services" className="py-24 bg-zinc-950 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-16 uppercase tracking-tight">Production Menu</h2>

                {/* Corrected: Reverted section background to zinc-950 and used indigo for strong borders and accents */}
                <div className="grid md:grid-cols-4 gap-px bg-zinc-800 border-b border-t border-zinc-800">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-zinc-900 p-6 md:p-10 hover:bg-zinc-800 transition-colors group border-b md:border-b-0 md:border-r border-zinc-800 last:md:border-r-0 relative flex flex-col h-full"
                        >
                            {/* Internal border accent to meet the color request */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#3F00FF] transition-all pointer-events-none"></div>

                            <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8 min-h-[4.5rem] text-center md:text-left">
                                <h3 className="text-3xl font-black uppercase leading-8 text-white mb-4 md:mb-0">{service.name}</h3>
                                <Zap className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-[#3F00FF] flex-shrink-0" />
                            </div>
                            <p className="text-2xl font-bold font-mono mb-8 border-b-2 border-indigo-700 pb-4 inline-block text-white w-max mx-auto md:mx-0">{service.price}</p>
                            <ul className="space-y-4 mb-8 flex-grow flex flex-col items-center md:items-start">
                                {services[idx].items.map((item, i) => (
                                    <li key={i} className="flex items-center font-medium text-zinc-300">
                                        <div className="w-1.5 h-1.5 bg-[#3F00FF] mr-3"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={`#contact?videoType=${service.name.toUpperCase().replace(/ /g, '_')}`}
                                className="block w-full py-4 bg-black text-white font-bold text-center uppercase tracking-widest hover:bg-[#3F00FF] transition-colors shadow-[0_4px_0_0_#3F00FF] hover:shadow-none mt-auto"
                            >
                                Select
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceList;
