import React, { useState, useCallback, useEffect } from 'react';
import { Mail, Music, Loader } from 'lucide-react';
import CustomAlert from './CustomAlert';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        label_name: '',
        duration: '',
        video_type: '',
        email: '',
        phone: '',
        video_idea: ''
    });
    const [generatedTreatment, setGeneratedTreatment] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertType, setAlertType] = useState('success');

    const handleAlertClose = useCallback(() => setAlertMessage(null), []);

    // Read video type from URL hash and scroll to contact section
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;

            // Check if hash contains contact with parameters
            if (hash.includes('#contact')) {
                const params = new URLSearchParams(hash.split('?')[1]);
                const videoType = params.get('videoType');

                if (videoType) {
                    // Update form data with video type
                    setFormData(prev => ({
                        ...prev,
                        video_type: videoType.replace(/_/g, ' ')
                    }));
                }

                // Scroll to contact section
                setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            }
        };

        // Handle on mount
        handleHashChange();

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const generateTreatment = async () => {
        if (!formData.video_idea.trim()) {
            setAlertMessage("Video idea/visual data is required to generate a treatment.");
            setAlertType('error');
            return;
        }

        setIsLoading(true);
        setGeneratedTreatment(null);
        setAlertMessage(null);

        try {
            const response = await fetch('/api/expand-vibe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    vibe_description: formData.video_idea
                })
            });

            if (response.ok) {
                const result = await response.json();
                setGeneratedTreatment(result.treatment);
                setAlertMessage("Visual Treatment successfully generated!");
                setAlertType('success');
            } else {
                const error = await response.json();
                setAlertMessage(error.detail || "Failed to generate treatment");
                setAlertType('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setAlertMessage("Failed to connect to backend. Make sure the backend server is running.");
            setAlertType('error');
        }

        setIsLoading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.name || !formData.email || !formData.phone || !formData.duration || !formData.video_type || !formData.video_idea) {
            setAlertMessage("Please fill in all required fields.");
            setAlertType('error');
            return;
        }

        setIsSubmitting(true);
        setAlertMessage(null);

        try {
            const response = await fetch('/api/submit-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    generated_treatment: generatedTreatment || "Not generated"
                })
            });

            if (response.ok) {
                const result = await response.json();
                setAlertMessage(result.message);
                setAlertType('success');

                // Reset form
                setFormData({
                    name: '',
                    label_name: '',
                    duration: '',
                    video_type: '',
                    email: '',
                    phone: '',
                    video_idea: ''
                });
                setGeneratedTreatment(null);
            } else {
                const error = await response.json();
                setAlertMessage(error.detail || "Failed to submit form");
                setAlertType('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setAlertMessage("Failed to connect to backend. Make sure the backend server is running.");
            setAlertType('error');
        }

        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-32 bg-zinc-950 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#3F00FF] to-transparent"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-16 relative">
                    <div className="absolute top-0 right-0 p-4">
                        <div className="grid grid-cols-2 gap-1">
                            {[...Array(4)].map((_, i) => <div key={i} className="w-1 h-1 bg-[#3F00FF]"></div>)}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-5xl font-black text-white mb-6 uppercase leading-none">FilL YOUR DETAILS</h2>
                            <p className="text-zinc-400 mb-10 text-lg leading-relaxed">
                                Fill the parameters. We process the request and will connect with you. <br />
                                Tech. Reliable. Cost-effective.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <Mail className="text-indigo-400 mt-1 w-6 h-6" />
                                    <div>
                                        <p className="text-xs font-mono text-zinc-500 uppercase">Communication Channel</p>
                                        <p className="font-bold text-white text-xl">hello@yousonicvision.ai</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Music className="text-indigo-400 mt-1 w-6 h-6" />
                                    <div>
                                        <p className="text-xs font-mono text-zinc-500 uppercase">Base of Operations</p>
                                        <p className="font-bold text-white text-xl">Mumbai, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-xs font-mono text-indigo-400 uppercase mb-2">Your Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full bg-zinc-950 border-b-2 border-zinc-700 p-4 text-white focus:outline-none focus:border-[#3F00FF] transition-colors font-bold"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-indigo-400 uppercase mb-2">Label Name (Optional)</label>
                                <input
                                    type="text"
                                    name="label_name"
                                    value={formData.label_name}
                                    onChange={handleInputChange}
                                    className="w-full bg-zinc-950 border-b-2 border-zinc-700 p-4 text-white focus:outline-none focus:border-[#3F00FF] transition-colors font-bold"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-indigo-400 uppercase mb-2">Song Duration *</label>
                                <input
                                    type="text"
                                    name="duration"
                                    value={formData.duration}
                                    onChange={handleInputChange}
                                    className="w-full bg-zinc-950 border-b-2 border-zinc-700 p-4 text-white focus:outline-none focus:border-[#3F00FF] transition-colors font-bold"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-indigo-400 uppercase mb-2">Video Type *</label>
                                <select
                                    name="video_type"
                                    value={formData.video_type}
                                    onChange={handleInputChange}
                                    className="w-full bg-zinc-950 border-b-2 border-zinc-700 p-4 text-white focus:outline-none focus:border-[#3F00FF] transition-colors font-bold"
                                    required
                                >
                                    <option value="">Select Video Type</option>
                                    <option value="FULL MUSIC VIDEO">FULL MUSIC VIDEO</option>
                                    <option value="REEL VIDEO">REEL VIDEO</option>
                                    <option value="LYRICAL VIDEO">LYRICAL VIDEO</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-indigo-400 uppercase mb-2">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full bg-zinc-950 border-b-2 border-zinc-700 p-4 text-white focus:outline-none focus:border-[#3F00FF] transition-colors font-bold"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-indigo-400 uppercase mb-2">Phone Number *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full bg-zinc-950 border-b-2 border-zinc-700 p-4 text-white focus:outline-none focus:border-[#3F00FF] transition-colors font-bold"
                                    required
                                />
                            </div>

                            {/* Video Idea / Visual Data with Gemini Feature */}
                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <label className="block text-xs font-mono text-indigo-400 uppercase">Video Idea / Visual Data *</label>
                                    <button
                                        type="button"
                                        onClick={generateTreatment}
                                        disabled={isLoading}
                                        className={`flex items-center text-xs font-black uppercase px-3 py-1 transition-all ${isLoading ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed' : 'bg-[#3F00FF] text-white hover:bg-white hover:text-[#3F00FF] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none border-2 border-transparent'}`}
                                    >
                                        {isLoading ? (
                                            <Loader className="w-4 h-4 mr-1 animate-spin" />
                                        ) : (
                                            '✨ Expand Vibe'
                                        )}
                                    </button>
                                </div>

                                <textarea
                                    rows="3"
                                    name="video_idea"
                                    value={formData.video_idea}
                                    onChange={handleInputChange}
                                    className="w-full bg-zinc-950 border-b-2 border-zinc-700 p-4 text-white focus:outline-none focus:border-[#3F00FF] transition-colors font-bold resize-none"
                                    required
                                ></textarea>
                            </div>

                            {/* Generated Visual Treatment Output */}
                            {generatedTreatment && (
                                <div className="mt-8 pt-6 border-t border-zinc-700">
                                    <h4 className="text-xs font-mono text-indigo-400 uppercase mb-3">AI Visual Treatment Draft:</h4>
                                    <div className="bg-zinc-950 p-4 border border-[#3F00FF]/50 text-sm text-zinc-300 whitespace-pre-line rounded-lg">
                                        {generatedTreatment}
                                    </div>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full font-black uppercase py-5 text-lg transition-colors tracking-widest ${isSubmitting ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed' : 'bg-[#3F00FF] text-white hover:bg-white hover:text-[#3F00FF]'}`}
                            >
                                {isSubmitting ? 'Transmitting...' : 'Transmit Data'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <CustomAlert message={alertMessage} type={alertType} onClose={handleAlertClose} />
        </section>
    );
};

export default Contact;
