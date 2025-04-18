import Image from "next/image";
import React from "react";
import {CardBody, CardContainer, CardItem} from "@/components/ui/3DCard";

export function ImageCard() {
    return (
        <CardContainer>
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-900 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                    translateZ="50"
                    className="text-xl text-center font-bold text-neutral-600 dark:text-white"
                >
                    Sandun Dilshan
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-center text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    Self-Taught Developer and Designer!
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src="/images/pro-pic.jpg"
                        height="1000"
                        width="1000"
                        className="lg:h-110 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="about me"
                    />
                </CardItem>
            </CardBody>
        </CardContainer>
    );
}
