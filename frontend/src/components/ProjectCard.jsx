import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, genre, video, type, isVisible = true, index = 0 }) => {
    const delay = index * 0.15;

    return (
        <div
            className={`group relative block h-[400px] w-full bg-zinc-900 overflow-hidden border border-zinc-800 hover:border-[#3F00FF] transition-all duration-500 glow-border ${isVisible ? 'anim-fade-in-up' : 'anim-hidden'}`}
            style={{ animationDelay: `${0.3 + delay}s` }}
        >
            {video ? (
                video.includes('youtube.com') || video.includes('youtu.be') ? (
                    <iframe
                        src={video}
                        className="w-full h-full object-cover"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                ) : (
                    <video
                        src={video}
                        className="w-full h-full object-cover transition-all duration-500 scale-100 group-hover:scale-105"
                        controls
                        preload="metadata"
                        playsInline
                    />
                )
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-zinc-900">
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto border-2 border-zinc-700 rounded-full flex items-center justify-center group-hover:border-[#3F00FF] transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(63,0,255,0.3)]">
                            <svg className="w-8 h-8 text-zinc-700 group-hover:text-[#3F00FF] transition-colors duration-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                        </div>
                    </div>
                </div>
            )}

            {/* Gradient overlay with intensified hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none transition-opacity duration-500 group-hover:from-black/90"></div>

            {/* Card info - slides up on hover */}
            <div className="absolute bottom-12 left-0 w-full p-6 pointer-events-none transition-transform duration-500 group-hover:-translate-y-2">
                <span className="font-mono text-indigo-400 text-xs block mb-2">{type}</span>
                <h3 className="text-4xl font-black text-white uppercase italic leading-none drop-shadow-lg">{title}</h3>
                <p className="text-zinc-400 font-mono text-sm mt-2">{genre}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
