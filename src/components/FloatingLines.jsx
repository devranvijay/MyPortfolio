import React, { useRef, useEffect } from "react";

// Simplified version of a floating lines effect
const FloatingLines = ({ lineCount = 5, enabledWaves = [] }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        let width = (canvas.width = canvas.parentElement.clientWidth);
        let height = (canvas.height = canvas.parentElement.clientHeight);

        const waves = [];
        // Generate waves
        for (let i = 0; i < lineCount; i++) {
            waves.push({
                y: height / 2 + (Math.random() - 0.5) * 200,
                length: 0.005 + Math.random() * 0.01,
                amplitude: 20 + Math.random() * 40,
                frequency: 0.01 + Math.random() * 0.02,
                phase: Math.random() * Math.PI * 2,
                speed: 0.02 + Math.random() * 0.02
            });
        }

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            ctx.strokeStyle = "rgba(100, 149, 237, 0.1)"; // accent-blue-ish
            ctx.lineWidth = 1;

            waves.forEach(wave => {
                ctx.beginPath();
                for (let x = 0; x < width; x++) {
                    const y = wave.y + Math.sin(x * wave.length + wave.phase) * wave.amplitude * Math.sin(wave.frequency * animationFrameId * 0.05); // Simple oscillation
                    ctx.lineTo(x, y);
                }
                ctx.stroke();
                wave.phase += wave.speed;
            });

            animationFrameId = requestAnimationFrame(render);
        };

        const handleResize = () => {
            width = canvas.width = canvas.parentElement.clientWidth;
            height = canvas.height = canvas.parentElement.clientHeight;
        };

        window.addEventListener("resize", handleResize);
        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
        };
    }, [lineCount]);

    return <canvas ref={canvasRef} className="w-full h-full block" />;
};

export default FloatingLines;
