import { AlertTriangle, X } from "lucide-react"

export default function yellowComponent() {
  return (
    <div className="max-w-full mx-auto">
      <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg shadow-sm flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="h-5 w-5 flex-shrink-0 text-yellow-600" />
          <p className="text-base font-medium">
            Momento de actuar, competidores sin stock.
          </p>
        </div>
        <button className="text-yellow-600 hover:text-yellow-800 transition-colors">
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}