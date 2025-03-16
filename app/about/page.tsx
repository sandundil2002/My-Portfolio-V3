'use client';
import React from "react";
import Tile from "@/components/ui/Title";

export default function AboutPage() {
    return (
        <div className="mt-20 flex items-center justify-center">
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
    );
};