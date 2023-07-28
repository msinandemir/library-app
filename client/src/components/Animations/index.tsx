import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export const AnimatedSection: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {children}
    </motion.section>
  );
};
