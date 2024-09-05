import { CheckCircle, X } from "lucide-react"

export default function VeldeComponent() {
  return (
    <div className="max-w-full mx-auto">
      <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg shadow-sm flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
          <p className="text-base font-medium">
            Tus productos están bien posicionados en el mercado
          </p>
        </div>
        <button className="text-green-600 hover:text-green-800 transition-colors">
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}