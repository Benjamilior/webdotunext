import { ArrowRight, ChartBar, Zap, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className=" mt-[600px] relative overflow-hidden text-white py-16 px-4 sm:mt-[200px] mb-[50px] sm:px-6 position-absolute lg:px-8">
      <div className="relative z-10 max-w-4xl mx-auto ">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-center mb-8">
          <span className="block mb-2">Inteligencia de precios</span>
          <span className="block ">para aumentar tus ventas</span>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-center leading-8">
          Automatizamos el proceso de analizar a tu competencia y nos aseguramos de que tomes decisiones estratégicas que impulsen el crecimiento de tu negocio.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3 text-center">
          <div className="flex flex-col items-center">
            <ChartBar className="h-12 w-12 text-purple-300 mb-4" />
            <h3 className="text-lg font-semibold">Análisis Competitivo</h3>
          </div>
          <div className="flex flex-col items-center">
            <Zap className="h-12 w-12 text-purple-300 mb-4" />
            <h3 className="text-lg font-semibold">Decisiones Rápidas</h3>
          </div>
          <div className="flex flex-col items-center">
            <Target className="h-12 w-12 text-purple-300 mb-4" />
            <h3 className="text-lg font-semibold">Crecimiento Impulsado</h3>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-100 transition-colors">
            Agenda tu demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          className="absolute bottom-0 left-0 w-full text-purple-800 opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,122.7C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}