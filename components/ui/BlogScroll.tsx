"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const BlogScroll = ({
                               content,
                               contentClassName,
                           }: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
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
            0,
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColor = [
        "#0f172a",
    ];
    const linearGradients = [
        "linear-gradient(to bottom right, #06b6d4, #10b981)",
        "linear-gradient(to bottom right, #ec4899, #6366f1)",
        "linear-gradient(to bottom right, #f97316, #eab308)",
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(
        linearGradients[0],
    );

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColor[activeCard % backgroundColor.length],
            }}
            className="relative flex flex-col lg:flex-row h-[30rem] justify-center overflow-y-auto scrollbar-hide rounded-md p-4 md:p-6 lg:p-4 gap-6 lg:gap-16"
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
      `}</style>

            <div className="div relative flex items-start px-2 md:px-4 w-full lg:w-auto">
                <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl w-full">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-12 md:my-16 lg:my-20">
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-xl md:text-2xl font-bold text-slate-100"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-sm md:text-base mt-4 md:mt-6 lg:mt-10 max-w-sm text-slate-300"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-20 md:h-40" />
                </div>
            </div>

            <div
                style={{ background: backgroundGradient }}
                className={cn(
                    "w-full h-60 lg:w-80 overflow-hidden rounded-md bg-white",
                    "lg:sticky lg:top-10",
                    "mt-4 lg:mt-0",
                    contentClassName,
                )}
            >
                {content[activeCard].content ?? null}
            </div>
        </motion.div>
    );
};