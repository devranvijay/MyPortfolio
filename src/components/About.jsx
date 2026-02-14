import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Code, Database, Globe } from 'lucide-react';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    const skills = [
        { name: "Python", icon: Code },
        { name: "SQL", icon: Database },
        { name: "Looker Studio", icon: Globe },
    ];

    return (
        <section
            ref={ref}
            className="py-16 px-6 bg-background relative z-10 border-t border-white/5"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                {/* Left Column: Heading & Key Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent-blue text-xs font-mono mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse"></span>
                        Based in Mumbai, India
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                        I'm Ranvijay Singh. <br />
                        <span className="text-gray-400">Data Analyst with 2+ years of experience.</span>
                    </h2>

                    <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                        Expert in end-to-end data solutions, ETL pipelines, and business intelligence automation.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill, i) => (
                            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/5 text-gray-200 text-sm font-medium">
                                <skill.icon size={14} className="text-accent-violet" />
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column: Narrative Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Decorative Corner */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-blue/10 rounded-full blur-2xl pointer-events-none" />

                    <div className="p-8 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-sm relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
                        <div className="relative z-10 text-gray-300 leading-relaxed text-base space-y-6">
                            <p>
                                I specialize in transforming complex data into <span className="text-white font-medium">actionable business strategies</span>.
                                At <span className="text-accent-blue">Brownwall Food Pvt Ltd</span>, I reduced operational inefficiencies by 40% and accelerated reporting cycles by 67%.
                            </p>
                            <p>
                                From building robust <span className="text-white font-medium">ETL pipelines</span> to designing real-time dashboards in Looker Studio,
                                I bridge the gap between technical execution and business growth.
                            </p>
                        </div>

                        {/* Subtle overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent-blue/5 opacity-50 pointer-events-none" />
                    </div>

                    <div className="hidden md:flex justify-end mt-4">
                        <a href="#experience" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors group">
                            See my journey <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
