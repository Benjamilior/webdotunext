'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Globe } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className=" flex items-center justify-center fixed  top-0 left-0 right-0 bg-white shadow-md z-50 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-x-6 lg:px-8">
        <div className="flex justify-between space-x-6 h-16 ">
          <div className="flex items-center ">
            <Link href="/" className=" flex-shrink-0 items-center w-32 h-32 overflow-hidden">
              <svg  className="w-full h-full object-contain" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="491" zoomAndPan="magnify" viewBox="0 0 368.25 226.499993" height="302" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g /></defs><g fill="#2f026c" fillOpacity="1"><g transform="translate(-6.319785, 141.801498)"><g><path d="M 88.046875 -122.34375 C 90.441406 -122.34375 92.367188 -121.613281 93.828125 -120.15625 C 95.296875 -118.695312 96.03125 -116.765625 96.03125 -114.359375 L 96.03125 -42.921875 C 96.03125 -34.773438 94.125 -27.382812 90.3125 -20.75 C 86.5 -14.125 81.328125 -8.90625 74.796875 -5.09375 C 68.273438 -1.28125 60.992188 0.625 52.953125 0.625 C 44.910156 0.625 37.570312 -1.28125 30.9375 -5.09375 C 24.300781 -8.90625 19.101562 -14.125 15.34375 -20.75 C 11.59375 -27.382812 9.71875 -34.773438 9.71875 -42.921875 C 9.71875 -51.066406 11.460938 -58.453125 14.953125 -65.078125 C 18.453125 -71.710938 23.253906 -76.910156 29.359375 -80.671875 C 35.472656 -84.429688 42.289062 -86.3125 49.8125 -86.3125 C 55.875 -86.3125 61.515625 -85.054688 66.734375 -82.546875 C 71.953125 -80.046875 76.390625 -76.550781 80.046875 -72.0625 L 80.046875 -114.359375 C 80.046875 -116.765625 80.800781 -118.695312 82.3125 -120.15625 C 83.832031 -121.613281 85.742188 -122.34375 88.046875 -122.34375 Z M 52.953125 -13.46875 C 58.171875 -13.46875 62.894531 -14.75 67.125 -17.3125 C 71.351562 -19.875 74.664062 -23.398438 77.0625 -27.890625 C 79.46875 -32.378906 80.671875 -37.390625 80.671875 -42.921875 C 80.671875 -48.460938 79.46875 -53.453125 77.0625 -57.890625 C 74.664062 -62.328125 71.351562 -65.820312 67.125 -68.375 C 62.894531 -70.9375 58.171875 -72.21875 52.953125 -72.21875 C 47.722656 -72.21875 42.992188 -70.9375 38.765625 -68.375 C 34.535156 -65.820312 31.191406 -62.328125 28.734375 -57.890625 C 26.285156 -53.453125 25.0625 -48.460938 25.0625 -42.921875 C 25.0625 -37.390625 26.285156 -32.378906 28.734375 -27.890625 C 31.191406 -23.398438 34.535156 -19.875 38.765625 -17.3125 C 42.992188 -14.75 47.722656 -13.46875 52.953125 -13.46875 Z M 52.953125 -13.46875 " /></g></g></g><g fill="#2f026c" fillOpacity="1"><g transform="translate(103.797518, 141.801498)"><g><path d="M 52.953125 0.625 C 44.597656 0.625 37.128906 -1.226562 30.546875 -4.9375 C 23.960938 -8.644531 18.84375 -13.785156 15.1875 -20.359375 C 11.539062 -26.941406 9.71875 -34.410156 9.71875 -42.765625 C 9.71875 -51.222656 11.539062 -58.738281 15.1875 -65.3125 C 18.84375 -71.894531 23.960938 -77.039062 30.546875 -80.75 C 37.128906 -84.457031 44.597656 -86.3125 52.953125 -86.3125 C 61.203125 -86.3125 68.585938 -84.457031 75.109375 -80.75 C 81.640625 -77.039062 86.757812 -71.894531 90.46875 -65.3125 C 94.175781 -58.738281 96.03125 -51.222656 96.03125 -42.765625 C 96.03125 -34.410156 94.203125 -26.941406 90.546875 -20.359375 C 86.890625 -13.785156 81.796875 -8.644531 75.265625 -4.9375 C 68.742188 -1.226562 61.304688 0.625 52.953125 0.625 Z M 52.953125 -13.46875 C 58.273438 -13.46875 63.050781 -14.71875 67.28125 -17.21875 C 71.507812 -19.726562 74.796875 -23.203125 77.140625 -27.640625 C 79.492188 -32.085938 80.671875 -37.128906 80.671875 -42.765625 C 80.671875 -48.410156 79.492188 -53.476562 77.140625 -57.96875 C 74.796875 -62.457031 71.507812 -65.953125 67.28125 -68.453125 C 63.050781 -70.960938 58.273438 -72.21875 52.953125 -72.21875 C 47.617188 -72.21875 42.835938 -70.960938 38.609375 -68.453125 C 34.378906 -65.953125 31.0625 -62.457031 28.65625 -57.96875 C 26.257812 -53.476562 25.0625 -48.410156 25.0625 -42.765625 C 25.0625 -37.128906 26.257812 -32.085938 28.65625 -27.640625 C 31.0625 -23.203125 34.378906 -19.726562 38.609375 -17.21875 C 42.835938 -14.71875 47.617188 -13.46875 52.953125 -13.46875 Z M 52.953125 -13.46875 " /></g></g></g><g fill="#2f026c" fillOpacity="1"><g transform="translate(209.52891, 141.801498)"><g><path d="M 50.59375 -15.671875 C 52.476562 -15.671875 54.070312 -14.9375 55.375 -13.46875 C 56.6875 -12.007812 57.34375 -10.128906 57.34375 -7.828125 C 57.34375 -5.535156 56.476562 -3.65625 54.75 -2.1875 C 53.03125 -0.726562 50.8125 0 48.09375 0 L 45.28125 0 C 40.15625 0 35.476562 -1.328125 31.25 -3.984375 C 27.019531 -6.648438 23.703125 -10.28125 21.296875 -14.875 C 18.898438 -19.476562 17.703125 -24.648438 17.703125 -30.390625 L 17.703125 -69.078125 L 10.5 -69.078125 C 8.300781 -69.078125 6.523438 -69.703125 5.171875 -70.953125 C 3.816406 -72.210938 3.140625 -73.785156 3.140625 -75.671875 C 3.140625 -77.753906 3.816406 -79.421875 5.171875 -80.671875 C 6.523438 -81.929688 8.300781 -82.5625 10.5 -82.5625 L 17.703125 -82.5625 L 17.703125 -105.109375 C 17.703125 -107.410156 18.429688 -109.289062 19.890625 -110.75 C 21.359375 -112.21875 23.238281 -112.953125 25.53125 -112.953125 C 27.832031 -112.953125 29.710938 -112.21875 31.171875 -110.75 C 32.640625 -109.289062 33.375 -107.410156 33.375 -105.109375 L 33.375 -82.5625 L 46.6875 -82.5625 C 48.875 -82.5625 50.644531 -81.929688 52 -80.671875 C 53.363281 -79.421875 54.046875 -77.753906 54.046875 -75.671875 C 54.046875 -73.785156 53.363281 -72.210938 52 -70.953125 C 50.644531 -69.703125 48.875 -69.078125 46.6875 -69.078125 L 33.375 -69.078125 L 33.375 -30.390625 C 33.375 -26.210938 34.519531 -22.710938 36.8125 -19.890625 C 39.113281 -17.078125 41.9375 -15.671875 45.28125 -15.671875 Z M 50.59375 -15.671875 " /></g></g></g><g fill="#2f026c" fillOpacity="1"><g transform="translate(280.079172, 191.946218)"><g><path d="M 24.484375 -74.4375 C 24.703125 -71.59375 24.785156 -68.144531 24.734375 -64.09375 C 24.679688 -60.039062 24.734375 -55.796875 24.890625 -51.359375 C 25.054688 -46.921875 25.410156 -42.484375 25.953125 -38.046875 C 26.503906 -33.609375 27.460938 -29.632812 28.828125 -26.125 C 30.203125 -22.625 32.117188 -19.773438 34.578125 -17.578125 C 37.046875 -15.390625 40.253906 -14.296875 44.203125 -14.296875 C 48.148438 -14.296875 51.351562 -15.390625 53.8125 -17.578125 C 56.28125 -19.773438 58.195312 -22.625 59.5625 -26.125 C 60.9375 -29.632812 61.894531 -33.609375 62.4375 -38.046875 C 62.988281 -42.484375 63.347656 -46.921875 63.515625 -51.359375 C 63.679688 -55.796875 63.734375 -60.039062 63.671875 -64.09375 C 63.617188 -68.144531 63.703125 -71.59375 63.921875 -74.4375 C 64.359375 -81.226562 67.148438 -84.625 72.296875 -84.625 C 74.273438 -84.625 75.8125 -84.078125 76.90625 -82.984375 C 78 -81.890625 78.789062 -80.351562 79.28125 -78.375 C 79.78125 -76.40625 80.082031 -74.050781 80.1875 -71.3125 C 80.300781 -68.570312 80.359375 -65.503906 80.359375 -62.109375 C 80.359375 -55.097656 80 -47.84375 79.28125 -40.34375 C 78.570312 -32.84375 76.984375 -25.96875 74.515625 -19.71875 C 72.054688 -13.476562 68.414062 -8.328125 63.59375 -4.265625 C 58.769531 -0.210938 52.304688 1.8125 44.203125 1.8125 C 36.097656 1.8125 29.632812 -0.210938 24.8125 -4.265625 C 19.988281 -8.328125 16.34375 -13.476562 13.875 -19.71875 C 11.414062 -25.96875 9.828125 -32.84375 9.109375 -40.34375 C 8.398438 -47.84375 8.046875 -55.097656 8.046875 -62.109375 C 8.046875 -65.503906 8.097656 -68.570312 8.203125 -71.3125 C 8.316406 -74.050781 8.617188 -76.40625 9.109375 -78.375 C 9.609375 -80.351562 10.40625 -81.890625 11.5 -82.984375 C 12.59375 -84.078125 14.128906 -84.625 16.109375 -84.625 C 21.253906 -84.625 24.046875 -81.226562 24.484375 -74.4375 Z M 24.484375 -74.4375 " /></g></g></g></svg>
              <span className="block sm:hidden ml-2 text-2xl font-bold text-secondarydotu">Dotu</span>

            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="https://www.linkedin.com/company/dotu-io" className="text-primarydotu hover:text-secondarydotu px-3 py-2 rounded-md text-xl font-medium">
                Quiénes somos
              </Link>
              <Link href="/clientes" className="text-primarydotu hover:text-secondarydotu px-3 py-2 rounded-md text-xl font-medium">
                Producto
              </Link>
              <Link href="/clientes" className="text-primarydotu hover:text-secondarydotu px-3 py-2 rounded-md text-xl font-medium">
                Clientes
              </Link>
              <Link href="/pricing" className="text-primarydotu hover:text-secondarydotu px-3 py-2 rounded-md text-xl font-medium">
                Precio
              </Link>
             
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button className="mr-2 bg-fourthdotu hover:bg-secondarydotu">
              Agenda tu demo
            </Button>
            
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden max-h-4 mt-20 fixed inset-0 bg-white
         shadow-md z-50" >
          <div className="pt-2 pb-3 space-y-1 bg-white">
            <Link href="/quienes-somos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Quiénes somos
            </Link>
            <Link href="/productos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Productos
            </Link>
            <Link href="/clientes" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Clientes
            </Link>
            <Link href="/contacto" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Precio
            </Link>
            <Link href="/contacto" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Planes
            </Link>
           
          </div>
          <div className="pt-4 pb-3 border-t bg-slate-50 border-gray-200">
            
            <div className="mt-3 flex items-center px-4">
              <Button className="w-full bg-fourthdotu">
                Agendar una demo
              </Button>
            </div>
           
          </div>
        </div>
      )}
    </nav>
  )
}