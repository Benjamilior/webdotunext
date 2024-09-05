'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Img2() {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setPercentage(75), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-auto p-5 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-sm"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-[#343366] text-white text-center py-2 px-4 rounded-full text-lg font-semibold mb-6 shadow-md"
        >
          STOCK DISPONIBLE
        </motion.div>

        <div className="flex justify-center mb-6">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-200 stroke-current"
                strokeWidth="10"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              ></circle>
              <motion.circle
                className="text-red-500 stroke-current"
                strokeWidth="10"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: percentage / 100 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                  transformOrigin: 'center',
                  transform: 'rotate(-90deg)',
                }}
              ></motion.circle>
            </svg>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <motion.div
                className="text-5xl font-bold text-white bg-[#343366] rounded-full w-32 h-32 flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 10 }}
              >
                {percentage}%
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center text-gray-600 text-xl font-semibold"
        >
          De tus competidores sin stock
        </motion.div>
      </motion.div>
    </div>
  )
}