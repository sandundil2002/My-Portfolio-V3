'use client';
import React, { useState, useEffect } from "react";
import { BackgroundLines } from "@/components/ui/BackgroundLines";

export function HomeSection() {
    const [mounted, setMounted] = useState(false);
    const roles = ["Full Stack Developer", "Devops Engineer", "Problem Solver", "Tech Enthusiast"];
    const [roleIndex, setRoleIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        setMounted(true);

        const roleInterval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);

        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => {
            clearInterval(roleInterval);
            clearInterval(cursorInterval);
        };
    }, []);

    return (
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-2 min-h-screen">
            <div className="relative z-20">
                <div className="hidden md:block absolute top-[-80px] left-[-60px] animate-float-slow">
                    <div className="px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-xs text-blue-200 border border-blue-500/30">
                        React
                    </div>
                </div>
                <div className="hidden md:block absolute bottom-[-60px] right-[-40px] animate-float">
                    <div className="px-3 py-1 bg-indigo-500/20 backdrop-blur-sm rounded-full text-xs text-indigo-200 border border-indigo-500/30">
                        Node.js
                    </div>
                </div>
                <div className="hidden md:block absolute top-[20px] right-[-80px] animate-float-medium">
                    <div className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-xs text-purple-200 border border-purple-500/30">
                        TypeScript
                    </div>
                </div>
                <div className="hidden md:block absolute top-[-40px] left-[40px] animate-float">
                    <div className="px-3 py-1 bg-orange-500/20 backdrop-blur-sm rounded-full text-xs text-orange-200 border border-orange-500/30">
                        Java
                    </div>
                </div>
                <div className="hidden md:block absolute bottom-[-20px] left-[-80px] animate-float-medium">
                    <div className="px-3 py-1 bg-yellow-500/20 backdrop-blur-sm rounded-full text-xs text-yellow-200 border border-yellow-500/30">
                        JavaScript
                    </div>
                </div>
                <div className="hidden md:block absolute top-[60px] left-[-100px] animate-float-slow">
                    <div className="px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full text-xs text-green-200 border border-green-500/30">
                        Python
                    </div>
                </div>
                <div className="hidden md:block absolute bottom-[20px] right-[40px] animate-float">
                    <div className="px-3 py-1 bg-cyan-500/20 backdrop-blur-sm rounded-full text-xs text-cyan-200 border border-cyan-500/30">
                        SQL
                    </div>
                </div>
                <div className="hidden md:block absolute top-[-100px] right-[20px] animate-float-medium">
                    <div className="px-3 py-1 bg-emerald-500/20 backdrop-blur-sm rounded-full text-xs text-emerald-200 border border-emerald-500/30">
                        Spring Boot
                    </div>
                </div>
                <div className="hidden md:block absolute bottom-[-80px] left-[20px] animate-float-slow">
                    <div className="px-3 py-1 bg-gray-500/20 backdrop-blur-sm rounded-full text-xs text-gray-200 border border-gray-500/30">
                        Next.js
                    </div>
                </div>

                <div className="hidden md:block absolute top-[-20px] right-[60px] animate-float-slow">
                    <div className="px-3 py-1 bg-teal-500/20 backdrop-blur-sm rounded-full text-xs text-teal-200 border border-teal-500/30">
                        Express.js
                    </div>
                </div>
                <div className="hidden md:block absolute bottom-[40px] left-[-40px] animate-float">
                    <div className="px-3 py-1 bg-pink-500/20 backdrop-blur-sm rounded-full text-xs text-pink-200 border border-pink-500/30">
                        PHP
                    </div>
                </div>
                <div className="hidden md:block absolute top-[80px] right-[-60px] animate-float-medium">
                    <div className="px-3 py-1 bg-red-500/20 backdrop-blur-sm rounded-full text-xs text-red-200 border border-red-500/30">
                        Laravel
                    </div>
                </div>
                <div className="hidden md:block absolute bottom-[-100px] right-[0px] animate-float-slow">
                    <div className="px-3 py-1 bg-sky-500/20 backdrop-blur-sm rounded-full text-xs text-sky-200 border border-sky-500/30">
                        Tailwind
                    </div>
                </div>

                <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-gray-200 to-blue-400 text-4xl md:text-6xl lg:text-8xl font-sans py-2 md:py-6 relative z-20 font-bold tracking-tight animate-title-reveal">
                    Sandun Dilshan
                </h1>

                <div className="flex justify-center items-center mt-2 mb-6">
                    <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-blue-500 animate-width-reveal"></div>
                    <p className="mx-4 text-gray-300 text-lg animate-subtitle-reveal">
                        Next Gen Digital Builder
                    </p>
                    <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-blue-500 animate-width-reveal"></div>
                </div>
            </div>

            <div className="h-8 flex items-center justify-center">
                <p className="text-lg md:text-xl text-gray-300 text-center animate-text-reveal flex items-center">
                    And, I&#39;m a <span className="text-blue-400 font-medium ml-2 typewriter-text">
                        {mounted ? roles[roleIndex] : "Full Stack Developer"}
                    {showCursor && <span className="cursor">|</span>}
                    </span>
                </p>
            </div>

            <div className="mt-8 animate-button-reveal">
                <a
                    href="/projects"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                    View My Work
                </a>
            </div>

            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
                <div className="w-8 h-12 rounded-full border-2 border-gray-400 flex justify-center items-start p-1">
                    <div className="w-1 h-3 bg-gray-400 rounded-full animate-scroll-indicator"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes textReveal {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes titleReveal {
                    0% {
                        opacity: 0;
                        transform: translateY(-30px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes subtitleReveal {
                    0% {
                        opacity: 0;
                        letter-spacing: -5px;
                    }
                    100% {
                        opacity: 1;
                        letter-spacing: normal;
                    }
                }
                @keyframes widthReveal {
                    0% {
                        width: 0;
                        opacity: 0;
                    }
                    100% {
                        width: 48px;
                        opacity: 1;
                    }
                }
                @keyframes buttonReveal {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-15px);
                    }
                }
                @keyframes floatMedium {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                @keyframes floatSlow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-5px);
                    }
                }
                @keyframes bounceSlow {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
                @keyframes scrollIndicator {
                    0% {
                        opacity: 0;
                        transform: translateY(0);
                    }
                    50% {
                        opacity: 1;
                        transform: translateY(5px);
                    }
                    100% {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                }
                .animate-text-reveal {
                    animation: textReveal 1s ease-out forwards;
                    animation-delay: 0.5s;
                    opacity: 0;
                }
                .animate-title-reveal {
                    animation: titleReveal 1.2s ease-out forwards;
                    opacity: 0;
                }
                .animate-subtitle-reveal {
                    animation: subtitleReveal 1.5s ease-out forwards;
                    animation-delay: 0.3s;
                    opacity: 0;
                }
                .animate-width-reveal {
                    animation: widthReveal 1.5s ease-out forwards;
                    animation-delay: 0.6s;
                    opacity: 0;
                    width: 0;
                }
                .animate-button-reveal {
                    animation: buttonReveal 1s ease-out forwards;
                    animation-delay: 1s;
                    opacity: 0;
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-medium {
                    animation: floatMedium 8s ease-in-out infinite;
                }
                .animate-float-slow {
                    animation: floatSlow 10s ease-in-out infinite;
                }
                .animate-bounce-slow {
                    animation: bounceSlow 2s ease-in-out infinite;
                }
                .animate-scroll-indicator {
                    animation: scrollIndicator 2s ease-in-out infinite;
                }
                .cursor {
                    display: inline-block;
                    margin-left: 2px;
                }
                .typewriter-text {
                    min-width: 200px;
                    display: inline-block;
                }
            `}</style>
        </BackgroundLines>
    );
}