"use client";

import React from "react";
import { motion } from "framer-motion";
import SercicesComponents from "./sercicesComponents";
import DentalFAQSection from "./questions";

export const ServivesSection = () => {
  return (
    <div className="bg-[#1C1F20] flex flex-col items-center justify-center gap-8 py-12">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <motion.div
          className="flex flex-col items-center justify-center gap-4 px-2 md:px-20 mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-[#CCC7C1]">Nos Services Dentaires</h1>
          <p className="text-xl text-[#B0AA9F] text-center">
            Le Dr. Nemamcha Oussama offre une gamme complète de services dentaires pour répondre à tous vos besoins de santé bucco-dentaire
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <SercicesComponents />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <DentalFAQSection />
        </motion.div>
      </div>
    </div>
  );
};
