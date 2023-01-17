import { motion, useScroll, useSpring } from "framer-motion"
import React from 'react'

type Props = {}

export default function Progress({ }: Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return <motion.div style={{ scaleX }} />
}
