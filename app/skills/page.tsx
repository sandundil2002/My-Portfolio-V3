'use client';
import Tile from "@/components/ui/Title";
import { motion } from "framer-motion";
import React from "react";

export default function SkillsPage() {
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
                        sentence="My Skills"
                        manualMode={false}
                        blurAmount={3}
                        borderColor="rgba(96, 165, 250, 0.8)"
                        glowColor="rgba(96, 165, 250, 0.4)"
                        animationDuration={2}
                        pauseBetweenAnimations={1}
                    />
                </div>
            </motion.div>
        </div>
    )
}