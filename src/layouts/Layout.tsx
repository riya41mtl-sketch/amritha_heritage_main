import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Transition, Variants } from "framer-motion";
import NavBar from "./Navbar";
import Footer from "./Footer";
import HeritageLoader from "./HeritageLoader";
import { usePageLoader } from "../hooks/usePageLoader";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const Layout = () => {
  const { isLoading } = usePageLoader({
    initialDelay: 300,
    minLoadingTime: 2000
  });
  const location = useLocation();
  const shouldReduceMotion = usePrefersReducedMotion();

  const pageVariants: Variants = shouldReduceMotion ? {
    initial: { opacity: 1 },
    in: { opacity: 1 },
    out: { opacity: 1 },
  } : {
    initial: {
      opacity: 0,
      y: 20,
    },
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -20,
    },
  };

  const pageTransition: Transition = {
    type: "tween",
    ease: "anticipate",
    duration: shouldReduceMotion ? 0 : 0.5,
  };

  return (
    <>
      {isLoading ? (
        <HeritageLoader
          isLoading={isLoading}
          logoSrc="/logoBlack.png"
          minDisplayTime={3000}
        />
      ) : (
        <div className="min-h-screen flex flex-col bg-heritage-ivory">
          <NavBar />
          <AnimatePresence mode="wait">
            <motion.main
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
              className="flex-grow pt-20" // Add padding to offset fixed navbar
            >
              <Outlet />
            </motion.main>
          </AnimatePresence>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Layout;
