'use client';
import React, { useState, useEffect } from "react";
import TextContent from "@/components/ui/TextContent";
import { ImageCard } from "@/components/about/ImageCard";
import { motion } from "framer-motion";
import { Linkedin, FileText, Github} from "lucide-react";
import Tile from "@/components/ui/Title";

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState("about");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const socialLinks = [
        { icon: <Github className="w-5 h-5" />, href: "https://github.com/sandundil2002", label: "GitHub" },
        { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/sandun-dilshan-a640b7272", label: "LinkedIn" },
    ];

    const tabs = [
        { id: "about", label: "About Me" },
        { id: "experience", label: "Experience" },
    ];

    const bioText = "I am an enthusiastic undergraduate software engineer pursuing a Computer Science degree, with a strong foundation in programming and problem-solving. My academic journey has equipped me with skills in software development, data structures, and algorithms. Through hands-on projects, I've deepened my understanding of building efficient and user-friendly applications. I am proficient in Java, React & JavaScript, focusing on full-stack development and software design. Passionate about leveraging technology to solve real-world challenges, I thrive in dynamic settings. I enjoy collaborating with professionals and contributing to impactful projects. Always eager to learn and innovate, I aim to grow in a fast-paced, tech-driven environment. 🚀";

    return (
        <div className="min-h-screen bg-gray-900 text-white mt-18">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 relative z-10"
            >
                <div className="flex flex-col items-center justify-center">
                    <Tile
                        sentence="About Me"
                        manualMode={false}
                        blurAmount={3}
                        borderColor="rgba(96, 165, 250, 0.8)"
                        glowColor="rgba(96, 165, 250, 0.4)"
                        animationDuration={2}
                        pauseBetweenAnimations={1}
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 px-2 gap-8 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-1"
                    >
                        <ImageCard />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="order-2 lg:order-2"
                    >
                        <div className="flex justify-center gap-4 mb-6">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-4 lg:mt-10 py-2 rounded-lg font-medium transition-all duration-300 ${
                                        activeTab === tab.id
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {activeTab === "about" && (
                            <div className="text-start">
                                {isMounted ? (
                                    <TextContent
                                        text={bioText}
                                        speed={80}
                                        maxIterations={15}
                                        characters="ABCD1234!?"
                                        className="revealed text-gray-300 text-lg leading-relaxed"
                                        parentClassName="all-letters"
                                        encryptedClassName="encrypted text-blue-300"
                                        animateOn="view"
                                        revealDirection="start"
                                    />
                                ) : (
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        {bioText}
                                    </p>
                                )}

                                <div className="flex gap-6">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.8 }}
                                        className="mt-8 flex gap-4"
                                    >
                                        <motion.a
                                            href="/docs/Sandun Dilshan.pdf"
                                            download
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-4 py-2 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition-all duration-300 inline-flex items-center gap-1 text-base"
                                        >
                                            <FileText className="w-5 h-5" />
                                            <h4 className="text-xs">Download CV</h4>
                                        </motion.a>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6, duration: 0.5 }}
                                        className="flex space-x-4 mt-8"
                                    >
                                        {socialLinks.map((link, index) => (
                                            <motion.a
                                                key={index}
                                                href={link.href}
                                                whileHover={{ scale: 1.1, y: -3 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300"
                                                aria-label={link.label}
                                            >
                                                {link.icon}
                                            </motion.a>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        )}

                        {activeTab === "experience" && (
                            <div className="relative border-l-2 border-blue-500 pl-8 ">
                                {[
                                    {
                                        period: "2025 - Present",
                                        title: "Intern Full Stack Developer",
                                        company: "Pending",
                                        description: "Gaining hands-on experience in full-stack development, working with modern technologies to build scalable and efficient web applications."
                                    },
                                    {
                                        period: "2023 - 2025",
                                        title: "Graduate Diploma in Software Engineering",
                                        company: "Institute of Software Engineering",
                                        description: "Developed a strong foundation in software engineering principles, full-stack development, data structures, algorithms, and modern frameworks."
                                    },
                                    {
                                        period: "2019 - 2022",
                                        title: "GCE Advanced Level in Commerce Stream",
                                        company: "G/Vidyaloka College",
                                        description: "Focused on commerce subjects including Accounting, Business Studies, and Economics, enhancing analytical and problem-solving skills."
                                    }
                                ].map((job, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2, duration: 0.5 }}
                                        className="mb-10 relative"
                                    >
                                        <div className="absolute -left-10 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900" />
                                        <p className="text-blue-400 font-medium mb-1">{job.period}</p>
                                        <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
                                        <p className="text-gray-300 italic mb-2">{job.company}</p>
                                        <p className="text-gray-400">{job.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}