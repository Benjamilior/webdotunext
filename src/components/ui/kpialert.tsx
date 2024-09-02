import { AlertCircle, X } from "lucide-react"

export default function ComponentKPI() {
  return (
    <div className="max-w-full mx-auto">
      <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg shadow-sm flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-600" />
          <p className="text-base font-medium">
            Tus productos tienen precios más altos que tu competencia
          </p>
        </div>
        <button className="text-red-600 hover:text-red-800 transition-colors">
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}