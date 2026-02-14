import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Send, ExternalLink, Loader2, MessageCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
    const formRef = useRef(null);
    const isInView = useInView(formRef, { once: true, margin: "-100px 0px" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null); // 'success', 'error', null

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setStatus('success');
    };

    return (
        <section className="py-20 px-4 bg-background relative overflow-hidden flex flex-col items-center justify-center">
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-violet/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's work together.</h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and ideas.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                            <h3 className="text-lg font-semibold text-white mb-4">Contact Details</h3>
                            <div className="space-y-4">
                                <a href="mailto:ranvijay3325778@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-accent-blue transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Mail size={18} />
                                    </div>
                                    <span className="text-sm">ranvijay3325778@gmail.com</span>
                                </a>
                                <div className="flex items-center gap-4 text-gray-300 group">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <MessageCircle size={18} />
                                    </div>
                                    <span className="text-sm">+91 8928375489</span>
                                </div>
                                <a href="https://linkedin.com/in/ranvijay46" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-accent-blue transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Linkedin size={18} />
                                    </div>
                                    <span className="text-sm">/in/ranvijay46</span>
                                </a>
                                {/* Removed Github link as per explicit new details request not providing one, but keeping the component ready in case. Wait, user did not provide GitHub in new details. I will remove it to be precise. */}
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-violet/20 border border-white/10 backdrop-blur-md">
                            <h3 className="text-white font-semibold mb-2">Looking for a Data Expert?</h3>
                            <p className="text-gray-300 text-sm mb-4">
                                I'm currently available for freelance projects and full-time roles.
                            </p>
                            <a href="mailto:ranvijay3325778@gmail.com" className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all">
                                Start a conversation <ArrowRight size={16} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                    >
                        {status === 'success' ? (
                            <div className="p-8 rounded-2xl bg-green-500/10 border border-green-500/20 text-center">
                                <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
                                <p className="text-gray-300">Thanks for reaching out. I'll get back to you shortly.</p>
                                <button onClick={() => setStatus(null)} className="mt-4 text-sm text-green-400 hover:underline">Send another</button>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all resize-none"
                                        placeholder="How can I help you?"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? <Loader2 className="animate-spin" /> : <>Send Message <Send size={18} /></>}
                                </button>
                            </>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
