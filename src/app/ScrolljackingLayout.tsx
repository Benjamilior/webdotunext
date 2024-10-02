'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from 'lucide-react'
import ComponentKPI from '../components/ui/kpialert'
import VeldeComponent from "../components/ui/veldekpi"
import YellowComponent from "../components/ui/yellowkpi"
import RedKPI from '@/components/ui/redkpi'
import Img1 from "../components/ui/img1"
import Img2 from "../components/ui/Img2"
import Img3 from "../components/ui/img3"
import Img4 from "../components/ui/img4"

export default function Component() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionsRef.current.findIndex(section => section === entry.target)
          setActiveSection(index)
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-10')
        } else {
          entry.target.classList.add('opacity-0', 'translate-y-10')
          entry.target.classList.remove('opacity-100', 'translate-y-0')
        }
      })
    }, { threshold: 0.5 })

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  // Función para seleccionar el componente KPI correcto
  const renderKPIComponent = (index: number) => {
    switch (index) {
      case 0:
        return <RedKPI />
      case 3:
        return <YellowComponent />
      case 1:
        return <VeldeComponent />
      case 2:
        return <ComponentKPI />
      default:
        return null
    }
  }

  // Función para renderizar las imágenes específicas
  const renderImage = (index: number) => {
    switch (index) {
      case 0:
        return <Img1 />
      case 1:
        return <Img3 />
      case 2:
        return <Img4 />
      case 3:
        return <Img2 />
      default:
        return (
          <div className="bg-gradient-to-br from-primary/20 to-primary/40 w-full h-64 rounded-lg shadow-inner flex items-center justify-center text-primary-foreground font-bold text-xl">
            Imagen {index + 1}
          </div>
        )
    }
  }

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100">
      <div className='mt-[100px] p-8 text-center sm:w-1/2 sm:mx-auto'>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center">
          <span className="block text-primarydotu mb-2">Solución para Retailers</span>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-center leading-8 text-secondarydotu">
          Software que automatiza el control de tus productos, monitorea las acciones de tu competencia y mantente siempre competitivo.
        </p>
      </div>

      {sections.map((section, index) => (
        <div
          key={index}
          ref={(el: HTMLDivElement | null) => {
            if (el) {
              sectionsRef.current[index] = el;
            }
          }}
          className="sm:min-h-[calc(100vh-250px)] flex items-center justify-center transition-all duration-500 ease-in-out"
        >
          <Card className="container mx-auto p-8 bg-white/80 backdrop-blur-sm shadow-lg">
            <div className={`flex flex-col md:flex-row items-center ${section.imageLeft ? 'md:flex-row-reverse' : ''} gap-8`}>
              <div className="md:w-1/2">
                {renderImage(index)} {/* Renderiza la imagen correspondiente */}
                <div className="w-full mt-4">
                  {renderKPIComponent(index)} {/* Renderiza el componente KPI correspondiente */}
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-primary">{section.title}</h2>
                {section.subtitle && <h3 className="text-xl mb-4 text-primary/80">{section.subtitle}</h3>}
                <p className="mb-6 text-xl text-gray-600">{section.content}</p>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
}

const sections = [
  {
    title: "1. Monitoreo de Precios",
    subtitle: "",
    content: "Compara tus precios con la competencia y analiza tu competitividad en el mercado. Automatiza la recopilación y análisis de datos. Descubre productos con mayor diferencia de precios y ajusta tu estrategia para maximizar márgenes.",
    imageLeft: true,
  },
  {
    title: "2. Recibe alertas de variación de precios",
    content: "Mantente siempre un paso adelante de la competencia con nuestras alertas personalizadas de variación de precios. Recibe notificaciones en cuando ocurran cambios significativos en los precios de tus productos y los de la competencia.",
    imageLeft: false,
    ctaText: "Configura alertas",
    kpiContent: "Área de KPI 2" // Contenido específico para la zona de KPI
  },
  {
    title: "3. Precio Historico",
    content: "Mantén el control total sobre el comportamiento de precios de tus productos a lo largo del tiempo con nuestro sistema avanzado de seguimiento histórico. Conoce cómo han fluctuado los precios no solo de tus propios productos, sino también los de la competencia, y utiliza esa valiosa información para tomar decisiones estratégicas informadas.",
    imageLeft: true,
    ctaText: "Optimiza ahora",
    kpiContent: "Área de KPI 3" // Contenido específico para la zona de KPI
  },
  {
    title: "4. Quiebres de Stock",
    content: "Obtén información del momento en que tus productos o los de tu competencia se quedan sin disponibilidad de cara al consumidor.",
    imageLeft: false,
    ctaText: "Optimiza ahora",
    kpiContent: "Área de KPI 3" // Contenido específico para la zona de KPI
  },
]
