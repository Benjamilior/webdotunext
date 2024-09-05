import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from 'lucide-react'

export default function Img3() {
  return (
    <div className="min-h-auto bg-gray-100 flex items-center justify-center p-4">
    <Card className="w-full max-w-2xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Alerta de Precio:</CardTitle>
        <AlertCircle className="h-5 w-5 text-red-500" />
      </CardHeader>
      <CardContent>
        <div className="text-sm text-gray-500 mb-4">
          <p>De: contacto@dotu.tech</p>
          <p>Para: mi</p>
        </div>
        
        {/* Contenido para pantallas grandes (Desktop) */}
        <div className="hidden sm:block space-y-4">
          <p>
            Detectamos que el precio de tu producto Tostadora Premium es actualmente mayor que el de tus competidores. Esto puede afectar tu rendimiento de ventas.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="font-semibold">Tu Producto: Tostadora Premium</p>
            <p>Precio actual: $29.990</p>
            <p>Precio promedio de tus competidores: $23.990</p>
          </div>
          <p>
            Te recomendamos revisar tu precio para permanecer competitivo en el mercado. Te sugerimos:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Ajustar tu precio para acercarse al promedio de mercado</li>
            <li>Toma en consideración tus márgenes al realizar cualquier acción</li>
          </ul>
          <p>
            ¡Saludos!
            <br />
            Dotu
          </p>
        </div>
  
        {/* Contenido para pantallas pequeñas (Mobile) */}
        <div className="block sm:hidden space-y-4">
          <p>
            Detectamos que el precio de tu producto es mayor que el de tus competidores.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="font-semibold">Tostadora Premium</p>
            <p>Precio actual: $29.990</p>
            <p>Competidores: $23.990</p>
          </div>
          <p>
            Revisa tu precio para mantenerte competitivo.
          </p>
          <p>
            ¡Saludos!
            <br />
            Dotu
          </p>
        </div>
  
      </CardContent>
    </Card>
  </div>
  
  )
}