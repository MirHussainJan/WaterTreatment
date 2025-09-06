import img1 from "../assets/Imgs/CPS.png";
import img2 from "../assets/Imgs/WaterSoftening.png";
import img3 from "../assets/Imgs/Desalination.jpg";
import img4 from "../assets/Imgs/Reverse-osmosis.png";
import img5 from "../assets/Imgs/Deionization.png";
import img6 from "../assets/Imgs/Water-Ionization.png";
import { Card, CardContent } from "./ui/Card";
const TechCards = () => {
  const technologies = [
    {
      name: "Custom Purification Systems",
      image: img1,
    },
    { name: "Water Softening", image: img2 },
    { name: "Desalination", image: img3 },
    { name: "Reverse Osmosis", image: img4 },
    { name: "Deionization", image: img5 },
    { name: "Water Ionization", image: img6 },
    {
      name: "Sterilization Water Treatment Systems",
      image: img1,
    },
    { name: "Ultravoilet Disinfection", image: img2 },
    { name: "Ion Exchange", image: img3 },
    { name: "Activated Carbon Filtration", image: img4 },
    { name: "Sedimentation", image: img5 },
    { name: "Copper Silver Ionization", image: img6 },
    {
      name: "Membrane Cleaning Systems",
      image: img1,
    },
    { name: "Media Filters", image: img2 },
    { name: "Water Chillers", image: img3 },
    { name: "Self Cleaning Filtration", image: img4 },
    { name: "Cartridge Filter Housings", image: img5 },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-[1140px] mx-auto py-16">
      {technologies.map((tech, index) => (
        <Card
          key={index}
          className="shadow-[0_0_15px_0_rgba(0,0,0,0.14)] w-[90%] bg-white md:w-full mx-auto overflow-hidden group rounded-2xl "
        >
          <CardContent className="text-center w-full">
            <img
              src={tech.image || "/placeholder.svg"}
              alt={tech.name}
              className="w-full object-cover rounded-lg scale-[1]"
            />
            <h3 className="text-base font-bold text-[#01008c] py-6 transition-colors duration-300 group-hover:bg-[#01008c] group-hover:text-white rounded-b-2xl">
              {tech.name}
            </h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TechCards;
