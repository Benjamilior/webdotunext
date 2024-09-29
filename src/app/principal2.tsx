import { Card, CardContent } from "@/components/ui/card"
import PricingSheet from "./principal"
import OnlineComponent from "./onlinestock"


const deliveryData = [
  { region: "Región 2", tuRetail: 5, competencia1: 3, competencia2: 6 },
  { region: "Región 3", tuRetail: 6, competencia1: 3, competencia2: 5 },
  { region: "Región 4", tuRetail: 3, competencia1: 5, competencia2: 5 },
]

export default function RetailDashboard() {
  return (
    <div className="w-full p-6 bg-purple-50 rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 bg-purple-600 rounded-full mr-3"></div>
        <h1 className="text-2xl font-bold">Tu Empresa</h1>

      </div>

      <div className="hidden sm:grid grid-cols-5 gap-4 mb-6">
        {[3.230, 3.150, 27,350,3].map((stat, index) => (
          <Card key={index} className="bg-white shadow">
            <CardContent className="p-4">
              <p className="text-2xl font-bold">{stat}</p>
              <div className="w-full h-1 bg-purple-200 mt-2"></div>
            </CardContent>
          </Card>
        ))}
        
      </div>

   
        <PricingSheet></PricingSheet>
    </div>
  )
}