"use client";

import { motion } from "framer-motion";
import React from "react";

const Transition = ({
  delaySeconds,
  duration,
  children,
}: {
  delaySeconds?: number;
  duration?: number;
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ y: 6, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      ease: "easeInOut",
      duration: duration ?? 0.35,
      delay: delaySeconds,
    }}
  >
    {children}
  </motion.div>
);

export default Transition;
