import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpIcon, UsersIcon, LineChartIcon, BarChartIcon } from "lucide-react"

export default function Component() {
  return (
    <div className="w-full bg-gradient-to-br from-purple-700 to-indigo-900 min-h-screen sm:min-h-[500px] py-12 flex items-center justify-center">
      <div className="max-w-7xl w-full px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Nuestro Impacto</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Sales Improvement</CardTitle>
              <ArrowUpIcon className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">62%</div>
              <p className="text-xs text-white/70">Increase in overall sales</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">New Customers</CardTitle>
              <UsersIcon className="h-4 w-4 text-blue-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">+2,350</div>
              <p className="text-xs text-white/70">New customers this quarter</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Average Order Value</CardTitle>
              <LineChartIcon className="h-4 w-4 text-orange-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$245.80</div>
              <p className="text-xs text-white/70">18% increase from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Customer Retention</CardTitle>
              <BarChartIcon className="h-4 w-4 text-purple-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">89%</div>
              <p className="text-xs text-white/70">5% increase in retention rate</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}