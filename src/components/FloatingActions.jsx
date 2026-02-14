import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActions = () => {
    // Correct details
    const whatsappNumber = "918928375489";
    const emailAddress = "ranvijay3325778@gmail.com";

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after a short delay or scroll
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center"
                >
                    {/* Email Float */}
                    <a
                        href={`mailto:${emailAddress}`}
                        className="w-10 h-10 bg-[#1a1a1a] border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg group relative"
                        aria-label="Send Email"
                    >
                        <Mail size={18} />
                        <span className="absolute right-full mr-3 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                            Email Me
                        </span>
                    </a>

                    {/* WhatsApp Float */}
                    <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white hover:bg-[#20bd5a] transition-all duration-300 shadow-xl hover:scale-110 group relative"
                        aria-label="Chat on WhatsApp"
                    >
                        <MessageCircle size={28} fill="white" />

                        {/* Pulse Effect */}
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10"></span>

                        <span className="absolute right-full mr-3 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                            Chat on WhatsApp
                        </span>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingActions;
