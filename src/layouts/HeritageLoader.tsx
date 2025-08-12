import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeritageLoaderProps {
  isLoading: boolean;
  minDisplayTime?: number;
}

const HeritageLoader: React.FC<HeritageLoaderProps> = ({
  isLoading,
  minDisplayTime = 2000
}) => {
  const [showLoader, setShowLoader] = useState(isLoading);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isLoading) {
      setShowLoader(true);
    } else {
      timer = setTimeout(() => {
        setShowLoader(false);
      }, minDisplayTime);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading, minDisplayTime]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-heritage-ivory"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="font-serif-heading text-4xl text-heritage-green tracking-wider">
              Amritha
            </div>
            <div className="w-full h-px bg-heritage-ochre/50 mt-2" />
            <div className="text-center text-heritage-green/80 font-sans-body mt-2 tracking-widest text-sm">
              HERITAGE
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeritageLoader;
