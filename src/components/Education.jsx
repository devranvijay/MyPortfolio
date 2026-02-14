import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    const educationData = [
        {
            degree: "Bachelor of Science – Computer Science",
            school: "R J College of Arts, Science & Commerce",
            year: "2021 – 2024",
            grade: "CGPA: 8.64 / 10",
            desc: "Comprehensive coursework in programming, data structures, and database management."
        },
        {
            degree: "Higher Secondary Certificate (HSC)",
            school: "R J College of Arts, Science & Commerce",
            year: "2019 – 2021",
            grade: "83.40%",
            desc: "Specialized in Science stream."
        },
        {
            degree: "Secondary School Certificate (SSC)",
            school: "Shivam Vidya Mandir, Mumbai",
            year: "2018 – 2019",
            grade: "87.80%",
            desc: "Foundation in Mathematics and Science."
        }
    ];

    return (
        <section ref={ref} className="py-20 px-6 bg-background relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-mono text-accent-blue tracking-widest uppercase mb-4">Academic Background</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">Education</h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SpotlightCard className="h-full p-8 bg-[#0a0a0a] border border-white/5 hover:border-white/10 group">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent-blue mb-6 group-hover:scale-110 transition-transform">
                                    <GraduationCap size={24} />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-2">{item.degree}</h4>
                                <p className="text-accent-blue text-sm mb-4">{item.school}</p>
                                <div className="flex justify-between items-center text-xs text-gray-500 border-t border-white/5 pt-4 mt-4">
                                    <span>{item.year}</span>
                                    <span className="text-gray-300 font-bold">{item.grade}</span>
                                </div>
                                <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                                    {item.desc}
                                </p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
