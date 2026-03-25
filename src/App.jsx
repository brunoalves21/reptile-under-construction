import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-green-950 to-gray-950 flex flex-col items-center justify-center px-4 overflow-hidden relative">
      {/* Background texture dots */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Snake SVG */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="mb-6"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Snake body */}
          <path
            d="M30 85 Q30 65 45 60 Q60 55 60 40 Q60 25 75 25 Q90 25 90 40"
            fill="none"
            stroke="#4ade80"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Snake head */}
          <circle cx="90" cy="38" r="10" fill="#4ade80" />
          {/* Eye */}
          <circle cx="93" cy="35" r="2.5" fill="#1a1a2e" />
          {/* Tongue */}
          <motion.line
            x1="99"
            y1="40"
            x2="108"
            y2="42"
            stroke="#ef4444"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ x2: [108, 112, 108] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
          />
          {/* Tail */}
          <path
            d="M30 85 Q20 95 25 100"
            fill="none"
            stroke="#4ade80"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </motion.svg>
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-green-400 mb-4 text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Under Construction
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-xl md:text-2xl text-green-200/70 mb-8 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Premium Reptile Breeding — Coming Soon
      </motion.p>

      {/* Divider */}
      <motion.div
        className="w-24 h-1 bg-green-500/50 rounded-full mb-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      />

      {/* Description */}
      <motion.p
        className="text-green-300/50 text-sm md:text-base max-w-md text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        We're building something special for reptile enthusiasts and breeders.
        Stay tuned.
      </motion.p>

      {/* Pulsing glow */}
      <motion.div
        className="absolute w-64 h-64 bg-green-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.15, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

export default App
