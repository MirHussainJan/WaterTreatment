import Carousel from "./ui/Carousel2"

export default function Clients() {
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
      <section className="w-ful  bg-[url(bg_3.jpg)] bg-cover bg-center">
        <main className="w-full h-full bg-blue-900/82 py-15">
          <div className=" mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 titles">Our Clients</h2>
              <Carousel />
            </div>
          </div>
        </main>
      </section>

     
    </>
  )
}