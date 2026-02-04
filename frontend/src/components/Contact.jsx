import React, { useState, useCallback, useEffect } from 'react';
import { Mail, Music, Loader, Video, Megaphone } from 'lucide-react';
import CustomAlert from './CustomAlert';

const Contact = () => {
    const [activeTab, setActiveTab] = useState('music_video'); // 'music_video' or 'advertisement'

    const [musicVideoForm, setMusicVideoForm] = useState({
        name: '',
        label_name: '',
        duration: '',
        video_type: '',
        email: '',
        phone: '',
        video_idea: ''
    });

    const [adForm, setAdForm] = useState({
        name: '',
        company_name: '',
        ad_duration: '',
        lip_sync_required: '',
        email: '',
        phone: ''
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
                    // Check if it's an advertisement type
                    if (videoType.toLowerCase().includes('advertisement')) {
                        setActiveTab('advertisement');
                    } else {
                        setActiveTab('music_video');
                        // Update form data with video type
                        setMusicVideoForm(prev => ({
                            ...prev,
                            video_type: videoType.replace(/_/g, ' ')
                        }));
                    }
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

    const handleMusicVideoChange = (e) => {
        const { name, value } = e.target;
        setMusicVideoForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAdFormChange = (e) => {
        const { name, value } = e.target;
        setAdForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const generateTreatment = async () => {
        if (!musicVideoForm.video_idea.trim()) {
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
                    vibe_description: musicVideoForm.video_idea
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

    const handleMusicVideoSubmit = async (e) => {
        e.preventDefault();

        // Validate required fields
        if (!musicVideoForm.name || !musicVideoForm.email || !musicVideoForm.phone || !musicVideoForm.duration || !musicVideoForm.video_type || !musicVideoForm.video_idea) {
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
                    form_type: 'music_video',
                    ...musicVideoForm,
                    generated_treatment: generatedTreatment || "Not generated"
                })
            });

            if (response.ok) {
                const result = await response.json();
                setAlertMessage(result.message);
                setAlertType('success');

                // Reset form
                setMusicVideoForm({
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

    const handleAdSubmit = async (e) => {
        e.preventDefault();

        // Validate required fields
        if (!adForm.name || !adForm.company_name || !adForm.ad_duration || !adForm.lip_sync_required || !adForm.email || !adForm.phone) {
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
                    form_type: 'advertisement',
                    ...adForm
                })
            });

            if (response.ok) {
                const result = await response.json();
                setAlertMessage(result.message);
                setAlertType('success');

                // Reset form
                setAdForm({
                    name: '',
                    company_name: '',
                    ad_duration: '',
                    lip_sync_required: '',
                    email: '',
                    phone: ''
                });
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
                <div className="bg-zinc-900 border border-zinc-800 p-4 sm:p-8 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4">
                        <div className="grid grid-cols-2 gap-1">
                            {[...Array(4)].map((_, i) => <div key={i} className="w-1 h-1 bg-[#3F00FF]"></div>)}
                        </div>
                    </div>

                    <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16">
                        <div className="text-left">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase leading-none">FILL YOUR DETAILS</h2>
                            <p className="text-zinc-400 mb-10 text-base md:text-lg leading-relaxed">
                                Fill the parameters. We process the request and will connect with you. <br />
                                Tech. Reliable. Cost-effective.
                            </p>

                            <div className="space-y-6 md:space-y-8">
                                <div className="flex items-start gap-4">
                                    <Mail className="text-indigo-400 mt-1 w-6 h-6 flex-shrink-0" />
                                    <div className="text-left">
                                        <p className="text-xs font-mono text-zinc-500 uppercase">Communication Channel</p>
                                        <p className="font-bold text-white text-lg md:text-xl break-words">yousonicvisions@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Music className="text-indigo-400 mt-1 w-6 h-6 flex-shrink-0" />
                                    <div className="text-left">
                                        <p className="text-xs font-mono text-zinc-500 uppercase">Base of Operations</p>
                                        <p className="font-bold text-white text-lg md:text-xl">Mumbai, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            {/* Tab Switcher */}
                            <div className="flex mb-8 border-b border-zinc-700">
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('music_video')}
                                    className={`flex items-center gap-2 px-4 py-3 font-bold uppercase text-sm tracking-wider transition-all border-b-2 ${activeTab === 'music_video'
                                        ? 'border-[#3F00FF] text-white'
                                        : 'border-transparent text-zinc-500 hover:text-zinc-300'
                                        }`}
                                >
                                    <Video className="w-4 h-4" />
                                    AI Music Video
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('advertisement')}
                                    className={`flex items-center gap-2 px-4 py-3 font-bold uppercase text-sm tracking-wider transition-all border-b-2 ${activeTab === 'advertisement'
                                        ? 'border-[#3F00FF] text-white'
                                        : 'border-transparent text-zinc-500 hover:text-zinc-300'
                                        }`}
                                >
                                    <Megaphone className="w-4 h-4" />
                                    AI Advertisement Video
                                </button>
                            </div>

                            {/* Music Video Form */}
                            {activeTab === 'music_video' && (
                                <form className="space-y-6" onSubmit={handleMusicVideoSubmit}>
                                    <div>
                                        <label className="block text-xs font-mono text-indigo-400 uppercase mb-2">Your Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={musicVideoForm.name}
                                            onChange={handleMusicVideoChange}
                                            className="w-full bg-zinc-950 border-b-2 border-zinc-700 p-4 text-white focus:outline-none focus:border-[#3F00FF] transition-colors font-bold"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-indigo-400 uppercase mb-2">Label Name (Optional)</label>
                                        <input
                                            type="text"
                                            name="label_name"
                                            value={musicVideoForm.label_name}
                                            onChange={handleMusicVideoChange}
                                            className="w-full bg-zinc-950 border-b-2 border-zinc-700 p-4 text-white focus:outline-none focus:border-[#3F00FF] transition-colors font-bold"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-indigo-400 uppercase mb-2">Song Duration *</label>
                                        <div className="flex gap-3 items-center">
                                            <div className="flex-1">
                                                <input
                                                    type="number"
                                                    name="duration_minutes"
                                                    min="0"
                                                    max="59"
                                                    placeholder="MM"
                                                    value={musicVideoForm.duration.split(':')[0] || ''}
                                                    onChange={(e) => {
                                                        const minutes = e.target.value;
                                                        const seconds = musicVideoForm.duration.split(':')[1] || '';
                                                        setMusicVideoForm(prev => ({ ...prev, duration: minutes && seconds ? `${minutes}:${seconds}` : minutes ? `${minutes}:` : seconds ? `:${seconds}` : '' }));
                                                    }}
                                                    className="w-full bg-zinc-950 border-b-2 border-zinc-700 p-4 text-white text-center focus:outline-none focus:border-[#3F00FF] transition-colors font-bold"
                                                    required
                                                />
                                                <p className="text-xs text-zinc-500 text-center mt-1">Minutes</p>
                                            </div>
                                            <span className="text-white text-2xl font-bold">:</span>
                                            <div className="flex-1">
                                                <input
                                                    type="number"
                                                    name="duration_seconds"
                                                    min="0"
                                                    max="59"
                                                    placeholder="SS"
                                                    value={musicVideoForm.duration.split(':')[1] || ''}
                                                    onChange={(e) => {
                                                        const minutes = musicVideoForm.duration.split(':')[0] || '';
                                                        const seconds = e.target.value;
                                                        setMusicVideoForm(prev => ({ ...prev, duration: minutes && seconds ? `${minutes}:${seconds}` : minutes ? `${minutes}:` : seconds ? `:${seconds}` : '' }));
                                                    }}
                                                    className="w-full bg-zinc-950 border-b-2 border-zinc-700 p-4 text-white text-center focus:outline-none focus:border-[#3F00FF] transition-colors font-bold"
                                                    required
                                                />
                                                <p className="text-xs text-zinc-500 text-center mt-1">Seconds</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-indigo-400 uppercase mb-2">Video Type *</label>
                                        <select
                                            name="video_type"
                                            value={musicVideoForm.video_type}
                                            onChange={handleMusicVideoChange}
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
                                            value={musicVideoForm.email}
                                            onChange={handleMusicVideoChange}
                                            className="w-full bg-zinc-950 border-b-2 border-zinc-700 p-4 text-white focus:outline-none focus:border-[#3F00FF] transition-colors font-bold"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-indigo-400 uppercase mb-2">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={musicVideoForm.phone}
                                            onChange={handleMusicVideoChange}
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
                                                    '✨ AI Vibe Expand'
                                                )}
                                            </button>
                                        </div>

                                        <textarea
                                            rows="3"
                                            name="video_idea"
                                            value={musicVideoForm.video_idea}
                                            onChange={handleMusicVideoChange}
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
                            )}

                            {/* Advertisement Form */}
                            {activeTab === 'advertisement' && (
                                <form className="space-y-6" onSubmit={handleAdSubmit}>
                                    <div>
                                        <label className="block text-xs font-mono text-indigo-400 uppercase mb-2">Your Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={adForm.name}
                                            onChange={handleAdFormChange}
                                            className="w-full bg-zinc-950 border-b-2 border-zinc-700 p-4 text-white focus:outline-none focus:border-[#3F00FF] transition-colors font-bold"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-indigo-400 uppercase mb-2">Company Name *</label>
                                        <input
                                            type="text"
                                            name="company_name"
                                            value={adForm.company_name}
                                            onChange={handleAdFormChange}
                                            className="w-full bg-zinc-950 border-b-2 border-zinc-700 p-4 text-white focus:outline-none focus:border-[#3F00FF] transition-colors font-bold"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-indigo-400 uppercase mb-2">Ad Duration *</label>
                                        <div className="flex gap-3 items-center">
                                            <div className="flex-1">
                                                <input
                                                    type="number"
                                                    name="ad_duration_minutes"
                                                    min="0"
                                                    max="59"
                                                    placeholder="MM"
                                                    value={adForm.ad_duration.split(':')[0] || ''}
                                                    onChange={(e) => {
                                                        const minutes = e.target.value;
                                                        const seconds = adForm.ad_duration.split(':')[1] || '';
                                                        setAdForm(prev => ({ ...prev, ad_duration: minutes && seconds ? `${minutes}:${seconds}` : minutes ? `${minutes}:` : seconds ? `:${seconds}` : '' }));
                                                    }}
                                                    className="w-full bg-zinc-950 border-b-2 border-zinc-700 p-4 text-white text-center focus:outline-none focus:border-[#3F00FF] transition-colors font-bold"
                                                    required
                                                />
                                                <p className="text-xs text-zinc-500 text-center mt-1">Minutes</p>
                                            </div>
                                            <span className="text-white text-2xl font-bold">:</span>
                                            <div className="flex-1">
                                                <input
                                                    type="number"
                                                    name="ad_duration_seconds"
                                                    min="0"
                                                    max="59"
                                                    placeholder="SS"
                                                    value={adForm.ad_duration.split(':')[1] || ''}
                                                    onChange={(e) => {
                                                        const minutes = adForm.ad_duration.split(':')[0] || '';
                                                        const seconds = e.target.value;
                                                        setAdForm(prev => ({ ...prev, ad_duration: minutes && seconds ? `${minutes}:${seconds}` : minutes ? `${minutes}:` : seconds ? `:${seconds}` : '' }));
                                                    }}
                                                    className="w-full bg-zinc-950 border-b-2 border-zinc-700 p-4 text-white text-center focus:outline-none focus:border-[#3F00FF] transition-colors font-bold"
                                                    required
                                                />
                                                <p className="text-xs text-zinc-500 text-center mt-1">Seconds</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-indigo-400 uppercase mb-2">Lip Sync Required *</label>
                                        <div className="flex gap-6">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="lip_sync_required"
                                                    value="Yes"
                                                    checked={adForm.lip_sync_required === 'Yes'}
                                                    onChange={handleAdFormChange}
                                                    className="w-5 h-5 accent-[#3F00FF]"
                                                    required
                                                />
                                                <span className="text-white font-bold">Yes</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="lip_sync_required"
                                                    value="No"
                                                    checked={adForm.lip_sync_required === 'No'}
                                                    onChange={handleAdFormChange}
                                                    className="w-5 h-5 accent-[#3F00FF]"
                                                />
                                                <span className="text-white font-bold">No</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-indigo-400 uppercase mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={adForm.email}
                                            onChange={handleAdFormChange}
                                            className="w-full bg-zinc-950 border-b-2 border-zinc-700 p-4 text-white focus:outline-none focus:border-[#3F00FF] transition-colors font-bold"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-mono text-indigo-400 uppercase mb-2">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={adForm.phone}
                                            onChange={handleAdFormChange}
                                            className="w-full bg-zinc-950 border-b-2 border-zinc-700 p-4 text-white focus:outline-none focus:border-[#3F00FF] transition-colors font-bold"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full font-black uppercase py-5 text-lg transition-colors tracking-widest ${isSubmitting ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed' : 'bg-[#3F00FF] text-white hover:bg-white hover:text-[#3F00FF]'}`}
                                    >
                                        {isSubmitting ? 'Transmitting...' : 'Transmit Data'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <CustomAlert message={alertMessage} type={alertType} onClose={handleAlertClose} />
        </section>
    );
};

export default Contact;
