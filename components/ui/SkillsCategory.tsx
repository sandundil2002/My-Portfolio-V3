import React from "react";
import { motion } from "framer-motion";
import SkillsItem, {Skill} from "./SkillsItem";

type SkillCategoryProps = {
    title: string;
    skills: Skill[];
    isLoading?: boolean;
};

const SkillsCategory: React.FC<SkillCategoryProps> = ({ title, skills, isLoading = false }) => {
    if (isLoading) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-12"
            >
                <h2 className="text-2xl font-bold mb-6 text-blue-400 border-b border-blue-500 pb-2">
                    {title}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[...Array(4)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/60 rounded-xl p-5 animate-pulse flex flex-col items-center"
                        >
                            <div className="w-12 h-12 bg-gray-700 rounded-full mb-3" />
                            <div className="w-20 h-4 bg-gray-700 rounded mb-2" />
                            <div className="w-full h-2.5 bg-gray-700 rounded-full" />
                            <div className="w-10 h-4 bg-gray-700 rounded mt-2" />
                        </div>
                    ))}
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
        >
            <h2 className="text-2xl font-bold mb-6 text-blue-400 border-b border-blue-500 pb-2">
                {title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills.map((skill, index) => (
                    <SkillsItem key={index} {...skill} />
                ))}
            </div>
        </motion.div>
    );
};

export default SkillsCategory;