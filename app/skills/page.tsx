"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SkillsCategory from "@/components/ui/SkillsCategory";
import PageHeader from "@/components/skills/PageHeader";

type Skill = {
    name: string;
    icon: string;
    proficiency: number;
};

export default function SkillsPage() {
    const [isLoading, setIsLoading] = useState(true);

    const frontendLanguagesNFrameworks: Skill[] = [
        { name: "JavaScript", icon: "📒", proficiency: 95 },
        { name: "TypeScript", icon: "📘", proficiency: 85 },
        { name: "React.js", icon: "⚛️", proficiency: 85 },
        { name: "Next.js", icon: "▲", proficiency: 85 },
        { name: "React Native", icon: "📱", proficiency: 80 },
        { name: "Tailwind CSS", icon: "🎨", proficiency: 95 },
        { name: "Bootstrap", icon: "🅱️", proficiency: 90 },
        { name: "Material UI", icon: "🖼️", proficiency: 70 },
        { name: "Framer Motion", icon: "🎬", proficiency: 60 },
        { name: "JQuery", icon: "🔌", proficiency: 80 },
    ];

    const backendLanguagesNFrameworks: Skill[] = [
        { name: "Java", icon: "☕", proficiency: 92 },
        { name: "Node.js", icon: "🟢", proficiency: 85 },
        { name: "Spring" , icon: "🍃", proficiency: 85 },
        { name: "Spring Boot", icon: "🌱", proficiency: 90 },
        { name: "Express.js", icon: "🚂", proficiency: 90 },
        { name: "PHP", icon: "🔵", proficiency: 85 },
        { name: "Laravel", icon: "🟥", proficiency: 80 },
        { name: "Python", icon: "🐍", proficiency: 75 },
        { name: "Flask", icon: "🍶", proficiency: 70 },
        { name: "Django", icon: "🎓", proficiency: 60 },
    ]

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
            },
        },
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white py-16 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <PageHeader sentence="My Skills" />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-12"
                >
                    <SkillsCategory
                        title="Frontend Languages & Frameworks"
                        skills={frontendLanguagesNFrameworks}
                        isLoading={isLoading}
                    />

                    <SkillsCategory
                        title="Backend Languages & Frameworks"
                        skills={backendLanguagesNFrameworks}
                        isLoading={isLoading}
                    />
                </motion.div>
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <motion.div
                    animate={{
                        rotate: 360,
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-500/20 blur-[120px]"
                />
                <motion.div
                    animate={{
                        rotate: -360,
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-purple-500/20 blur-[120px]"
                />
            </div>
        </div>
    );
}