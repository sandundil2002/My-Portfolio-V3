'use client'
import {motion} from "framer-motion";
import Tile from "@/components/ui/Title";
import React from "react";
import {ContactForm} from "@/components/ui/ContactForm";
import {SocialMedia} from "@/components/ui/SocialMedia";

export default function ContactPage() {
    return (
        <div>
            <div className="min-h-screen bg-gray-900 text-white pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-4 relative z-10"
                >
                    <div className="flex flex-col items-center justify-center mb-8">
                        <Tile
                            sentence="Contact Me"
                            manualMode={false}
                            blurAmount={3}
                            borderColor="rgba(96, 165, 250, 0.8)"
                            glowColor="rgba(96, 165, 250, 0.4)"
                            animationDuration={2}
                            pauseBetweenAnimations={1}
                        />
                    </div>
                    <ContactForm />
                    <SocialMedia />
                </motion.div>
            </div>
        </div>
    )
}