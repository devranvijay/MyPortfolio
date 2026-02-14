import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const Projects = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px 0px" });
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "Integrated CRM & Finance System",
            category: "Full Stack Automation",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
            tech: ["Python", "Google Apps Script", "SQL", "Looker Studio"],
            desc: "Designed an end-to-end CRM and Finance Management System (FMS) handling sales pipelines, invoicing, and automated reconciliation for 500+ customer records.",
            stats: ["100% Tracking Accuracy", "40% Less Data Entry"],
            links: { live: "#", repo: "#" }
        },
        {
            title: "Business Intelligence Dashboard Suite",
            category: "Data Analytics",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            tech: ["Looker Studio", "Python", "SQL", "Pandas"],
            desc: "Built real-time dashboards visualizing sales trends, inventory levels, and financial KPIs by ETL-ing data from CRM and Inventory systems.",
            stats: ["67% Faster Reporting", "Real-time Insights"],
            links: { live: "#", repo: "#" }
        },
        {
            title: "Sales & Inventory Analytics",
            category: "Predictive Analysis",
            image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2600&auto=format&fit=crop",
            tech: ["Python", "NumPy", "EDA", "Statistical Analysis"],
            desc: "Conducted deep EDA to identify region-wise sales performance and optimize inventory, leading to data-driven strategic decisions.",
            stats: ["Optimized Inventory", "Regional Insights"],
            links: { live: "#", repo: "#" }
        }
    ];

    return (
        <section
            ref={containerRef}
            className="py-20 px-6 bg-background relative"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-sm font-mono text-accent-violet tracking-widest uppercase mb-4">Selected Work</h2>
                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">Featured Projects</h3>

                    <div className="flex flex-wrap justify-center gap-6 mb-8">
                        <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-gray-300 flex items-center gap-2">
                            <span className="text-accent-blue font-bold">10+</span> Dashboards Created
                        </div>
                        <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-gray-300 flex items-center gap-2">
                            <span className="text-accent-violet font-bold">15+</span> Projects Completed
                        </div>
                        <a href="https://github.com/devranvijay" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#24292e] hover:bg-[#2f363d] rounded-full border border-white/10 text-white flex items-center gap-2 transition-colors">
                            <Github size={18} /> View GitHub Profile
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.2 }}
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer group"
                        >
                            <SpotlightCard className="h-full bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500">
                                {/* Image Area */}
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs text-white border border-white/10">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-6">
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">{project.title}</h4>
                                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">{project.desc}</p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.slice(0, 3).map((t, i) => (
                                            <span key={i} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                                                {t}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">+{project.tech.length - 3}</span>
                                        )}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#0f0f0f] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 relative shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors z-20"
                            >
                                <X size={20} />
                            </button>

                            <div className="grid md:grid-cols-2">
                                <div className="h-64 md:h-auto relative">
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent md:bg-gradient-to-r" />
                                </div>

                                <div className="p-8 md:p-12 flex flex-col justify-center">
                                    <span className="text-accent-blue font-mono text-sm tracking-wider mb-2">{selectedProject.category}</span>
                                    <h3 className="text-3xl font-bold text-white mb-6">{selectedProject.title}</h3>

                                    <p className="text-gray-300 leading-relaxed mb-8">
                                        {selectedProject.desc}
                                    </p>

                                    <div className="space-y-4 mb-8">
                                        {selectedProject.stats.map((stat, i) => (
                                            <div key={i} className="flex items-center gap-3 text-gray-400">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-violet" />
                                                {stat}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {selectedProject.tech.map((t, i) => (
                                            <span key={i} className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm border border-white/5">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a href={selectedProject.links.live} className="flex-1 py-3 bg-accent-blue hover:bg-indigo-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors">
                                            <ExternalLink size={18} /> Live Demo
                                        </a>
                                        <a href={selectedProject.links.repo} className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors border border-white/10">
                                            <Github size={18} /> Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
