'use client'
import { motion } from 'framer-motion';

const pageTransition = {
  initial: { opacity: 0.5 },
  animate: { opacity: 1 },
  exit: { opacity: 0.5 },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      exitBeforeEnter 
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
