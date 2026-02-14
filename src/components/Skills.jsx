import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
// Consolidated imports for skills
import {
    Code, Database, Server, Globe, Workflow, PenTool, Layout, Terminal,
    Cpu, BarChart, HardDrive, Share2, Layers, Zap, Brain
} from 'lucide-react';
import LogoLoop from './LogoLoop';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Updated Logos
    const techLogos = [
        { node: <Code />, title: "Python" },
        { node: <Database />, title: "SQL" },
        { node: <Code />, title: "JavaScript" },
        { node: <Share2 />, title: "Google Apps Script" },
        { node: <Database />, title: "MySQL" },
        { node: <HardDrive />, title: "MongoDB" },
        { node: <Cpu />, title: "Redis" },
        { node: <Server />, title: "AWS" },
        { node: <BarChart />, title: "Looker Studio" },
        { node: <BarChart />, title: "Tableau" },
        { node: <BarChart />, title: "Power BI" },
        { node: <Layout />, title: "Sheets" },
    ];

    const expertises = [
        {
            title: "Data Analysis & EDA",
            desc: "Comprehensive Exploratory Data Analysis (EDA), Statistical Analysis, Regression, A/B Testing, and Trend Analysis to derive actionable insights.",
            icon: BarChart
        },
        {
            title: "Data Engineering & ETL",
            desc: "Building robust Data Pipelines, ETL Workflows, Ingestion, Validation, Cleaning, and Transformation using Python and SQL.",
            icon: Database
        },
        {
            title: "Business Intelligence",
            desc: "Designing interactive Dashboards and KPI systems using Looker Studio, Tableau, and Power BI for real-time decision making.",
            icon: Globe
        },
        {
            title: "Backend & Automation",
            desc: "Developing Workflow Automation and CRM systems using Google Apps Script, Python, and scalable Cloud Architectures (AWS).",
            icon: Server
        },
        {
            title: "AI & LLM Acceleration",
            desc: "Leveraging cutting-edge AI tools and GenAI to accelerate development cycles, automate complex coding tasks, and enhance productivity by 2x.",
            icon: Brain // or Zap
        }
    ];

    return (
        <section
            ref={ref}
            className="py-20 px-6 bg-background relative overflow-hidden"
        >
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="text-sm font-mono text-accent-violet tracking-widest uppercase mb-4">My Toolbox</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">Tech Stack & Expertise</h3>
                </motion.div>

                {/* Scrolling Logos */}
                <div className="mb-20">
                    <div className="glass p-8 rounded-3xl border border-white/5">
                        <LogoLoop logos={techLogos} speed={30} direction="left" />
                    </div>
                </div>

                {/* Expertise Grid - Spotlight Effect */}
                {/* Adjusted grid to center the 5th item if needed, or just standard grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-center">
                    {expertises.map((item, i) => (
                        <div
                            key={i}
                            className="relative group bg-[#111] p-1 rounded-3xl h-full"
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Hover Gradient Border - distinct color for AI card? Maybe */}
                            <div
                                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${i === 4 ? 'from-emerald-400 to-cyan-500' : 'from-accent-blue to-accent-violet'} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
                            />

                            <div className="relative h-full bg-[#0f0f0f] p-6 rounded-[22px] flex flex-col items-start border border-white/5 overflow-hidden">
                                {/* Icon Background */}
                                <div className={`mb-4 p-3 rounded-2xl bg-white/5 text-white ${i === 4 ? 'group-hover:bg-emerald-500' : 'group-hover:bg-accent-blue'} group-hover:text-black transition-colors duration-300`}>
                                    <item.icon size={24} />
                                </div>

                                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>

                                {/* Shine Effect */}
                                <div className="absolute -top-[200%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-b from-transparent via-white/5 to-transparent rotate-45 translate-y-[200%] group-hover:translate-y-0 transition-transform duration-1000 ease-in-out pointer-events-none" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
