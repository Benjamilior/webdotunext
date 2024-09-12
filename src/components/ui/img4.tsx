'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type PriceData = {
  month: string
  tuMarca: number
  competencia1: number
  competencia2: number
}

const priceData: PriceData[] = [
  { month: 'Enero', tuMarca: 15000, competencia1: 14000, competencia2: 23000 },
  { month: 'Febrero', tuMarca: 28000, competencia1: 21000, competencia2: 23000 },
  { month: 'Marzo', tuMarca: 17000, competencia1: 10000, competencia2: 14000 },
  { month: 'Abril', tuMarca: 24000, competencia1: 28000, competencia2: 19000 },
]

export default function Component() {
  const [hoveredMonth, setHoveredMonth] = useState<string | null>(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  const maxPrice = Math.max(...priceData.flatMap(d => [d.tuMarca, d.competencia1, d.competencia2]))
  const minPrice = Math.min(...priceData.flatMap(d => [d.tuMarca, d.competencia1, d.competencia2]))

  const getY = (price: number) => {
    return 200 - ((price - minPrice) / (maxPrice - minPrice)) * 180
  }

  const getCurvedPath = (key: 'tuMarca' | 'competencia1' | 'competencia2') => {
    return priceData.reduce((path, d, i, arr) => {
      if (i === 0) {
        return `M ${i * 100} ${getY(d[key])}`
      }
      const prevD = arr[i - 1]
      const midX = (i - 0.5) * 100
      const prevY = getY(prevD[key])
      const currY = getY(d[key])
      return `${path} C ${midX} ${prevY}, ${midX} ${currY}, ${i * 100} ${currY}`
    }, '')
  }

  return (
    <Card className="w-full max-w-3xl ">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-black">$</span>
          Historico de precios
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-[250px] w-full">
          <svg className="w-full h-full" viewBox="0 0 300 250" preserveAspectRatio="none">
            {/* Grid lines */}
            {[0, 1, 2, 3].map(i => (
              <line key={i} x1="0" y1={50 + i * 50} x2="300" y2={50 + i * 50} stroke="#e5e7eb" strokeWidth="1" />
            ))}
            
            {/* Price lines */}
            <path 
              d={getCurvedPath('tuMarca')} 
              fill="none" 
              stroke="#8b5cf6" 
              strokeWidth="3"
              className={animate ? "animate-draw" : ""}
              style={{ strokeDasharray: 1000, strokeDashoffset: animate ? 0 : 1000 }}
            />
            <path 
              d={getCurvedPath('competencia1')} 
              fill="none" 
              stroke="#60606b" 
              strokeWidth="3"
              className={animate ? "animate-draw" : ""}
              style={{ strokeDasharray: 1000, strokeDashoffset: animate ? 0 : 1000 }}
            />
            <path 
              d={getCurvedPath('competencia2')} 
              fill="none" 
              stroke="#1e915b" 
              strokeWidth="3"
              className={animate ? "animate-draw" : ""}
              style={{ strokeDasharray: 1000, strokeDashoffset: animate ? 0 : 1000 }}
            />

            {/* Hover indicators */}
            {priceData.map((d, i) => (
              <g key={i} onMouseEnter={() => setHoveredMonth(d.month)} onMouseLeave={() => setHoveredMonth(null)}>
                <circle 
                  cx={i * 100} 
                  cy={getY(d.tuMarca)} 
                  r="5" 
                  fill={hoveredMonth === d.month ? "#8b5cf6" : "transparent"} 
                  className="transition-all duration-300 ease-in-out"
                />
                <circle 
                  cx={i * 100} 
                  cy={getY(d.competencia1)} 
                  r="5" 
                  fill={hoveredMonth === d.month ? "#60606b" : "transparent"} 
                  className="transition-all duration-300 ease-in-out"
                />
                <circle 
                  cx={i * 100} 
                  cy={getY(d.competencia2)} 
                  r="5" 
                  fill={hoveredMonth === d.month ? "#1e915b" : "transparent"} 
                  className="transition-all duration-300 ease-in-out"
                />
              </g>
            ))}
          </svg>

          {/* X-axis labels */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-sm text-gray-500">
            {priceData.map(d => (
              <span key={d.month}>{d.month}</span>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#8b5cf6]"></div>
            <span className="text-sm">Tu Negocio</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#60606b]"></div>
            <span className="text-sm">Competidor 1</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#1e915b]"></div>
            <span className="text-sm">Competidor 2</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}