import { motion } from 'framer-motion'
import { fadeUp } from './motion.js'

// Scroll-triggered reveal wrapper. Animates once when it enters the viewport.
export default function Reveal({ children, variants = fadeUp, className, style, as = 'div', delay = 0, amount = 0.3 }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  )
}
