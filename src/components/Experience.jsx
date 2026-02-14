import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    const experienceData = [
        {
            company: "Brownwall Food Pvt Ltd",
            role: "Data Analyst & Automation Specialist",
            duration: "Dec 2024 – Jan 2026",
            location: "Mumbai, India",
            achievements: [
                "Built and maintained end-to-end ETL pipelines using Python & SQL, ensuring 99% data accuracy across CRM & FMS systems for 50+ users.",
                "Designed a custom CRM system using Google Apps Script, SQL & JavaScript to manage 500+ customer records, reducing manual data entry by 40%.",
                "Developed an Integrated Finance Management System (FMS) with automated approval workflows, expense tracking, and transaction reconciliation.",
                "Created 5+ real-time dashboards in Looker Studio for CRM analytics, inventory, and financial KPIs, reducing reporting turnaround time by 67% (3 days to 1 day).",
                "Implemented AWS (EC2, S3) and Redis caching to improve system response time by 30%.",
                "Automated 15+ business workflows, significantly improving efficiency across sales, operations & finance teams."
            ]
        }
    ];

    return (
        <section ref={ref} className="py-20 px-6 bg-background/50 relative z-10 w-full">
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-mono text-accent-blue tracking-widest uppercase mb-4">Career Path</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">Professional Experience</h3>
                </motion.div>

                <div className="flex flex-col gap-8 w-full">
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.2 }}
                            className="w-full"
                        >
                            <SpotlightCard className="w-full p-8 md:p-10 bg-black/40 backdrop-blur-md border border-white/5 hover:border-accent-blue/30 transition-colors">
                                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6 border-b border-white/5 pb-6">
                                    <div>
                                        <h4 className="text-2xl font-bold text-white mb-2">{exp.role}</h4>
                                        <p className="text-accent-blue text-lg font-medium">{exp.company}</p>
                                    </div>
                                    <div className="text-right md:text-right text-left">
                                        <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 font-mono mb-2">{exp.duration}</span>
                                        <span className="block text-sm text-gray-400">{exp.location}</span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-1 gap-4">
                                    <ul className="space-y-4">
                                        {exp.achievements.map((item, i) => (
                                            <li key={i} className="text-gray-300 text-base leading-relaxed flex items-start gap-3">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-violet flex-shrink-0 shadow-[0_0_8px_rgba(167,139,250,0.5)]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
