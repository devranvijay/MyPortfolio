import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FloatingLines from './FloatingLines';
import profileImg from '../assets/profile.jpg';
import { ArrowRight, Database, TrendingUp } from 'lucide-react';

const Hero = () => {
    const ref = useRef(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section
            id="hero"
            ref={ref}
            className="relative min-h-[90vh] w-full flex flex-col items-center justify-center overflow-visible bg-background pt-28 md:pt-36 pb-12"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0 pointer-events-none" />

            {/* Floating Lines Animation */}
            <div className="absolute inset-0 z-0 opacity-40">
                <FloatingLines
                    enabledWaves={["top", "middle", "bottom"]}
                    lineCount={9}
                    lineDistance={3}
                    bendRadius={10}
                    bendStrength={-0.2}
                    interactive={true}
                    parallax={true}
                />
            </div>

            <div className="z-10 container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        style={{ y: y1 }}
                        className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        {/* Hello Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-blue/20 bg-accent-blue/5 text-accent-blue text-[10px] font-bold tracking-widest uppercase mb-6"
                        >
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-blue"></span>
                            </span>
                            Hello, I'm Ranvijay
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-4xl lg:text-6xl font-bold leading-[1.1] mb-4 text-white"
                        >
                            Turning raw <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-violet">data</span> into intelligence.
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-base lg:text-lg text-gray-400 leading-relaxed mb-8 max-w-lg"
                        >
                            Leveraging Python, SQL, and Advanced Analytics to build automated pipelines and business intelligence solutions that drive growth.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-3 items-center sm:items-center w-full sm:w-auto"
                        >
                            <a
                                href="#projects"
                                className="px-6 py-3 bg-accent-blue hover:bg-indigo-600 text-white text-sm font-semibold rounded-full transition-all flex items-center gap-2 shadow-lg shadow-accent-blue/25 w-full sm:w-auto justify-center"
                            >
                                Explore Work
                                <ArrowRight size={16} />
                            </a>
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-transparent border border-white/10 hover:border-accent-blue/50 text-white text-sm font-semibold rounded-full transition-all w-full sm:w-auto justify-center"
                            >
                                Get in touch
                            </a>
                        </motion.div>

                        {/* Tech Stack Pills */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="mt-10 pt-6 border-t border-white/5 flex flex-wrap gap-4 opacity-60 justify-center lg:justify-start"
                        >
                            <span className="text-xs font-medium flex items-center gap-1.5 text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Python
                            </span>
                            <span className="text-xs font-medium flex items-center gap-1.5 text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span> SQL
                            </span>
                            <span className="text-xs font-medium flex items-center gap-1.5 text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> PySpark
                            </span>
                            <span className="text-xs font-medium flex items-center gap-1.5 text-gray-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Tableau
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Image & Floating Cards */}
                    <motion.div
                        style={{ y: y2 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="order-1 lg:order-2 relative group flex justify-center lg:block"
                    >
                        <div className="absolute -inset-4 bg-accent-blue/20 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="relative max-w-[280px] lg:max-w-[400px] mx-auto">
                            {/* Rotating Rings */}
                            <div className="absolute inset-0 border border-white/5 rounded-full scale-110 animate-[spin_20s_linear_infinite]"></div>
                            <div className="absolute inset-0 border border-white/5 rounded-full scale-125 animate-[spin_35s_linear_infinite_reverse]"></div>

                            {/* Profile Image */}
                            <div className="rounded-full overflow-hidden border-2 border-white/10 p-2 bg-gradient-to-br from-white/10 to-transparent relative z-10 bg-black">
                                <img
                                    src={profileImg}
                                    alt="Ranvijay Singh"
                                    className="w-full h-auto aspect-square object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl scale-105"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/400x400/333/fff?text=RS";
                                    }}
                                />
                            </div>

                            {/* Floating Card 1: Impact Driven */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.2, duration: 0.8 }}
                                className="absolute -bottom-4 -left-4 lg:-left-4 bg-[#0a0a0a] p-3 rounded-xl shadow-xl border border-white/10 flex items-center gap-2 z-20"
                            >
                                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                    <TrendingUp size={16} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">Impact Driven</p>
                                    <p className="text-xs font-bold text-white">Business Intelligence</p>
                                </div>
                            </motion.div>

                            {/* Floating Card 2: Expertise */}
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.4, duration: 0.8 }}
                                className="absolute top-6 -right-4 lg:-right-4 bg-[#0a0a0a] p-3 rounded-xl shadow-xl border border-white/10 flex items-center gap-2 z-20"
                            >
                                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                    <Database size={16} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">Expertise</p>
                                    <p className="text-xs font-bold text-white">Big Data Pipelines</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
