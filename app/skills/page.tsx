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
    const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "databases">("frontend");

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
        { name: "Spring", icon: "🍃", proficiency: 85 },
        { name: "Spring Boot", icon: "🌱", proficiency: 90 },
        { name: "Express.js", icon: "🚂", proficiency: 90 },
        { name: "PHP", icon: "🔵", proficiency: 85 },
        { name: "Laravel", icon: "🟥", proficiency: 80 },
        { name: "Python", icon: "🐍", proficiency: 75 },
        { name: "Flask", icon: "🍶", proficiency: 70 },
        { name: "Django", icon: "🎓", proficiency: 60 },
    ];

    const databasesNOthers: Skill[] = [
        { name: "MySQL", icon: "🐬", proficiency: 90 },
        { name: "MongoDB", icon: "🍃", proficiency: 88 },
        { name: "Firebase", icon: "🔥", proficiency: 85 },
        { name: "PostgreSQL", icon: "🐘", proficiency: 80 },
        { name: "Docker", icon: "🐳", proficiency: 85 },
        { name: "Kubernetes", icon: "🚢", proficiency: 70 },
        { name: "CI/CD", icon: "🔄", proficiency: 80 },
        { name: "JWT", icon: "🔑", proficiency: 90 },
        { name: "Git", icon: "🔄", proficiency: 95 },
        { name: "AWS", icon: "☁️", proficiency: 78 },
        { name: "GraphQL", icon: "🔷", proficiency: 80 },
        { name: "REST API", icon: "🔌", proficiency: 92 },
        { name: "Ajax", icon: "🔄", proficiency: 85 },
        { name: "Axios", icon: "🔄", proficiency: 85 },
        { name: "Fetch API", icon: "🔗", proficiency: 85 },
        { name: "Linux", icon: "🐧", proficiency: 85 },
        { name: "Maven", icon: "📦", proficiency: 90 },
        { name: "Gradle", icon: "📦", proficiency: 85 },
        { name: "Postman", icon: "📬", proficiency: 90 },
        { name: "Jira", icon: "📝", proficiency: 90 },
    ];

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

    const categories = {
        frontend: {
            title: "Frontend Languages & Frameworks",
            skills: frontendLanguagesNFrameworks,
        },
        backend: {
            title: "Backend Languages & Frameworks",
            skills: backendLanguagesNFrameworks,
        },
        databases: {
            title: "Databases & Other Technologies",
            skills: databasesNOthers,
        },
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white py-16 lg:px-10 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <PageHeader sentence="My Skills" />

                <div className="flex flex-wrap justify-center gap-4 mt-8 px-4">
                    <button
                        onClick={() => setActiveTab("frontend")}
                        className={`w-full sm:w-auto px-4 py-2 text-xs sm:text-sm md:text-base rounded-md font-semibold transition-colors duration-300 ${
                            activeTab === "frontend"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                    >
                        Frontend
                    </button>
                    <button
                        onClick={() => setActiveTab("backend")}
                        className={`w-full sm:w-auto px-4 py-2 text-xs sm:text-sm md:text-base rounded-md font-semibold transition-colors duration-300 ${
                            activeTab === "backend"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                    >
                        Backend
                    </button>
                    <button
                        onClick={() => setActiveTab("databases")}
                        className={`w-full sm:w-auto px-4 py-2 text-xs sm:text-sm md:text-base rounded-md font-semibold transition-colors duration-300 ${
                            activeTab === "databases"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                    >
                        Databases & Others
                    </button>
                </div>

                <motion.div
                    key={activeTab}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-12"
                >
                    <SkillsCategory
                        title={categories[activeTab].title}
                        skills={categories[activeTab].skills}
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