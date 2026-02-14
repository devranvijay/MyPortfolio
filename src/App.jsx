import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Education from './components/Education';
import CardNav from './components/CardNav';
import FloatingActions from './components/FloatingActions';

function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const navItems = [
        {
            label: "Home",
            links: [{ label: "Home", targetId: "hero" }]
        },
        {
            label: "Profile",
            links: [
                { label: "About Me", targetId: "about" },
                { label: "Experience", targetId: "experience" },
                { label: "Education", targetId: "education" }
            ]
        },
        {
            label: "Work",
            links: [
                { label: "Projects", targetId: "projects" },
                { label: "Skills", targetId: "skills" }
            ]
        },
        {
            label: "Contact",
            links: [
                { label: "Contact Me", targetId: "contact" }
            ]
        }
    ];

    return (
        <div className="bg-background text-foreground min-h-screen relative selection:bg-accent-violet selection:text-white font-sans antialiased">

            {/* Navigation */}
            <CardNav items={navItems} />

            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-accent-blue origin-left z-50"
                style={{ scaleX }}
            />

            <main className="relative z-10 flex flex-col w-full">
                <Hero />

                {/* Sections Wrapper */}
                <div className="flex flex-col w-full gap-0">
                    <div id="about" className="scroll-mt-20 w-full">
                        <About />
                    </div>

                    <div id="experience" className="scroll-mt-20 w-full bg-white/[0.02]">
                        <Experience />
                    </div>

                    <div id="education" className="scroll-mt-20 w-full">
                        <Education />
                    </div>

                    <div id="skills" className="scroll-mt-20 w-full bg-white/[0.02]">
                        <Skills />
                    </div>

                    <div id="projects" className="scroll-mt-20 w-full">
                        <Projects />
                    </div>

                    <div id="contact" className="scroll-mt-20 w-full bg-[#050505]">
                        <Contact />
                    </div>
                </div>
            </main>

            <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-[#050505]">
                <p>&copy; {new Date().getFullYear()} Ranvijay Singh. Built with precision.</p>
            </footer>

            <FloatingActions />
        </div>
    );
}

export default App;
