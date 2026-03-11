import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 4 + 1;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 900);
          return 100;
        }
        return next;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          id="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="loader-name">Satyam<span>.</span></div>
          <div>
            <div className="loader-bar-wrap">
              <div
                className="loader-bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="loader-pct">Loading Experience {Math.floor(progress)}%</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
