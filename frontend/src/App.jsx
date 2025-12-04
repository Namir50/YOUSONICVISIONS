import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MonetizationBanner from './components/MonetizationBanner';
import Benefits from './components/Benefits';
import Portfolio from './components/Portfolio';
import ServiceList from './components/ServiceList';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-[#3F00FF] selection:text-white">
            <Navbar />
            <Hero />
            <MonetizationBanner />
            <Benefits />
            <Portfolio />
            <ServiceList />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
