import React from "react";
import { motion } from "framer-motion";

export type Skill = {
    name: string;
    icon: string;
    proficiency: number;
};

const SkillsItem: React.FC<Skill> = ({ name, icon, proficiency }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/80 rounded-xl p-5 flex flex-col items-center hover:bg-gray-700/80 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700"
            role="listitem"
            aria-label={`${name} - ${proficiency}% proficiency`}
        >
            <div className="text-4xl mb-3 text-blue-400">{icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-white">{name}</h3>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
            </div>
            <span className="text-sm text-gray-400 mt-2">{proficiency}%</span>
        </motion.div>
    );
};

export default SkillsItem;