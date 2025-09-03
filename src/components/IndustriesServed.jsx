import { Card, CardContent } from "./ui/Card"
import img from "../assets/img2.png"

export default function IndustriesServed() {
  const industries = [
    { title: "Hotels & Restaurants", desc: "Pure water is the foundation of exceptional hospitality – from pristine drinking water to perfect coffee and spotless glassware. Our specialized solutions ensure consistent quality across your property, from guest rooms to kitchens, helping you maintain the luxury experience your guests expect.", img: "https://waterengineering.ae/wp-content/uploads/2024/12/Hotels-Restaurants.svg" },
    { title: "Agriculture and Gardening", desc: "From irrigation systems to crop sustainability, our specialized water solutions help your plants thrive and yields flourish. Our advanced treatment systems ensure optimal water quality for agriculture and landscaping, supporting healthy growth while maximizing your farm's potential through sustainable practices.", img: "https://waterengineering.ae/wp-content/uploads/2024/12/Agriculture-and-Gardening.svg" },
    { title: "Hospital", desc: "In healthcare, pure water isn't just a requirement—it's critical for patient safety and medical procedures. Our specialized treatment systems meet the most stringent medical standards, ensuring ultra-pure water for everything from sterilization to dialysis, so you can focus on what matters most: patient care.", img: "https://waterengineering.ae/wp-content/uploads/2024/12/Hospital.svg" },
    { title: "Pharmaceutical", desc: "We understand that pharmaceutical production demands the highest levels of water purity and system validation. Our specialized solutions ensure compliance with international pharmacopeia standards while maintaining the consistent quality your sensitive processes require.", img: "https://waterengineering.ae/wp-content/uploads/2024/12/Pharmaceutical.svg" },
    { title: "Food & Beverage", desc: "Quality water is the essential ingredient in every food and beverage operation. Our specialized systems ensure consistent water purity across your entire production line, from ingredient mixing to final processing, helping you maintain exceptional product quality and taste.", img: "https://waterengineering.ae/wp-content/uploads/2024/12/Food-Beverage.svg" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto md:px-4">
        <div className="text-center mb-12">
          <p className="text-gray-600 font-semibold tracking-wide uppercase">
            Powering Every Sector
          </p>
          <h2 className="text-xl md:text-5xl font-bold text-[#01008c] mb-2 titles">Industries We Serve</h2>
          <p className="text-gray-600  tracking-wide max-w-[90%] md:max-w-[60%] mx-auto">
            Water quality challenges vary by industry, and so do our solutions. Discover how our water treatment expertise transforms businesses across <a href="" className="font-bold text-pink-700">industries</a>. Every sector has unique water quality demands – explore below to see how we’re meeting them head-on.
          </p>
        
        </div>

        <section className="md:max-w-[1140px] bg-trnasparent p-2 mx-auto flex flex-col md:flex-row md:gap-10">
        <div className="w-full md:w-[52%]">
              <div className="w-full h-90  md:h-120 md:sticky top-30">
                <img src={img} className="w-full h-full " alt="" />
              </div>
        </div>
        <div className="md:w-[50%] ">
            <div className="flex  flex-col md:gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="">
              <CardContent className=" md:p-6 flex flex-col md:flex-row gap-7 md:gap-10">
                <div className="w-[35%] md:w-[25%] bg-transparent flex items-center justify-center mt-2">
                  
                    <img src={industry.img}/>
                </div>
                <div className="w-full md:w-[80%]">
                  <h3 className="text-xl md:text-3xl font-bold text-[#01008c] mb-2 titles ">{industry.title}</h3>
                  <p className="text-gray-600 text-justify">{industry.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
        </section>

        <div className="text-center mt-12">
          <button className="bg-[linear-gradient(180deg,#01008c_0%,#063977_100%)] hover:-translate-y-2.5 transition duration-400 cursor-pointer py-6 px-12 font-semibold rounded-sm text-sm text-white">View All Technologies</button>
        </div>
      </div>
    </section>
  )
}
