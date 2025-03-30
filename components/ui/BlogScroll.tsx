"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const BlogScroll = ({
                               content,
                               contentClassName,
                           }: {
    content: {
        title: string;
        description: React.JSX.Element;
        content?: React.JSX.Element;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColor = ["#0f172a"];
    const linearGradients = [
        "linear-gradient(to bottom right, #06b6d4, #10b981)",
        "linear-gradient(to bottom right, #ec4899, #6366f1)",
        "linear-gradient(to bottom right, #f97316, #eab308)",
    ];

    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColor[activeCard % backgroundColor.length],
            }}
            className="relative flex flex-col lg:flex-row md:h-[22rem] lg:h-[25rem] sm:h-[40rem] justify-center overflow-y-auto scrollbar-hide rounded-md sm:mx-0 lg:mx-10 gap-4 lg:gap-10"
            ref={ref}
            style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
            }}
        >
            <style jsx global>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                @media (max-width: 767px) {
                    .content-card {
                        display: none;
                    }
                }
            `}</style>

            <div className="relative flex items-start w-full px-4 md:px-6">
                <div className="w-full">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-6 md:my-10 lg:my-16">
                            <motion.h2
                                initial={{ opacity: 1 }}

                                className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-100 md:opacity-30 md:animate-[opacity]"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 1 }}
                                animate={{
                                    opacity: 1
                                }}
                                transition={{ duration: 0.3 }}
                                className="text-xs sm:text-sm md:text-base mt-2 md:mt-4 text-slate-300 md:opacity-30 md:animate-[opacity]"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-12 md:h-20 lg:h-32" />
                </div>
            </div>

            <motion.div
                animate={{
                    background: linearGradients[activeCard % linearGradients.length],
                }}
                transition={{ duration: 0.3 }}
                className={cn(
                    "w-full h-48 md:h-64 lg:h-80 lg:w-1/3 rounded-md overflow-hidden content-card",
                    "lg:sticky lg:top-10",
                    "mb-6 md:mb-8 lg:mb-0 lg:mt-0 mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none",
                    contentClassName
                )}
            >
                {content[activeCard].content ?? null}
            </motion.div>
        </motion.div>
    );
};