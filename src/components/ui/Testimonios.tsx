import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Agustín Ugarte",
    role: "Product Manager",
    company: "Tech Innovators",
    content: "This software has revolutionized our workflow. It's intuitive, powerful, and has saved us countless hours. The support team is always responsive and helpful. I can't imagine running our projects without it now.",
    imageUrl: "/placeholder.svg?height=100&width=100"
  },
  {
    id: 2,
    name: "Vladimir Bohorquez",
    role: "Senior Developer",
    company: "CodeCrafters Inc.",
    content: "I've used many similar tools, but this one stands out. The features are well-thought-out and the performance is outstanding. It has significantly improved our team's productivity and code quality. Highly recommended for any development team.",
    imageUrl: "/placeholder.svg?height=100&width=100"
  }
]

export default function Testimonios() {
  return (
    <section className="w-full sm:h-[700px] py-12 bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-primarydotu font-bold text-center mb-8">Que Dicen Nuestros Clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col h-full">
              <CardContent className="flex flex-col justify-between h-full p-6">
                <div>
                  <p className="text-lg mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                </div>
                <div className="flex items-center mt-4">
                  <img 
                    src={testimonial.imageUrl} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
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
