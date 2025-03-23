'use client';
import React from "react";
import { PinCard } from "@/components/ui/PinCard";
import Image from "next/image";

interface Project {
    title: string;
    href: string;
    description: string;
    image: string;
}

interface ProjectCardProps {
    projects: Project[];
}

export function ProjectCard({ projects }: ProjectCardProps) {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 px-2 md:px-4">
            {projects.map((project, index) => (
                <PinCard
                    key={index}
                    title={project.title}
                    href={project.href}
                    containerClassName="bg-gradient-to-br rounded-lg h-auto"
                >
                    <div className="flex basis-full flex-col p-2 md:p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-full h-full max-w-full">
                        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-lg text-slate-100 line-clamp-1">
                            {project.title}
                        </h3>
                        <div className="text-sm md:text-base !m-0 !p-0 font-normal">
              <span className="text-slate-300 line-clamp-2 md:line-clamp-3">
                {project.description}
              </span>
                        </div>
                        <div className="relative w-full aspect-video mt-4 rounded-lg overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-cover"
                                priority={index < 4}
                            />
                        </div>
                    </div>
                </PinCard>
            ))}
        </div>
    );
}