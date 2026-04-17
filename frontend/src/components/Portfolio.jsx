import React from 'react';
import { MoveRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { useStaggerAnimation } from '../hooks/useScrollAnimation';

const Portfolio = () => {
    const [ref, isVisible] = useStaggerAnimation();

    const projects = [
        { title: "Demo Video", type: "Brand advertisement", video: "https://www.youtube.com/embed/DFjoz8yBEcI?si=e-Rp1bQy-lhGZG9u" },
        { title: "Demo Video", type: "Full Music Video(HQ)", video: "https://www.youtube.com/embed/zbkYHNqY-qU?si=bsRO943p2FJrsmpY" },
        { title: "Demo Video", type: "Full Music Video(HQ)", video: "https://www.youtube.com/embed/b-BcPMeHMyU?si=B4kGTOwzSMQUKSjS" },
        { title: "Demo Video", type: "Product advertisement", video: "https://www.youtube.com/embed/7VTrQeGy6z8?si=3RiDcusLMm2Yf2Ir" },
        { title: "Demo Video", type: "Brand advertisement", video: "https://www.youtube.com/embed/a6aWg-LIBhg?si=Ucf2oT4Hggnkmz30" },
    ];

    return (
        <section
            id="portfolio"
            ref={ref}
            className="py-24 bg-zinc-950"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
                    <div>
                        <span className={`bg-white text-black px-2 py-1 font-mono text-xs font-bold uppercase mb-2 inline-block ${isVisible ? 'anim-scale-in' : 'anim-hidden'}`}>Ideas</span>
                        <h2 className={`text-5xl font-black text-white uppercase tracking-tighter ${isVisible ? 'anim-text-reveal stagger-2' : 'anim-hidden'}`}>Our Projects</h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} isVisible={isVisible} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
