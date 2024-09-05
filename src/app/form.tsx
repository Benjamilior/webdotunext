'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import Link from 'next/link'

export default function GetiContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    comments: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
    toast({
      title: "Formulario enviado",
      description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
    })
    setIsSubmitting(false)
    setFormData({ name: '', companyName: '', email: '', phone: '', comments: '' })
  }

  return (
    <div className="flex flex-col h-full w-full mt-[150px] mb-[150px] md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-6xl mx-auto my-8">
      <div className="md:w-1/2 p-8 bg-secondarydotu text-white">
        <h2 className="text-3xl font-bold mb-2">Ya conociste Dotu</h2>
        <h3 className="text-2xl font-semibold mb-6">¡Que esperas para potenciar al máximo tu negocio online!</h3>
        <p className="mb-8">
          Contáctanos hoy mismo, te ayudaremos a resolver tus dudas y con una breve reunión te mostraremos cómo puedes impulsar el crecimiento de tu negocio con nuestra herramienta.
        </p>
        
        <div className="mb-8">
          <p className="font-semibold">Horario de atención: 09:00 - 19:00 hora Chile</p>
        </div>

        <div className="space-y-4">
          <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3c4LWMM1YvEpxa-P9u9AJ04XtS7jzdd2NgIQ2yjjDndyIaouBCwIQ--B9rffq95obwi4ZPmx2N">
          <Button variant="secondary" className="w-full m-1 justify-start mr-2 bg-fourthdotu hover:bg-fifthdotu hover:text-slate-900 text-white">
            Agenda tu demo
          </Button>
          </Link>
          <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3c4LWMM1YvEpxa-P9u9AJ04XtS7jzdd2NgIQ2yjjDndyIaouBCwIQ--B9rffq95obwi4ZPmx2N">
          <Button variant="secondary" className="w-full m-1 justify-start bg-fourthdotu hover:bg-fifthdotu hover:text-slate-900 text-white">
            bmunoz@dotu.tech
          </Button>
          </Link>
          <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3c4LWMM1YvEpxa-P9u9AJ04XtS7jzdd2NgIQ2yjjDndyIaouBCwIQ--B9rffq95obwi4ZPmx2N">
          <Button variant="secondary" className="w-full m-1 justify-start bg-fourthdotu hover:bg-fifthdotu hover:text-slate-900 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            +56 9 7857 2655
          </Button>
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 p-8">
        <h3 className="text-2xl font-semibold mb-6 text-[#2E2E5F]">Toma decisiones estratégicas con datos inmediatos y precisos</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#2E2E5F]">Nombre*</Label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                aria-required="true"
                className="border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-[#2E2E5F]">Nombre de la empresa*</Label>
              <Input 
                id="companyName" 
                name="companyName" 
                value={formData.companyName} 
                onChange={handleChange} 
                required 
                aria-required="true"
                className="border-gray-300"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#2E2E5F]">Correo Corporativo*</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                aria-required="true"
                className="border-gray-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#2E2E5F]">Número de teléfono*</Label>
              <Input 
                id="phone" 
                name="phone" 
                type="tel" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                aria-required="true"
                className="border-gray-300"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="comments" className="text-[#2E2E5F]">Comentarios</Label>
            <Textarea 
              id="comments" 
              name="comments" 
              value={formData.comments} 
              onChange={handleChange} 
              rows={4}
              className="border-gray-300"
            />
          </div>
          <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3c4LWMM1YvEpxa-P9u9AJ04XtS7jzdd2NgIQ2yjjDndyIaouBCwIQ--B9rffq95obwi4ZPmx2N">
          <Button 
            type="submit" 
            className="w-full  bg-fourthdotu hover:bg-secondarydotu hover:text-white text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </Button>
          </Link>
        </form>
      </div>
    </div>
  )
}