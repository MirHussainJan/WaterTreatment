import { Card, CardContent } from "./ui/Card"

export default function QualityProducts() {
  const products = ["Water Filters", "RO Systems", "UV Sterilizers", "Water Softeners"]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Quality Products For Every Need</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <img
                  src={`/abstract-geometric-shapes.png?height=150&width=200&query=${product.toLowerCase()} water treatment equipment`}
                  alt={product}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">{product}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ensuring Healthy Drinkable Water With Our Quality & Reliability
              </h3>
              <p className="text-gray-600">
                Our commitment to excellence ensures that every drop of water meets the highest standards of purity and
                safety. With advanced technology and rigorous testing, we deliver reliable water treatment solutions.
              </p>
            </div>
            <img src="/placeholder-ekmfv.png" alt="Quality control" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
