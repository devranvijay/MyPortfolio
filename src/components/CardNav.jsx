import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const CardNav = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between h-full">

                {/* Logo Area */}
                <div
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => handleScroll('hero')}
                >
                    <div className="w-8 h-8 bg-accent-blue rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                        <span className="text-white font-bold text-sm">R</span>
                    </div>
                    <span className="font-bold tracking-tight text-xl text-white">Ranvijay</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="relative group/menu"
                            onMouseEnter={() => setActiveItem(index)}
                            onMouseLeave={() => setActiveItem(null)}
                        >
                            {/* Main Label Button */}
                            <button
                                onClick={() => {
                                    if (item.links.length === 1) handleScroll(item.links[0].targetId);
                                }}
                                className="text-sm font-medium text-gray-400 hover:text-accent-blue transition-colors relative py-2"
                            >
                                {item.label}
                            </button>

                            {/* Dropdown (Only if more than 1 link) */}
                            {item.links.length > 1 && (
                                <AnimatePresence>
                                    {activeItem === index && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-xl z-50 p-1"
                                        >
                                            {item.links.map((link, i) => (
                                                <button
                                                    key={i}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleScroll(link.targetId);
                                                    }}
                                                    className="block w-full text-left px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                                >
                                                    {link.label}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-gray-300 hover:text-white"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-0 right-0 bg-[#0a0a0a] border-b border-white/10 p-4 shadow-2xl md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col gap-2">
                            {items.map((item, index) => (
                                <div key={index} className="py-2 border-b border-white/5 last:border-0">
                                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{item.label}</div>
                                    {item.links.map((link, i) => (
                                        <button
                                            key={i}
                                            onClick={() => handleScroll(link.targetId)}
                                            className="block w-full text-left py-2 px-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg text-sm"
                                        >
                                            {link.label}
                                        </button>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default CardNav;
