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
            <Link href="/" className=" flex-shrink-0 items-center w-32 h-32 overflow-hidden pt-9">
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 839.22 289.43">
  <defs>
    <style>{`
      .cls-1 {
        fill: #332368;
        stroke-width: 0px;
      }
    `}</style>
  </defs>
  <path id="La_O" data-name="La O" className="cls-1" d="M362.81,81.09c-57.45,0-104.02,46.57-104.02,104.02s46.57,104.02,104.02,104.02,104.02-46.57,104.02-104.02-46.57-104.02-104.02-104.02ZM361.53,255.26c-36.96,0-66.93-31.41-66.93-70.15s29.96-70.15,66.93-70.15,66.93,31.41,66.93,70.15-29.96,70.15-66.93,70.15h0Z" />
  <g id="La_T" data-name="La T">
    <polyline className="cls-1" points="527.73 39.45 564.35 39.49 527.73 39.45" />
    <path className="cls-1" d="M603.81,270.29l.03-18.31c10.03.02,18.27,8.28,18.27,18.31s-8.26,18.31-18.31,18.31v-18.31h0Z" />
    <path className="cls-1" d="M594.66,109.49l.03-18.31c10.03.02,18.27,8.28,18.27,18.31s-8.26,18.31-18.31,18.31v-18.31h0Z" />
    <path className="cls-1" d="M511.38,109.49l-.03,18.31c-10.03-.02-18.27-8.28-18.27-18.31s8.26-18.31,18.31-18.31v18.31h-.01Z" />
    <polyline className="cls-1" points="594.66 91.19 594.64 127.8 511.38 127.8 511.38 91.19 594.66 91.19" />
    <g>
      <path className="cls-1" d="M546.04,39.49l-18.31-.03c.02-10.03,8.28-18.27,18.31-18.27s18.31,8.26,18.31,18.31h-18.31Z" />
      <rect className="cls-1" x="527.73" y="39.45" width="36.61" height="182.82" />
    </g>
    <path className="cls-1" d="M564.35,222.27s1.38,34.29,39.49,29.71v36.61s-9.99,1.39-22.12-.31c-18.37-2.57-30.05-13.81-34.97-18.82-6.17-6.27-9.72-12.4-11.39-15.59-1.32-2.52-5-9.95-6.72-20.42-.73-4.48-.91-8.33-.91-11.19h36.62Z" />
  </g>
  <g id="La_U" data-name="La U">
    <g>
      <path className="cls-1" d="M689.25,102.91l-18.3-.03c.02-10.02,8.27-18.26,18.3-18.26s18.3,8.26,18.3,18.3h-18.3Z" />
      <path className="cls-1" d="M670.94,102.87c-.23,8.9-1.31,53.33.3,79.09.39,6.24.91,10.85,1.24,13.53,1.07,8.7,2.39,19.44,6.48,32.01,5.76,17.71,13.9,29.45,15.73,32.07,4.29,6.15,8.55,12.13,16.34,17.7,8.65,6.19,16.92,8.47,21.48,9.68,9.13,2.43,17,2.64,22.29,2.4v-39.01c-2.64.25-6.72.24-11.17-1.48-1.4-.54-2.63-1.17-3.68-1.81-4.73-2.74-11.98-7.82-17.68-16.46-5.04-7.65-6.6-14.85-7.93-20.87-2.44-10.99-4.94-27.25-5.43-48.21l-1.37-58.61-36.61-.03h.01Z" />
    </g>
    <g>
      <path className="cls-1" d="M820.34,102.91l18.3-.03c-.02-10.02-8.27-18.26-18.3-18.26s-18.3,8.26-18.3,18.3h18.3Z" />
      <path className="cls-1" d="M838.65,102.87c.23,8.9,1.31,53.33-.3,79.09-.39,6.24-.91,10.85-1.24,13.53-1.07,8.7-2.39,19.44-6.48,32.01-5.76,17.71-13.9,29.45-15.73,32.07-4.29,6.15-8.55,12.13-16.34,17.7-8.65,6.19-16.92,8.47-21.48,9.68-9.13,2.43-17,2.64-22.29,2.4v-39.01c2.64.25,6.72.24,11.17-1.48,1.4-.54,2.63-1.17,3.68-1.81,4.73-2.74,11.98-7.82,17.68-16.46,5.04-7.65,6.6-14.85,7.93-20.87,2.44-10.99,4.94-27.25,5.43-48.21l1.37-58.61,36.61-.03h-.01Z" />
    </g>
  </g>
  <g id="La_D" data-name="La D">
    <g>
      <path className="cls-1" d="M183.92,18.3l-18.31-.03c.02-10.03,8.28-18.27,18.31-18.27s18.31,8.26,18.31,18.31h-18.31Z" />
      <rect className="cls-1" x="165.61" y="18.26" width="36.61" height="182.82" />
    </g>
    <path className="cls-1" d="M202.22,174.48c-6.43-49.88-49.06-88.41-100.69-88.41C45.46,86.07,0,131.53,0,187.6s45.46,101.53,101.53,101.53c51.63,0,94.26-38.54,100.69-88.41v-26.24ZM100.28,256.07c-36.08,0-65.33-30.65-65.33-68.47s29.25-68.47,65.33-68.47,65.33,30.65,65.33,68.47-29.25,68.47-65.33,68.47Z" />
  </g>
            </svg>
              
              <span className="block sm:hidden ml-2 text-2xl font-bold text-secondarydotu">Dotu</span>

            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="https://www.linkedin.com/company/dotu-io" className="text-primarydotu hover:text-secondarydotu px-3 py-2 rounded-md text-xl font-medium">
                Quiénes somos
              </Link>
              <Link href="/" className="text-primarydotu hover:text-secondarydotu px-3 py-2 rounded-md text-xl font-medium">
                Producto
              </Link>
              <Link href="#clientes" className="text-primarydotu hover:text-secondarydotu px-3 py-2 rounded-md text-xl font-medium">
                Clientes
              </Link>
              <Link href="/pricing" className="text-primarydotu hover:text-secondarydotu px-3 py-2 rounded-md text-xl font-medium">
                Precio
              </Link>
             
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
  <Link href="https://bmunoz.youcanbook.me/">
    <Button className="mr-2 bg-fourthdotu hover:bg-secondarydotu">
      Agenda tu demo
    </Button>
  </Link>
</div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Link href="">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Abrir Menu</span>
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
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden max-h-4 mt-20 fixed inset-0 bg-white
         shadow-md z-50" >
          <div className="pt-2 pb-3 space-y-1 bg-white">
            <Link href="https://www.linkedin.com/company/dotu-io" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Quiénes somos
            </Link>
            <Link href="/productos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Productos
            </Link>
            <Link href="/clientes" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Clientes
            </Link>
            <Link href="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
              Precio
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t bg-slate-50 border-gray-200">
            
            <div className="mt-3 flex items-center px-4">
              <Button  className="w-full  bg-fourthdotu">
                Agendar una demo
              </Button>
            </div>
           
          </div>
        </div>
      )}
    </nav>
  )
}