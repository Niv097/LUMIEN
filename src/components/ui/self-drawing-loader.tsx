"use client";

import { motion } from "framer-motion";

interface SelfDrawingLoaderProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function SelfDrawingLoader({ 
  size = 60, 
  strokeWidth = 2,
  className = ""
}: SelfDrawingLoaderProps) {
  const circleVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop" as const,
        },
        opacity: {
          duration: 0.3,
        },
      },
    },
  };

  const logoVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop" as const,
          repeatDelay: 0.5,
        },
        opacity: {
          duration: 0.3,
        },
      },
    },
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle */}
        <motion.circle
          cx="30"
          cy="30"
          r="26"
          stroke="var(--primary)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          variants={circleVariants}
          initial="hidden"
          animate="visible"
        />
        
        {/* Inner geometric shape - hexagon */}
        <motion.path
          d="M30 12 L45 21 L45 39 L30 48 L15 39 L15 21 Z"
          stroke="var(--primary)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        />
        
        {/* Center dot */}
        <motion.circle
          cx="30"
          cy="30"
          r="3"
          fill="var(--primary)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            times: [0, 0.3, 0.7, 1]
          }}
        />
      </svg>
    </div>
  );
}

// Full screen loading overlay
export function FullScreenLoader() {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center z-50">
      <SelfDrawingLoader size={80} strokeWidth={2.5} />
      <motion.p 
        className="mt-6 text-muted-foreground text-sm tracking-wider"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Loading...
      </motion.p>
    </div>
  );
}

// Button loading spinner
export function ButtonLoader({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin"
    >
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="20 10"
        fill="none"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </svg>
  );
}
