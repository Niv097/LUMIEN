"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  staggerChildren?: number
  once?: boolean
}

export function TextReveal({ 
  children, 
  className = "", 
  delay = 0,
  staggerChildren = 0.1,
  once = true
}: TextRevealProps) {
  const words = useMemo(() => children.split(" "), [children])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em] overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          <motion.span
            className="inline-block"
            variants={child}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </motion.span>
  )
}

// Alternative: Character by character reveal
export function TextRevealChar({ 
  children, 
  className = "", 
  delay = 0,
  staggerChildren = 0.03,
  once = true
}: TextRevealProps) {
  const chars = useMemo(() => children.split(""), [children])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  }

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
    >
      {chars.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={child}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
