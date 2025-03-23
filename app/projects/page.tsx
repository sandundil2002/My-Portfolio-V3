'use client';
import Tile from "@/components/ui/Title";
import { motion } from "framer-motion";
import React from "react";
import { ProjectCard } from "@/components/project/ProjectCard";

interface Project {
    title: string;
    href: string;
    description: string;
    image: string;
}

export default function ProjectsPage() {
    const projects: Project[] = [
        {
            title: "Sand Alerts",
            href: "https://sand-alerts.vercel.app/",
            description: "Customizable alert library built with Next.js and TypeScript for modern, responsive user interfaces.",
            image: "/images/sand-alerts.png",
        },
        {
            title: "Compilehub",
            href: "https://github.com/sandundil2002/CompileHub.git",
            description: "Web-based code editor for writing, running, and testing code across multiple programming languages.",
            image: "/images/compilehub.png",
        },
        {
            title: "WareXperet",
            href: "https://github.com/sandundil2002/Warexpert_Frontend.git",
            description: "React TypeScript app for warehouse management with OTP authentication and intuitive dashboard.",
            image: "/images/warexpert.png",
        },
        {
            title: "Echo Blog",
            href: "https://github.com/sandundil2002/Echo-Blog.git",
            description: "Modern blogging platform built with Laravel, Bootstrap, and MySQL for seamless user experience.",
            image: "/images/echo-blog.png",
        },
        {
            title: "Crop Monitoring System",
            href: "https://github.com/sandundil2002/Crop_Monitoring_System-Frontend.git",
            description: "Web app for managing crops, staff, and equipment, powered by Spring Boot technology.",
            image: "/images/green-shadow.png",
        },
        {
            title: "Safe Share",
            href: "https://sandundil2002.github.io/Safe-Share/",
            description: "Secure image storage and sharing platform using Firebase for real-time functionality.",
            image: "/images/safe-share.png",
        },
        {
            title: "Vend Ease POS",
            href: "https://github.com/sandundil2002/Vend_Ease-POS.git",
            description: "User-friendly POS system for businesses, managing sales and transactions with Spring Boot.",
            image: "/images/vend-ease.png",
        },
        {
            title: "Solace Chatbot",
            href: "https://github.com/sandundil2002/Solace_Chatbot.git",
            description: "AI-powered chatbot offering professional support through a conversational interface with React.",
            image: "/images/solace-chatbot.png",
        },
        {
            title: "Haven Laptop",
            href: "https://haven-laptop.vercel.app/",
            description: "Responsive laptop store website built with Vite, Tailwind CSS, and React framework.",
            image: "/images/haven-laptop.png",
        },
        {
            title: "My Portfolio V2",
            href: "https://sandundil2002.github.io/My-Portfolio-V2/",
            description: "Interactive portfolio showcasing skills and projects with HTML, CSS, and JavaScript technologies.",
            image: "/images/my-portfolio-v2.png",
        },
        {
            title: "Type Tastic",
            href: "https://sandundil2002.github.io/Type-Tastic/",
            description: "Typing speed test app to enhance accuracy and speed using HTML, CSS, JavaScript.",
            image: "/images/type-tastic.png",
        },
        {
            title: "Web Calculator",
            href: "https://sandundil2002.github.io/Web-Calculator/",
            description: "Customizable web calculator for basic math operations, built with HTML, CSS, JavaScript.",
            image: "/images/web-calculator.png",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 relative z-10"
            >
                <div className="flex flex-col items-center justify-center mb-8">
                    <Tile
                        sentence="My Projects"
                        manualMode={false}
                        blurAmount={3}
                        borderColor="rgba(96, 165, 250, 0.8)"
                        glowColor="rgba(96, 165, 250, 0.4)"
                        animationDuration={2}
                        pauseBetweenAnimations={1}
                    />
                </div>
                <ProjectCard projects={projects} />
            </motion.div>
        </div>
    );
}