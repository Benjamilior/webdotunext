'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Check, Zap } from "lucide-react"
import Link from 'next/link'

export default function PricingPage() {
  const [skus, setSkus] = useState(100)
  const [competitors, setCompetitors] = useState(1)
  const [customPrice, setCustomPrice] = useState(100)

  useEffect(() => {
    // ESTE ES EL VALORRR
    setCustomPrice(skus * competitors*110)
  }, [skus, competitors])

  return (
    <div className='mt-16 bg[#F9FAFB]'>
    <div className="container mx-auto px-4 py-16 h-full">
      <h1 className="text-4xl md:text-5xl font-bold text-primarydotu text-center mb-4">Elige tu plan</h1>
      <p className="text-xl text-center text-muted-foreground text-primarydotu mb-12">Busca el plan que se adapte a las necesidades de tu negocio.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Normal Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl  text-primarydotu">Plan Basico</CardTitle>
            <CardDescription className='text-primarydotu'>Perfecto para pequeños negocios con poco Skus</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-4xl font-bold mb-6  text-primarydotu">$60.000<span className="text-xl font-normal text-muted-foreground">/mensual</span></p>
            <ul className="space-y-2">
              <li className="flex items-center text-primarydotu"><Check className="mr-2 text-green-500" /> Para 100 SKUs</li>
              <li className="flex items-center  text-primarydotu"><Check className="mr-2 text-green-500" /> 5 Competidores</li>
              <li className="flex items-center  text-primarydotu"><Check className="mr-2 text-green-500" /> Monitorea 500 Links </li>
              <li className="flex items-center  text-primarydotu"><Check className="mr-2 text-green-500" /> Actualizacion 3 veces por semana</li>
              <li className="flex items-center  text-primarydotu"><Check className="mr-2 text-green-500" /> Alerta de Precios por Correo</li>
              <li className="flex items-center  text-primarydotu"><Check className="mr-2 text-green-500" /> Reporte de Stock de Competidores</li>
            </ul>
          </CardContent>
            <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3c4LWMM1YvEpxa-P9u9AJ04XtS7jzdd2NgIQ2yjjDndyIaouBCwIQ--B9rffq95obwi4ZPmx2N">
          <CardFooter>
            <Button className="w-full  bg-fourthdotu">Agenda tu demo</Button>
          </CardFooter>
            </Link>
        </Card>

        {/* Custom Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl  text-primarydotu">Plan Empresarial</CardTitle>
            <CardDescription className=' text-primarydotu'>Pensado en medianas y grandes empresas que quieran aumentar su competitividad</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
  {customPrice > 60000 ? (
    <p className="text-4xl text-primarydotu font-bold mb-6">
      ${customPrice.toLocaleString('es-ES')}
      <span className="text-xl font-normal text-muted-foreground">/mensual</span>
    </p>
  ) : (
    <p className="text-2xl text-primarydotu font-bold mb-6">
      Prefiera el plan más pequeño
    </p>
  )}
  <div className="space-y-6">
    <div>
      <label htmlFor="sku-slider" className="block text-primarydotu text-base font-medium mb-2">
        Numero de SKUs a monitorear: {skus}
      </label>
      <Slider
        id="sku-slider"
        min={1}
        max={2000}
        step={1}
        value={[skus]}
        onValueChange={(value) => setSkus(value[0])}
        className="mb-2"
      />
      <div className="flex justify-between text-primarydotu text-xs text-muted-foreground">
        <span>1</span>
        <span>1000</span>
        <span>2000</span>
      </div>
    </div>
    <div>
      <label htmlFor="competitor-slider" className="block text-primarydotu text-base font-medium mb-2">
        Numero de Competidores: {competitors}
      </label>
      <Slider
        id="competitor-slider"
        min={1}
        max={20}
        step={1}
        value={[competitors]}
        onValueChange={(value) => setCompetitors(value[0])}
        className="mb-2"
      />
      <div className="flex justify-between text-xs text-primarydotutext-muted-foreground">
        <span className="text-primarydotu">1</span>
        <span className="text-primarydotu">10</span>
        <span className="text-primarydotu">20</span>
      </div>
    </div>
  </div>
</CardContent>
          <CardContent className="flex-grow">
            <ul className="space-y-2">
              <li className="flex items-center  text-primarydotu"><Check className="mr-2 text-green-500" /> Para {skus} SKUs</li>
              <li className="flex items-center  text-primarydotu"><Check className="mr-2 text-green-500" /> {competitors} Competidores</li>
              <li className="flex items-center  text-primarydotu"><Check className="mr-2 text-green-500" /> Monitorea {(skus*competitors).toLocaleString('es-ES')} Links</li>
              <li className="flex items-center  text-primarydotu"><Check className="mr-2 text-green-500" /> Actualizaciónes personalizable</li>
              <li className="flex items-center  text-primarydotu"><Check className="mr-2 text-green-500" /> Alerta de Precio por Correo</li>
              <li className="flex items-center  text-primarydotu"><Check className="mr-2 text-green-500" /> Reporte de Stock de Competidores</li>
            </ul>
          </CardContent>
          <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3c4LWMM1YvEpxa-P9u9AJ04XtS7jzdd2NgIQ2yjjDndyIaouBCwIQ--B9rffq95obwi4ZPmx2N">
          <CardFooter className="flex flex-col items-stretch">
            <Button className="w-full mb-2 bg-fourthdotu">Agenda tu demo</Button>
            
          </CardFooter>
            </Link>
        </Card>
      </div>
    </div>
    </div>
  )
}