import { Card, CardContent } from "./ui/Card"
import img1 from '../assets/Imgs/CPS.png'
import  img2  from '../assets/Imgs/WaterSoftening.png'
import img3 from '../assets/Imgs/Desalination.jpg'
import img4 from '../assets/Imgs/Reverse-osmosis.png'
import img5 from '../assets/Imgs/Deionization.png'
import img6 from '../assets/Imgs/Water-Ionization.png'
export default function AdvancedTechnologies() {
  const technologies = [
    {
      name: "Custom Purification Systems",image: img1,},
    { name: "Water Softening", image: img2},
    { name: "Desalination", image: img3},
    { name: "Reverse Osmosis", image: img4},
    { name: "Deionization", image: img5},
    { name: "Water Ionization", image: img6},
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-[1140px]">
        <div className="text-center mb-8">
          <p className="text-gray-600 font-semibold text-base  md:text-xl uppercase mb-2">SMART WATER SOLUTIONS</p>
          <h2 className="text-5xl md:text-5xl font-bold text-[#01008c] mb-3 titles leading-9.5">Advanced Treatment Technologies</h2>
          <p className="text-gray-600 max-w-3xl mx-auto px-3 md:px-0">
            Using the latest <span className="text-pink-700 font-semibold">technology</span> and our deep experience, we ensure pure, clean water every time. From simple filtration to complete treatment systems, we combine modern solutions with proven expertise to solve any water challenge you face.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12 ">
          {technologies.map((tech, index) => (
            <Card key={index} className="shadow-[0_0_15px_0_rgba(0,0,0,0.14)] w-[90%] bg-white md:w-full mx-auto overflow-hidden group rounded-2xl ">
              <CardContent className="text-center w-full">
                <img
                  src={tech.image || "/placeholder.svg"}
                  alt={tech.name}
                  className="w-full object-cover rounded-lg scale-[1]"
                />
                <h3 className="text-base font-bold text-[#01008c] py-6 transition-colors duration-300 group-hover:bg-[#01008c] group-hover:text-white rounded-b-2xl">{tech.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center ">
          <button className="bg-[linear-gradient(180deg,#01008c_0%,#063977_100%)] hover:-translate-y-2.5 transition duration-400 cursor-pointer py-6 px-12 font-semibold rounded-sm text-sm text-white">View All Technologies</button>
        </div>
      </div>
    </section>
  )
}