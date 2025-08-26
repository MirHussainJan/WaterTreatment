import { Card, CardContent } from "./ui/Card"

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
      {/* <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Clients</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[1, 2, 3, 4, 5].map((client, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center">
                <img
                  src={`/generic-company-logo.png?height=80&width=120&query=company logo ${client}`}
                  alt={`Client ${client}`}
                  className="h-12 mx-auto mb-2"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-16 flex flex-col md:flex-row items-center justify-center md:max-w-[1140px] md:mx-auto gap-10 ">
        <div className="w-[90%] md:w-[50%]">
            <p className="md:text-2xl font-bold text-[#01008c] mb-6 text-xl">Subscribe to newsletter</p>
            <p className="md:w-[500px] text-sm md:text-base text-zinc-500">Subscribe Us for new upcoming promo deals and products informations</p>
        </div >
        <div className="flex gap-2 md:w-[40%] flex-col md:flex-row w-[90%]">
            <input type="email" name="" id="" className=" w-full border rounded px-6 py-4"  placeholder="Enter Your Email"/>
            <button className="px-6 py-4 bg-blue-800 text-white font-semibold">Subscribe</button>
        </div>
      </section>
    </>
  )
}
