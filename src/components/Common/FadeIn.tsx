"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  fullWidth?: boolean;
  duration?: number;
  className?: string;
}

const FadeIn = ({ children, delay = 0, direction = "up", fullWidth = false, duration = 0.6, className = "" }: FadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
      },
    },
  };

  if (direction === "none") {
    variants.hidden = { opacity: 0, y: 0, x: 0 };
  }

  return (
    <div ref={ref} className={`${fullWidth ? "w-full" : ""} ${className}`}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={controls}
        className={fullWidth ? "w-full" : ""}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeIn;
