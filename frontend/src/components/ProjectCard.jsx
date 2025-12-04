import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, genre, image, type }) => (
    <div className="group relative block h-[400px] w-full bg-zinc-900 overflow-hidden border border-zinc-800 hover:border-[#3F00FF] transition-colors">
        <img
            src={image}
            alt={title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors"></div>

        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
            <div className="flex items-center justify-between border-b border-zinc-700 pb-4 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="font-mono text-indigo-400 text-xs">{type}</span>
                <ArrowRight className="text-white w-5 h-5" />
            </div>
            <h3 className="text-4xl font-black text-white uppercase italic leading-none">{title}</h3>
            <p className="text-zinc-400 font-mono text-sm mt-2">{genre}</p>
        </div>
    </div>
);

export default ProjectCard;
