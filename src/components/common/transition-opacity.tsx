"use client";

import { motion } from "framer-motion";
import React from "react";

const TransitionOpacity = ({
  delaySeconds,
  duration,
  children,
}: {
  delaySeconds?: number;
  duration?: number;
  children: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      ease: "easeInOut",
      duration: duration ?? 0.25,
      delay: delaySeconds,
    }}
  >
    {children}
  </motion.div>
);

export default TransitionOpacity;
