"use client";

import { motion } from "framer-motion";
import React from "react";

const Transition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeInOut", duration: 0.65 }}
  >
    {children}
  </motion.div>
);

export default Transition;
