import img1 from "../assets/Imgs/CPS.png";
import img2 from "../assets/Imgs/WaterSoftening.png";
import img3 from "../assets/Imgs/Desalination.jpg";
import img4 from "../assets/Imgs/Reverse-osmosis.png";
import img5 from "../assets/Imgs/Deionization.png";
import img6 from "../assets/Imgs/Water-Ionization.png";
import { Card, CardContent } from "./ui/Card";
import { Link } from "react-router-dom";
const TechCards = () => {
  const technologies = [
    {name: "Custom Purification Systems", image: img1, href: "/technologies/water-purification"},
    { name: "Water Softening", image: img2, href: "/technologies/water-softening" },
    { name: "Desalination", image: img3, href: "/technologies/desalination" },
    { name: "Reverse Osmosis", image: img4, href: "/technologies/reverse-osmosis" },
    { name: "Deionization", image: img5, href: "/technologies/deionization" },
    { name: "Water Ionization", image: img6, href: "/technologies/water-ionization" },
    {
      name: "Sterilization Water Treatment Systems",
      image: "/INNOVATORS (26).png",
    },
    { name: "Ultravoilet Disinfection", image: "/INNOVATORS (13).png" },
    { name: "Ion Exchange", image: "/INNOVATORS (24).png" },
    { name: "Activated Carbon Filtration", image: "/INNOVATORS (15).png" },
    { name: "Sedimentation", image: "/INNOVATORS (23).png" },
    { name: "Copper Silver Ionization", image: "/INNOVATORS (17).png" },
    {
      name: "Membrane Cleaning Systems",
      image: "/INNOVATORS (22).png",
    },
    { name: "Media Filters", image: "/INNOVATORS (19).png" },
    { name: "Water Chillers", image: "/INNOVATORS (20).png" },
    { name: "Self Cleaning Filtration", image: "/INNOVATORS (21).png" },
    { name: "Cartridge Filter Housings", image: "/INNOVATORS (20).png" },
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
              className="w-full object-cover scale-[1]"
            />
            <h3 className="text-base font-bold text-[#01008c] py-6 transition-colors duration-300 group-hover:bg-[#01008c] group-hover:text-white rounded-b-2xl">
              <Link to={tech.href}>{tech.name}</Link>
            </h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TechCards;
