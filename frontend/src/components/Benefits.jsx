import React from 'react';
import { Camera, Cpu, Globe } from 'lucide-react';
import FeatureCard from './FeatureCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Benefits = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section
            id="benefits"
            ref={ref}
            className={`py-32 bg-zinc-950 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            {/* Decorative Lines */}
            <div className="absolute left-10 top-0 bottom-0 w-px bg-zinc-900 hidden md:block"></div>
            <div className="absolute right-10 top-0 bottom-0 w-px bg-zinc-900 hidden md:block"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-zinc-800 pb-8">
                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase">The Upgrade</h2>
                    <p className="text-[#3F00FF] font-mono mt-4 md:mt-0">/// WHY SWITCH TO AI GENERATION</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <FeatureCard
                        num="01"
                        icon={Camera}
                        title="Kill The Shoot"
                        desc="No logistics. No weather delays. No craft services. We generate high-fidelity worlds from your audio file alone."
                    />
                    <FeatureCard
                        num="02"
                        icon={Cpu}
                        title="Infinite Scale"
                        desc="Want a cast of thousands? A city in the clouds? Physics-defying transitions? We will do it for you."
                    />
                    <FeatureCard
                        num="03"
                        icon={Globe}
                        title="Viral Ready"
                        desc="Optimized for vertical consumption. Visualizers that loop perfectly for Spotify Canvas and TikTok engagement."
                    />
                </div>
            </div>
        </section>
    );
};

export default Benefits;
