import { useState } from 'react'
import { ChevronDown, ChevronUp, DollarSign, BarChart2, TrendingUp, ShoppingCart, Users, Target } from 'lucide-react'
import React from 'react';
import OnlineComponent from "./onlinestock"

export default function PricingSheet() {
    // Inicializa con la primera fila expandida
    const [expandedRow, setExpandedRow] = useState<number | null>(0);
    2
    const toggleRow = (index: number) => {
        setExpandedRow(expandedRow === index ? null : index);
    };
    
    const data = [
      { 
        product: 'Producto A', 
        yourPrice: 19.990, 
        competitor1: 22.990, 
        competitor2: 21.500, 
        competitor3: 20.750,
        profitMargin: 15,
        marketPosition: 'Competitive',
        salesTrend: 'Up 5%',
        conversionRate: '3.2%',
        customerLifetimeValue: '$150',
        marketShare: '22%',
        kpis: {
          price: { min: 19.990, max: 22.990, avg: 21.310 },
          margin: { min: 12, max: 18, avg: 15 },
          sales: { min: 1000, max: 1500, avg: 1250 }
        }
      },
      { 
        product: 'Producto B', 
        yourPrice: 34.990, 
        competitor1: 32.990, 
        competitor2: 36.500, 
        competitor3: 33.750,
        profitMargin: 20,
        marketPosition: 'Leader',
        salesTrend: 'Up 8%',
        conversionRate: '4.5%',
        customerLifetimeValue: '$200',
        marketShare: '28%',
        kpis: {
          price: { min: 32.99, max: 36.50, avg: 34.56 },
          margin: { min: 18, max: 25, avg: 21 },
          sales: { min: 1500, max: 2000, avg: 1750 }
        }
      },
      { 
        product: 'Producto C', 
        yourPrice: 15.990, 
        competitor1: 17.990, 
        competitor2: 14.500, 
        competitor3: 16.750,
        profitMargin: 12,
        marketPosition: 'Challenger',
        salesTrend: 'Up 3%',
        conversionRate: '2.8%',
        customerLifetimeValue: '$120',
        marketShare: '18%',
        kpis: {
          price: { min: 14.50, max: 17.99, avg: 16.31 },
          margin: { min: 10, max: 15, avg: 12 },
          sales: { min: 800, max: 1200, avg: 1000 }
        }
      },
      { 
        product: 'Producto Z', 
        yourPrice: 49.99, 
        competitor1: 52.99, 
        competitor2: 48.50, 
        competitor3: 51.75,
        profitMargin: 25,
        marketPosition: 'Premium',
        salesTrend: 'Up 10%',
        conversionRate: '5.1%',
        customerLifetimeValue: '$300',
        marketShare: '15%',
        kpis: {
          price: { min: 48.50, max: 52.99, avg: 50.81 },
          margin: { min: 22, max: 28, avg: 25 },
          sales: { min: 500, max: 800, avg: 650 }
        }
      },
      { 
          product: 'Producto F', 
          yourPrice: 49.99, 
          competitor1: 52.99, 
          competitor2: 48.50, 
          competitor3: 51.75,
          profitMargin: 25,
          marketPosition: 'Premium',
          salesTrend: 'Up 10%',
          conversionRate: '5.1%',
          customerLifetimeValue: '$300',
          marketShare: '15%',
          kpis: {
            price: { min: 48.50, max: 52.99, avg: 50.81 },
            margin: { min: 22, max: 28, avg: 25 },
            sales: { min: 500, max: 800, avg: 650 }
          }
        },
        { 
          product: 'Producto G', 
          yourPrice: 49.99, 
          competitor1: 52.99, 
          competitor2: 48.50, 
          competitor3: 51.75,
          profitMargin: 25,
          marketPosition: 'Premium',
          salesTrend: 'Up 10%',
          conversionRate: '5.1%',
          customerLifetimeValue: '$300',
          marketShare: '15%',
          kpis: {
            price: { min: 48.50, max: 52.99, avg: 50.81 },
            margin: { min: 22, max: 28, avg: 25 },
            sales: { min: 500, max: 800, avg: 650 }
          }
        },
        { 
          product: 'Producto Z', 
          yourPrice: 49.99, 
          competitor1: 52.99, 
          competitor2: 48.50, 
          competitor3: 51.75,
          profitMargin: 25,
          marketPosition: 'Premium',
          salesTrend: 'Up 10%',
          conversionRate: '5.1%',
          customerLifetimeValue: '$300',
          marketShare: '15%',
          kpis: {
            price: { min: 48.50, max: 52.99, avg: 50.81 },
            margin: { min: 22, max: 28, avg: 25 },
            sales: { min: 500, max: 800, avg: 650 }
          }
        },
    ]
   
  
    return (
      <div className="max-w-full mx-auto p-4 sm:p-6 ">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="overflow-x-auto h-auto">
            <table className="w-full">
              <thead className="bg-gray-100 ">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600">Productos</th>
                  <th className="px-4 py-2 text-left text-gray-600">Tu Precio</th>
                  <th className="px-4 py-2 text-left text-gray-600 hidden sm:table-cell">Competidor 1</th>
                  <th className="px-4 py-2 text-left text-gray-600 hidden md:table-cell">Competidor 2</th>
                  <th className="px-4 py-2 text-left text-gray-600 hidden lg:table-cell">Competidor 3</th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <React.Fragment key={index}>
                    <tr className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-4 py-2 font-medium">{row.product}</td>
                      <td className="px-4 py-2 font-bold text-green-600">${row.yourPrice}</td>
                      <td className="px-4 py-2 hidden sm:table-cell">${row.competitor1}</td>
                      <td className="px-4 py-2 hidden md:table-cell">${row.competitor2}</td>
                      <td className="px-4 py-2 hidden lg:table-cell">${row.competitor3}</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => toggleRow(index)}
                          className="text-blue-500 hover:text-blue-700"
                          aria-label={expandedRow === index ? "Collapse row" : "Expand row"}
                        >
                          {expandedRow === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                      </td>
                    </tr>
                    {expandedRow === index && (
                      <tr>
                        <td colSpan={6} className="px-4 py-4 bg-blue-50">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                           
                            <div className="overflow-x-auto">
                              <h3 className="font-bold text-lg mb-2">Analisis de KPI</h3>
                              <table className="w-full min-w-[300px]">
                                <thead>
                                  <tr className="bg-blue-100">
                                    <th className="px-2 py-1 text-left">KPI</th>
                                    <th className="px-2 py-1 text-right">Min</th>
                                    <th className="px-2 py-1 text-right">Max</th>
                                    <th className="px-2 py-1 text-right">Promedio</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="px-2 py-1 font-medium">Precio</td>
                                    <td className="px-2 py-1 text-right">${row.kpis.price.min.toFixed(2)}</td>
                                    <td className="px-2 py-1 text-right">${row.kpis.price.max.toFixed(2)}</td>
                                    <td className="px-2 py-1 text-right">${row.kpis.price.avg.toFixed(2)}</td>
                                  </tr>
                                  <tr className="bg-blue-50">
                                    <td className="px-2 py-1 font-medium">Margen (%)</td>
                                    <td className="px-2 py-1 text-right">{row.kpis.margin.min}%</td>
                                    <td className="px-2 py-1 text-right">{row.kpis.margin.max}%</td>
                                    <td className="px-2 py-1 text-right">{row.kpis.margin.avg}%</td>
                                  </tr>
                                  <tr>
                                    <td className="px-2 py-1 font-medium">Unidades vendidas</td>
                                    <td className="px-2 py-1 text-right">{row.kpis.sales.min}</td>
                                    {/* <td className="px-2 py-1 text-right">{row.kpis.sales.max}</td>
                                    <td className="px-2 py-1 text-right">{row.kpis.sales.avg}</td> */}
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
  