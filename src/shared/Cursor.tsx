import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { memo, useEffect } from 'react'

type Props = {}

function Cursor({ }: Props) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  useEffect(() => {
    const moveCursor = (e: any) => {
      cursorX.set(e.clientX - 9.5);
      cursorY.set(e.clientY - 9.5);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    }
  }, [])
  return (
    <>
      <motion.div style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }} className="fixed top-0 left-0 z-50 w-5 h-5 pointer-events-none bg-colorPink rounded-2xl" />
    </>
  )
}

export default memo(Cursor);
