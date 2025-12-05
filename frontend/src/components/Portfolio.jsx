import React from 'react';
import { MoveRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Portfolio = () => {
    const [ref, isVisible] = useScrollAnimation();

    const projects = [
        { title: "Neon_Dystopia", genre: "Synthwave", type: "NARRATIVE", image: "https://images.unsplash.com/photo-1535402803947-a950d5f714eb?q=80&w=1000&auto=format&fit=crop" },
        { title: "Echo_Chamber", genre: "Alt Rock", type: "VISUALIZER", image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1000&auto=format&fit=crop" },
        { title: "Digital_Soul", genre: "Hyperpop", type: "CHARACTER", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" },
        { title: "Void_Loop", genre: "Techno", type: "ABSTRACT", image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000&auto=format&fit=crop" },
    ];

    return (
        <section
            id="portfolio"
            ref={ref}
            className={`py-24 bg-zinc-950 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
                    <div>
                        <span className="bg-white text-black px-2 py-1 font-mono text-xs font-bold uppercase mb-2 inline-block">Ideas</span>
                        <h2 className="text-5xl font-black text-white uppercase tracking-tighter">Our Projects</h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
