import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type RetailStatus = {
  retail: string
  productType: string
  status: "No disponible" | "Disponible" | "Sin stock"
}

const retailStatuses: RetailStatus[] = [
  { retail: "Ripley", productType: "Smartphone", status: "No disponible" },
  { retail: "Falabella", productType: "Smartphone", status: "Disponible" },
  { retail: "Mercado Libre", productType: "Smartphone", status: "Sin stock" },
  { retail: "Paris", productType: "Smartphone", status: "Disponible" },
]

const getStatusColor = (status: RetailStatus["status"]) => {
  switch (status) {
    case "No disponible":
      return "bg-yellow-400"
    case "Disponible":
      return "bg-green-400"
    case "Sin stock":
      return "bg-red-400"
    default:
      return "bg-gray-400"
  }
}

export default function OnlineComponent() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-medium">
          <div className="h-4 w-4 rounded-full bg-purple-600"></div>
          Presencia online
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          {/* <TableHeader>
            <TableRow>
              <TableHead className="w-[30%]">Retail</TableHead>
              <TableHead className="w-[40%]">Tipo de producto</TableHead>
              <TableHead className="w-[30%]">Estado</TableHead>
            </TableRow>
          </TableHeader> */}
          <TableBody>
            {retailStatuses.map((item, index) => (
              <TableRow key={index} className={index % 2 === 1 ? "bg-muted/50" : ""}>
                <TableCell className="font-medium">{item.retail}</TableCell>
                <TableCell>{item.productType}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${getStatusColor(item.status)}`}></div>
                    <span className={item.status === "Sin stock" ? "text-red-600" : ""}>{item.status}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}