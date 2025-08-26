// import { Card, CardContent } from "./ui/Card"
// import React from "react";
import Carousel from "./ui/Carousel";

export default function QualityProducts() {
  const products = ["Water Filters", "RO Systems", "UV Sterilizers", "Water Softeners"]
  const images =
  {
    "image1": "https://waterengineering.ae/wp-content/uploads/2025/01/Turbochargers-01-2-1024x703.jpg",
    "image2": "https://waterengineering.ae/wp-content/uploads/2025/01/Turbochargers-01-2-1024x703.jpg",
    "image3": "https://waterengineering.ae/wp-content/uploads/2025/01/Turbochargers-01-2-1024x703.jpg",
    "image4": "https://waterengineering.ae/wp-content/uploads/2025/01/Turbochargers-01-2-1024x703.jpg"
  }
  return (
    <section className=" ">
      <div className="bg-gray-50 mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Quality Products For Every Need</h2>
        </div>
        {/* 
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
          </div> */}

        <div className="p-6">
          <Carousel />   {/* use carousel here */}
        </div>
      </div>
      <section className="w-full  relative md:px-50 mb-20 -mt-20">
        <div className="mx-auto mt-10 bg-white shadow-[_0px_4px_12px_rgba(0,0,0,0.15)] rounded-lg md:p-6 p-3 max-w-[1140px]">
          <div className="flex md:gap-5 flex-col md:flex-row md:items-center md:justify-center">
            <div className="md:w-[1000px] md:h-[300px]">
              <img src="https://waterengineering.ae/wp-content/uploads/2024/12/Promoting-healthy-community-1-1024x585.jpg" alt="Quality control" className="rounded-lg shadow-lg w-full h-full" />
            </div>
            <div className="md:max-w-[60%] py-7">
              <h3 className="md:text-2xl font-bold text-[#01008c] mb-6 w-full text-sm">
                Promoting healthy community with our high quality & cost effective water engineering !
              </h3>
              <p className="text-gray-600 text-sm w-full">
                Our Speciality is to design cost effective Water Filtration System that will meet Client’s requirement. Our Company aim is to build a sustainable and effective Water Purification System based on the end-user needs and within their budget. The sources of various parts came from different countries ( USA, Japan, Germany, UK, Turkey, Taiwan ) with a High Standard Quality and Certifications are assemble locally and by our Seasoned Professional Technician and Engineers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>




  )
}
