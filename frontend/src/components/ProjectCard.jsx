import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, genre, video, type }) => (
    <div className="group relative block h-[400px] w-full bg-zinc-900 overflow-hidden border border-zinc-800 hover:border-[#3F00FF] transition-colors">
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
                    <div className="w-16 h-16 mx-auto mb-4 border-2 border-zinc-700 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-zinc-700" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                    </div>
                    <p className="text-zinc-600 font-mono text-sm">Video Placeholder</p>
                </div>
            </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

        <div className="absolute bottom-12 left-0 w-full p-6 pointer-events-none">
            <span className="font-mono text-indigo-400 text-xs block mb-2">{type}</span>
            <h3 className="text-4xl font-black text-white uppercase italic leading-none drop-shadow-lg">{title}</h3>
            <p className="text-zinc-400 font-mono text-sm mt-2">{genre}</p>
        </div>
    </div>
);

export default ProjectCard;
