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
      { name: "Water Softening", image: '/INNOVATORS_WATER SOFTENING.png', href: "/technologies/water-softening" },
      { name: "Desalination", image: img3, href: "/technologies/Desalination" },
      { name: "Reverse Osmosis", image: img4, href: "/technologies/reverse-osmosis" },
      { name: "Deionization", image: 'INNOVATORS_DEIONIZATION.png', href: "/technologies/deionization" },
      { name: "Water Ionization", image: img6, href: "/technologies/water-ionization" },
      { name: "Sterilization Water Treatment Systems", image: "/INNOVATORS (26).png", href: "/technologies/sterilization-water-treatment-systems" },
      { name: "Ultravoilet Disinfection", image: "/INNOVATORS (13).png", href: "/technologies/ultravoilet-disinfection" },
      { name: "Ion Exchange", image: "/INNOVATORS (24).png", href: "/technologies/ion-exchange" },
      { name: "Activated Carbon Filtration", image: "/INNOVATORS (15).png", href: "/technologies/activated-carbon-filtration" },
      { name: "Sedimentation", image: "/INNOVATORS_SEDIMENTATION.png", href: "/technologies/sedimentation" },
      { name: "Copper Silver Ionization", image: "/INNOVATORS (17).png", href: "/technologies/copper-silver-ionization" },
      { name: "Membrane Cleaning Systems", image: "/INNOVATORS (22).png", href: "/technologies/membrane-cleaning-systems" },
      { name: "Media Filters", image: "/INNOVATORS (19).png", href: "/technologies/media-filters" },
      { name: "Water Chillers", image: "/INNOVATORS (20).png", href: "/technologies/water-chillers" },
      { name: "Self Cleaning Filtration", image: "/INNOVATORS (21).png", href: "/technologies/self-cleaning-filtration" },
      { name: "Cartridge Filter Housings", image: "/INNOVATORS_CARTIRIDGE FILTER HOUSING.png", href: "/technologies/cartridge-filter-housings" },
  ];
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-[1140px] mx-auto py-16">
      {technologies.map((tech, index) => (
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to={tech.href || "#"}
          key={index}
          className="shadow-[0_0_15px_0_rgba(0,0,0,0.14)] w-[90%] bg-white md:w-full mx-auto overflow-hidden group rounded-2xl"
        >
          <CardContent className="text-center w-full h-full flex flex-col itmes-center justify-between">
            <img
              src={tech.image || "/placeholder.svg"}
              alt={tech.name}
              className="w-full object-cover scale-[1] h-72"
            />
            <h3 className="text-base font-bold text-[#01008c] py-6 transition-colors duration-300 group-hover:bg-[#01008c] group-hover:text-white rounded-b-2xl">
              <Link to={tech.href}>{tech.name}</Link>
            </h3>
          </CardContent>
        </Link>
      ))}
    </div>
  );
};

export default TechCards;
