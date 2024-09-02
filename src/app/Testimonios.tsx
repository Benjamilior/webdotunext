import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Agustín Ugarte",
    role: "Chief Operations Officer",
    company: "Petvet",
    content: "Muy buena gestión y disposición ante los cambios que se van generando debido a las industria en que nos encontramos, lo recomiendo 100%",
    imageUrl: "/ugarte.png?height=100&width=100"
  },
  {
    id: 2,
    name: "Vladimir Bohorquez",
    role: "Gerente Comercial",
    company: "Supermercado Teja Market",
    content: "Consiguieron obtener excelentes resultados en cuestión de días. Lo que más resalto es su disposición y habilidad para ajustarse según nuestras exigencias.",
    imageUrl: "/vladi.png?height=100&width=100"
  }
]

export default function Testimonios() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl text-primarydotu font-bold text-center mb-12">
          Que Dicen Nuestros Clientes
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="flex flex-col justify-between h-full p-8">
                <div className="relative">
                  <Quote className="absolute top-0 left-0 text-primary/10 w-16 h-16 -translate-x-4 -translate-y-4" />
                  <p className="text-lg mb-6 relative z-10">&ldquo;{testimonial.content}&rdquo;</p>
                </div>
                <div className="flex items-center mt-6">
                  <div className="relative w-14 h-14 mr-4">
                    <Image
                      src={testimonial.imageUrl} 
                      alt={testimonial.name} 
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}