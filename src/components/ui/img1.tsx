'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Img1() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-auto p-6 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-sm"
      >
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-6">Ofertas</h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-indigo-600 rounded-xl p-4 mb-4"
        >
          <p className="text-white text-center text-lg mb-2">Tu precio</p>
          <p className="text-white text-center text-5xl font-bold">$ 2000</p>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-gray-100 rounded-xl p-4"
        >
          <p className="text-gray-600 text-center text-lg mb-2">Precio de la competencia</p>
          <p className="text-indigo-600 text-center text-5xl font-bold">$ 1800</p>
        </motion.div>
      </motion.div>
    </div>
  )
}