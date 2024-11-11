import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpIcon, UsersIcon, LineChartIcon, BarChartIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="w-full bg-gradient-to-br from-purple-700 to-indigo-900  sm:min-h-[500px] py-12 flex items-center justify-center">
      <div className="max-w-7xl w-full px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Nuestro Impacto</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Incremento en Unidades Vendidas</CardTitle>
              <ArrowUpIcon className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">62%</div>
              <p className="text-xs text-white/70">Sin sacrificar margen</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Aumento en Margenes</CardTitle>
              <UsersIcon className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">3% - 5%</div>
              <p className="text-xs text-white/70">En 1 año o menos desde implementación</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Aumento en la rotación de inventario</CardTitle>
              <LineChartIcon className="h-4 w-4 text-orange-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">11%</div>
              <p className="text-xs text-white/70">en 3 meses</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Ahorro en tiempo</CardTitle>
              <BarChartIcon className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">300</div>
              <p className="text-xs text-white/70">Horas ahorradas mensualmente</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}