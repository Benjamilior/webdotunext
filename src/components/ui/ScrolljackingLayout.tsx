'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from 'lucide-react'

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

  return (
    
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100">
      <div className='bg-primarydotu w-full mt-[3px] h-10'></div>
      {sections.map((section, index) => (
        <div
          key={index}
          ref={(el: HTMLDivElement | null) => {
            if (el) {
              sectionsRef.current[index] = el;
            }
          }}
          className="min-h-screen flex items-center justify-center transition-all duration-500 ease-in-out"
        >
          <Card className="container mx-auto p-8 bg-white/80 backdrop-blur-sm shadow-lg">
            <div className={`flex flex-col md:flex-row items-center ${section.imageLeft ? 'md:flex-row-reverse' : ''} gap-8`}>
              <div className="md:w-1/2">
                <div className="bg-gradient-to-br from-primary/20 to-primary/40 w-full h-64 rounded-lg shadow-inner flex items-center justify-center text-primary-foreground font-bold text-xl">
                  Imagen {index + 1}
                </div>
                {index === 0 && (
                  <div className="bg-yellow-200 w-full h-16 mt-4 rounded-lg shadow-inner flex items-center justify-center text-yellow-800 font-semibold">
                    Área de KPI
                  </div>
                )}
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-primary">{section.title}</h2>
                {section.subtitle && <h3 className="text-xl mb-4 text-primary/80">{section.subtitle}</h3>}
                <p className="mb-6 text-gray-600">{section.content}</p>
                <Button className="w-full md:w-auto">{section.ctaText}</Button>
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
    title: "El Mejor Nombre de una Seccion",
    subtitle: "1. Posicionamiento (COLOCAR IMG DE LOS KPI)",
    content: "Descubre oportunidades valiosas para maximizar tus ventas y adelantarte a tus competidores. Dotu te ofrece una visión clara y detallada de cómo se posicionan tus precios en el mercado, así podrás reaccionar a tiempo y aumentar tu competitividad.",
    imageLeft: true,
    ctaText: "Descubre más"
  },
  {
    title: "2. Alerta de variación de precio",
    content: "Mantente siempre un paso adelante de la competencia con nuestras alertas personalizadas de variación de precios. Recibe notificaciones en tiempo real cuando ocurran cambios significativos en los precios de tus productos y los de la competencia.",
    imageLeft: false,
    ctaText: "Configura alertas"
  },
  {
    title: "3. Accion Sugerida",
    content: "Nuestro sistema analiza continuamente los datos de precios y te ofrece sugerencias concretas y personalizadas sobre cómo ajustar tus precios para aumentar tus ingresos y mejorar tu competitividad. Ya sea una pequeña reducción para captar más clientes o un ajuste estratégico para maximizar tus márgenes, nuestras recomendaciones te proporcionan la guía necesaria para tomar decisiones efectivas y oportunas. Optimiza tus precios de manera inteligente y mantén a tu negocio en la cima del mercado.",
    imageLeft: true,
    ctaText: "Optimiza ahora"
  }
]
