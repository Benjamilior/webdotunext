'use client'

import React from "react"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

export default function HoverBorderGradientDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4 md:space-y-0 md:flex-row md:space-x-4">
      {[
        { title: "100% Aumento en Ventas", value: "1,000,000,000" },
        { title: "50% Reducción de Costos", value: "500,000,000" },
        { title: "200% ROI", value: "2,000,000,000" },
        { title: "200% ROI", value: "2,000,000,000" }
      ].map((item, index) => (
        <HoverBorderGradient
          key={index}
          containerClassName="rounded-full w-full md:w-auto"
          as="button"
          className="w-full md:w-auto bg-white dark:bg-gray-800 text-black dark:text-white flex items-center justify-center p-4 space-x-3 transition-colors duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          <AceternityLogo />
          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">{item.title}</span>
            <span className="text-lg font-bold">{item.value}</span>
          </div>
        </HoverBorderGradient>
      ))}
    </div>
  )
}

function AceternityLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
      aria-hidden="true"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  )
}