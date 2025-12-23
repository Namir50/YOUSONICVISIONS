import React from 'react';
import { MoveRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Portfolio = () => {
    const [ref, isVisible] = useScrollAnimation();
    // genre: "Full Music Video(LQ)"

    const projects = [
        { title: "For Music Masala", type: "Full Music Video(LQ)", video: "https://www.youtube.com/embed/Kko5D7YWN3w?si=TZiFQyz0ISSKoDjh" },
        { title: "Coming Soon", type: "Rap", video: null },
        { title: "Coming Soon", type: "Pop", video: null },
        { title: "Coming Soon", type: "Bollywood Romance", video: null },
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
