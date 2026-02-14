import React from 'react';
import { motion } from 'framer-motion';

const LogoLoop = ({ logos, speed = 20, direction = "left" }) => {
    const duplicatedLogos = [...logos, ...logos, ...logos];

    return (
        <div className="relative overflow-hidden w-full mask-linear-gradient">
            <motion.div
                className="flex gap-12 whitespace-nowrap"
                animate={{
                    x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
            >
                {duplicatedLogos.map((logo, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 group cursor-pointer text-gray-500 hover:text-white transition-colors duration-300">
                        <div className="w-8 h-8 md:w-10 md:h-10">
                            {React.cloneElement(logo.node, { size: '100%' })}
                        </div>
                        <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                            {logo.title}
                        </span>
                    </div>
                ))}
            </motion.div>

            {/* Gradient Masks */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
    );
};

export default LogoLoop;
