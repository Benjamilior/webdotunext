'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    comments: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-6xl mx-auto">
      <div className="md:w-1/2 p-8 bg-purple-900 text-white">
        <h2 className="text-3xl font-bold mb-4">Ya conociste Geti</h2>
        <h3 className="text-2xl font-semibold mb-6">¡Que esperas para potenciar al máximo tu negocio online!</h3>
        <p className="mb-8">
          Contáctanos hoy mismo, te ayudaremos a resolver tus dudas y con una breve reunión te mostraremos cómo puedes impulsar el crecimiento de tu negocio en línea con nuestra herramienta.
        </p>
        <p className="mb-6">Horario de atención: 09:00 - 19:00 hora Chile</p>
        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            Agendar demo
          </Button>
          <Button variant="outline" className="w-full justify-start">
            contacto@geti.cl
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            +56 9 7431 3602
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 p-8">
        <h3 className="text-2xl font-semibold mb-6">Toma decisiones estratégicas con datos inmediatos y precisos</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre*</label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Nombre de la empresa*</label>
            <Input id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Corporativo*</label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Número de teléfono*</label>
            <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Comentarios</label>
            <Textarea id="comments" name="comments" value={formData.comments} onChange={handleChange} rows={4} />
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  )
}