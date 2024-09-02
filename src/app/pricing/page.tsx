'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Check, Zap } from "lucide-react"

export default function PricingPage() {
  const [skus, setSkus] = useState(100)
  const [competitors, setCompetitors] = useState(1)
  const [customPrice, setCustomPrice] = useState(100)

  useEffect(() => {
    setCustomPrice(skus * competitors)
  }, [skus, competitors])

  return (
    <div className='h-full bg[#F9FAFB]'>
    <div className="container mx-auto px-4 py-16 h-full">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Choose Your Plan</h1>
      <p className="text-xl text-center text-muted-foreground mb-12">Select the perfect plan for your business needs</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Normal Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl">Standard Plan</CardTitle>
            <CardDescription>Perfect for small to medium businesses</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-4xl font-bold mb-6">$99<span className="text-xl font-normal text-muted-foreground">/month</span></p>
            <ul className="space-y-2">
              <li className="flex items-center"><Check className="mr-2 text-green-500" /> Up to 1000 SKUs</li>
              <li className="flex items-center"><Check className="mr-2 text-green-500" /> 5 competitors</li>
              <li className="flex items-center"><Check className="mr-2 text-green-500" /> Daily price updates</li>
              <li className="flex items-center"><Check className="mr-2 text-green-500" /> Email support</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Get Started</Button>
          </CardFooter>
        </Card>

        {/* Custom Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl">Custom Plan</CardTitle>
            <CardDescription>Tailored to your specific needs</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-4xl font-bold mb-6">${customPrice}<span className="text-xl font-normal text-muted-foreground">/month</span></p>
            <div className="space-y-6">
              <div>
                <label htmlFor="sku-slider" className="block text-sm font-medium mb-2">Number of SKUs: {skus}</label>
                <Slider
                  id="sku-slider"
                  min={1}
                  max={2000}
                  step={1}
                  value={[skus]}
                  onValueChange={(value) => setSkus(value[0])}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>1000</span>
                  <span>2000</span>
                </div>
              </div>
              <div>
                <label htmlFor="competitor-slider" className="block text-sm font-medium mb-2">Number of Competitors: {competitors}</label>
                <Slider
                  id="competitor-slider"
                  min={1}
                  max={10}
                  step={1}
                  value={[competitors]}
                  onValueChange={(value) => setCompetitors(value[0])}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1</span>
                  <span>5</span>
                  <span>10</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-stretch">
            <Button className="w-full mb-2">Get Custom Plan</Button>
            <Badge variant="outline" className="w-full justify-center py-1">
              <Zap className="mr-1 h-4 w-4" /> Best Value
            </Badge>
          </CardFooter>
        </Card>
      </div>
    </div>
    </div>
  )
}