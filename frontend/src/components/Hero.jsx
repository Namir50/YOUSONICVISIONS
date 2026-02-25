import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 pt-20">
            {/* Grid Background */}
            <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

            {/* Animated Motion Graphics - AI & Music Theme */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Top Left - Floating Particles/Orbs with orbit */}
                <div className="absolute top-32 left-16 w-48 h-48 opacity-40 anim-orbit" style={{ animationDuration: '25s' }}>
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="20" cy="30" r="4" fill="#3F00FF" className="anim-particle-drift" />
                        <circle cx="50" cy="20" r="6" fill="#6366f1" className="anim-particle-drift" style={{ animationDelay: '0.3s' }} />
                        <circle cx="70" cy="40" r="3" fill="#3F00FF" className="anim-particle-drift" style={{ animationDelay: '0.6s' }} />
                        <circle cx="35" cy="60" r="5" fill="#8b5cf6" className="anim-particle-drift" style={{ animationDelay: '0.9s' }} />
                        <circle cx="60" cy="70" r="4" fill="#6366f1" className="anim-particle-drift" style={{ animationDelay: '1.2s' }} />
                        <circle cx="80" cy="80" r="3" fill="#3F00FF" className="anim-particle-drift" style={{ animationDelay: '1.5s' }} />
                    </svg>
                </div>

                {/* Top Right - Neural Network with orbit */}
                <div className="absolute top-24 right-16 w-40 h-40 opacity-35 anim-orbit" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
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

                {/* Additional floating particles */}
                <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#3F00FF] rounded-full anim-particle-drift opacity-30" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-indigo-500 rounded-full anim-particle-drift opacity-20" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-violet-400 rounded-full anim-particle-drift opacity-25" style={{ animationDelay: '2.5s' }}></div>

                {/* Scrolling ticker simulation */}
                <div className="absolute bottom-10 w-full overflow-hidden whitespace-nowrap opacity-40">
                    <div className="inline-block animate-[scroll_20s_linear_infinite] text-8xl font-black text-transparent stroke-text">
                    </div>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                {/* Badge - fadeInUp entrance */}
                <div className="mb-6 anim-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <span className="bg-zinc-900 border border-zinc-700 text-indigo-400 px-4 py-1 font-mono text-xs uppercase tracking-[0.2em] shadow-[0_0_10px_rgba(63,0,255,0.5)]">
                        BY YOUNEEQON
                    </span>
                </div>

                {/* Main heading with premium line-mask reveal */}
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9] uppercase">
                    <span className="block overflow-hidden">
                        <span
                            className="block opacity-0"
                            style={{
                                animation: 'lineMaskReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards'
                            }}
                        >
                            YOUR VOICE, YOUR MUSIC,
                        </span>
                    </span>
                    <span className="block overflow-hidden">
                        <span
                            className="block opacity-0"
                            style={{
                                animation: 'lineMaskReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards'
                            }}
                        >
                            YOUR SONG, YOUR BRAND.
                        </span>
                    </span>
                    <br />
                    <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F00FF] via-indigo-400 to-[#3F00FF] stroke-white stroke-2 inline-block"
                        style={{
                            backgroundSize: '200% auto'
                        }}
                    >
                        OUR AI VIDEO, JUST FOR YOU
                    </span>
                </h1>

                {/* Paragraph - fade in from left */}
                <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-zinc-400 font-light mb-12 border-l-4 border-[#3F00FF] pl-6 text-left anim-fade-in-left" style={{ animationDelay: '1.2s' }}>
                    We use generative AI to build <span className="text-white font-bold">music videos</span> and <span className="text-white font-bold">advertisements</span>  with catchy scripts that cost less and hit harder. No physical cameras. Just tech.
                </p>

                {/* CTA buttons with scaleIn + pulseGlow */}
                <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-md sm:max-w-none anim-fade-in-up" style={{ animationDelay: '1.5s' }}>
                    <a href="#contact" className="group relative px-8 py-5 bg-[#3F00FF] text-white font-black text-lg uppercase tracking-wider transition-all hover:bg-indigo-600 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] anim-pulse-glow" style={{ animationDelay: '2s' }}>
                        Initialize Project
                    </a>
                    <a href="#portfolio" className="group px-8 py-5 border-2 border-zinc-700 text-white font-bold text-lg uppercase tracking-wider hover:border-indigo-400 hover:text-indigo-400 transition-all flex items-center justify-center gap-2 anim-scale-in" style={{ animationDelay: '1.8s' }}>
                        <Play className="w-5 h-5 fill-current" /> Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
