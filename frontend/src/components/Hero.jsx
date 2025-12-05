import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 pt-20">
            {/* Grid Background */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

            {/* Animated Motion Graphics - AI & Music Theme */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Top Left - Floating Particles/Orbs */}
                <div className="absolute top-32 left-16 w-48 h-48 opacity-40">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="20" cy="30" r="4" fill="#3F00FF" className="animate-pulse" />
                        <circle cx="50" cy="20" r="6" fill="#6366f1" className="animate-ping" style={{ animationDelay: '0.3s' }} />
                        <circle cx="70" cy="40" r="3" fill="#3F00FF" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                        <circle cx="35" cy="60" r="5" fill="#8b5cf6" className="animate-ping" style={{ animationDelay: '0.9s' }} />
                        <circle cx="60" cy="70" r="4" fill="#6366f1" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
                        <circle cx="80" cy="80" r="3" fill="#3F00FF" className="animate-ping" style={{ animationDelay: '1.5s' }} />
                    </svg>
                </div>

                {/* Top Right - Neural Network */}
                <div className="absolute top-24 right-16 w-40 h-40 opacity-35">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="20" cy="20" r="2.5" fill="#3F00FF" className="animate-ping" />
                        <circle cx="50" cy="30" r="2.5" fill="#6366f1" className="animate-pulse" />
                        <circle cx="80" cy="20" r="2.5" fill="#3F00FF" className="animate-ping" style={{ animationDelay: '2s' }} />
                        <circle cx="35" cy="60" r="2.5" fill="#6366f1" className="animate-pulse" style={{ animationDelay: '2s' }} />
                        <circle cx="65" cy="65" r="2.5" fill="#3F00FF" className="animate-ping" style={{ animationDelay: '2s' }} />
                        <line x1="20" y1="20" x2="50" y2="30" stroke="#3F00FF" strokeWidth="0.5" opacity="0.4" />
                        <line x1="50" y1="30" x2="80" y2="20" stroke="#3F00FF" strokeWidth="0.5" opacity="0.4" />
                        <line x1="50" y1="30" x2="35" y2="60" stroke="#6366f1" strokeWidth="0.5" opacity="0.4" />
                        <line x1="50" y1="30" x2="65" y2="65" stroke="#6366f1" strokeWidth="0.5" opacity="0.4" />
                    </svg>
                </div>

                {/* Middle Left - Floating Music Note */}
                <div className="absolute top-1/2 left-12 text-5xl text-[#3F00FF] opacity-40 animate-[float_6s_ease-in-out_infinite]">♪</div>

                {/* Middle Right - Floating Music Note */}
                <div className="absolute top-1/3 right-24 text-4xl text-indigo-400 opacity-40 animate-[float_8s_ease-in-out_infinite]" style={{ animationDelay: '1s' }}>♫</div>

                {/* Bottom Left - Spectrum Bars */}
                <div className="absolute bottom-32 left-20 flex gap-1 opacity-40">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="w-2 bg-gradient-to-t from-[#3F00FF] to-indigo-400 animate-[spectrum_1s_ease-in-out_infinite]"
                            style={{
                                height: `${24 + (i % 3) * 12}px`,
                                animationDelay: `${i * 0.15}s`
                            }}
                        />
                    ))}
                </div>

                {/* Bottom Right - AI Circuit Pattern */}
                <div className="absolute bottom-24 right-20 w-44 h-44 opacity-40">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <rect x="15" y="15" width="18" height="18" fill="none" stroke="#3F00FF" strokeWidth="1" className="animate-pulse" />
                        <rect x="42" y="15" width="18" height="18" fill="none" stroke="#6366f1" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                        <rect x="68" y="15" width="18" height="18" fill="none" stroke="#3F00FF" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }} />
                        <rect x="15" y="42" width="18" height="18" fill="none" stroke="#6366f1" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                        <rect x="42" y="42" width="18" height="18" fill="none" stroke="#3F00FF" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
                        <line x1="33" y1="24" x2="42" y2="24" stroke="#3F00FF" strokeWidth="0.5" opacity="0.5" />
                        <line x1="60" y1="24" x2="68" y2="24" stroke="#3F00FF" strokeWidth="0.5" opacity="0.5" />
                        <line x1="24" y1="33" x2="24" y2="42" stroke="#6366f1" strokeWidth="0.5" opacity="0.5" />
                        <line x1="51" y1="33" x2="51" y2="42" stroke="#6366f1" strokeWidth="0.5" opacity="0.5" />
                    </svg>
                </div>

                {/* Center Floating Note */}
                <div className="absolute bottom-1/3 right-1/3 text-4xl text-[#3F00FF] opacity-40 animate-[float_7s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}>♬</div>

                {/* Scrolling ticker simulation */}
                <div className="absolute bottom-10 w-full overflow-hidden whitespace-nowrap opacity-40">
                    <div className="inline-block animate-[scroll_20s_linear_infinite] text-8xl font-black text-transparent stroke-text">
                        GENAI // MUSIC // VIDEO // FUTURE // RENDER // GENAI // MUSIC // VIDEO // FUTURE // RENDER //
                    </div>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                <div className="mb-6 animate-bounce">
                    <span className="bg-zinc-900 border border-zinc-700 text-indigo-400 px-4 py-1 font-mono text-xs uppercase tracking-[0.2em] shadow-[0_0_10px_rgba(63,0,255,0.5)]">
                        BY YOUNEEQON
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9] uppercase">
                    YOUR VOICE, YOUR MUSIC, YOUR SONG <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F00FF] to-indigo-500 stroke-white stroke-2">
                        OUR AI VIDEO, JUST FOR YOU
                    </span>
                </h1>

                <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-zinc-400 font-light mb-12 border-l-4 border-[#3F00FF] pl-6 text-left">
                    We use generative engines to build <span className="text-white font-bold">music videos</span> that cost less and hit harder. No physical cameras. Just tech.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-md sm:max-w-none">
                    <a href="#contact" className="group relative px-8 py-5 bg-[#3F00FF] text-white font-black text-lg uppercase tracking-wider transition-all hover:bg-indigo-600 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
                        Initialize Project
                    </a>
                    <a href="#portfolio" className="group px-8 py-5 border-2 border-zinc-700 text-white font-bold text-lg uppercase tracking-wider hover:border-indigo-400 hover:text-indigo-400 transition-all flex items-center justify-center gap-2">
                        <Play className="w-5 h-5 fill-current" /> Demo
                    </a>
                </div>


            </div>
        </div>
    );
};

export default Hero;
