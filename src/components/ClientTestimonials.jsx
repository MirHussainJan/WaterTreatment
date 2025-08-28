import { Card, CardContent } from "./ui/Card"
import Carousel from "./ui/Carousel2"

export default function ClientTestimonials() {
  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      company: "Dubai Hotels",
      rating: 5,
      text: "Excellent service and quality products. Highly recommended for water treatment solutions.",
    },
    {
      name: "Sarah Johnson",
      company: "Healthcare Group",
      rating: 5,
      text: "Professional team with outstanding technical expertise. Great customer support.",
    },
    {
      name: "Mohammed Hassan",
      company: "Industrial Corp",
      rating: 5,
      text: "Reliable solutions that have improved our water quality significantly.",
    },
  ]

  return (
    <>
      {/* Client Logos */}
      <section className="w-ful  bg-[url(https://waterengineering.ae/wp-content/uploads/2024/09/bg_3.jpg)] bg-cover bg-center">
        <main className="w-full h-full bg-blue-900/82 py-15">
          <div className=" mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Our Clients</h2>
              <Carousel/>
            </div>
          </div>
        </main>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full mr-1" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}