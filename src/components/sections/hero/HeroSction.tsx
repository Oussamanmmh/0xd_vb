"use client";

import { AnimatedTooth } from "@/components/ui/animatedTooth";
import { Phone, Calendar } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import { useLanguage } from "@/context/langage-context";
import { content } from "@/lib/content";

const tags = [
    { name: "Orthodontie", color: "bg-green-500/20 text-green-400" },
    { name: "Esthétique", color: "bg-purple-500/20 text-purple-400" },
    { name: "Implantologie", color: "bg-blue-500/20 text-blue-400" },
    { name: "Chirurgie dentaire", color: "bg-orange-500/20 text-orange-400" },
    { name: "Parodontologie", color: "bg-pink-500/20 text-pink-400" },
    { name: "Prothèses", color: "bg-yellow-500/20 text-yellow-400" },
    { name: "Blanchiment", color: "bg-gray-500/20 text-gray-400" },
    { name: "Soins préventifs", color: "bg-teal-500/20 text-teal-400" },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const tagVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
};

const HeroSection = () => {
    const {language } = useLanguage();
    const t = content[language].hero;
    const s = content[language].services;
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-between pb-12 md:h-screen p-4 md:p-10 gap-8 md:gap-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="flex flex-col gap-4 w-full md:w-2/3">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-xl md:text-6xl font-bold text-center text-[#CCC7C1]"
                >
                    {t.title}
                    <br />
                    <span className="text-[#57d3e3]">{t.stitle}</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`text-base sm:text-lg text-[#B0AA9F] text-center ${language === 'ar' ? 'md:text-right' : 'md:text-left'} font-semibold`}
                >
                    {t.subtitle}
                    <br />
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4 mt-4 sm:mt-6"
                >
                    {tags.map((tag, index) => (
                        <motion.div
                            key={index}
                            variants={tagVariants}
                            className={`font-semibold w-fit px-3 py-1 rounded-xl text-sm sm:text-base ${tag.color}`}
                        >
                            {s.quickServices[index] || tag.name}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center md:justify-start items-center mt-4 sm:mt-6"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-[#57d3e3] flex justify-center items-center gap-2 sm:gap-3 border-[1px] border-[#57d3e3] rounded-xl px-4 py-2 hover:bg-[#57d3e3]/10 transition-all duration-300 w-full sm:w-auto"
                    >
                        <Phone className="size-4 animate-rotate" />
                        <p className="font-bold">{t.cta.call}</p>
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#57d3e3] flex justify-center items-center gap-2 sm:gap-3 border-[1px] border-[#57d3e3] rounded-xl px-4 py-2 hover:bg-[#57d3e3]/10 transition-all duration-300 w-full sm:w-auto"
                    >
                        <Calendar className="size-4" />
                        <p className="font-bold">{t.cta.appointment}</p>
                    </motion.button>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 flex justify-center items-center md:mb-0"
            >
                <AnimatedTooth />
            </motion.div>
        </div>
    );
};

export default HeroSection;
