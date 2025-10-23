'use client';

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="mt-16 py-8 pb-20 text-center text-purple-900 dark:text-purple-950 border-t-2 border-purple-300 dark:border-purple-300"
    >
      <p className="font-serif text-xl mb-3 px-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
        With love, Fariz
      </p>
      <p className="text-base text-purple-900 dark:text-purple-950 px-4">
        22 December 2025
      </p>
    </motion.footer>
  );
}
