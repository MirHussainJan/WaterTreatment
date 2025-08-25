import { Card, CardContent } from "./ui/Card"

export default function IndustriesServed() {
  const industries = [
    { title: "Hotels & Restaurants", desc: "Premium water solutions for hospitality" },
    { title: "Healthcare and Clinics", desc: "Medical-grade water treatment systems" },
    { title: "Industrial", desc: "Heavy-duty industrial water processing" },
    { title: "Pharmaceutical", desc: "Ultra-pure water for pharmaceutical use" },
    { title: "Food & Beverage", desc: "Food-safe water treatment solutions" },
    { title: "Residential", desc: "Home water treatment and filtration" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Industries We Serve</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-blue-600 rounded" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{industry.title}</h3>
                <p className="text-gray-600 text-sm">{industry.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700">View All Industries</button>
        </div>
      </div>
    </section>
  )
}
