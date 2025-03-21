import React from "react";
import { motion } from "framer-motion";

export type Skill = {
    name: string;
    icon: string;
};

const SkillsItem: React.FC<Skill> = ({ name, icon }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/80 rounded-xl p-5 flex flex-col items-center hover:bg-gray-700/80 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700"
            role="listitem"
            aria-label={`${name} skill`}
        >
            <div className="text-4xl mb-3 text-blue-400">{icon}</div>
            <h3 className="text-xs font-semibold text-white">{name}</h3>
        </motion.div>
    );
};

export default SkillsItem;