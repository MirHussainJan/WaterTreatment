import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { IoIosMail } from "react-icons/io";
import Menu from "./ui/Menu";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Technologies", href: "/technologies", icon: <ChevronDown size={16} />, dropdown: true },
    { name: "Industries", href: "/industries" },
    { name: "Blogs", href: "/blogs" },
    { name: "Parts", href: "/parts" },
    { name: "Contact Us", href: "/contact" },
  ];
  const technologies = [
    { href: "/technologies/water-purification", label: "Custom Purification Systems" },
    { href: "/technologies/water-softening", label: "Water Softening" },
    { href: "/technologies/Desalination", label: "Desalination" },
    { href: "/technologies/reverse-osmosis", label: "Reverse Osmosis" },
    { href: "/technologies/deionization", label: "Deionization" },
    { href: "/technologies/water-ionization", label: "Water Ionization" },
    { href: "/technologies/sterilization-water-treatment-systems", label: "Sterilization Water Treatment" },
    { href: "/technologies/ultravoilet-disinfection", label: "Ultravoilet Disinfection" },
    { href: "/technologies/ion-exchange", label: "Ion Exchange" },
    { href: "/technologies/activated-carbon-filtration", label: "Activated Carbon Filtration" },
    { href: "/technologies/sedimentation", label: "Sedimentation" },
    { href: "/technologies/copper-silver-ionization", label: "Copper Silver Ionization" },
    { href: "/technologies/membrane-cleaning-systems", label: "Membrane Cleaning Systems" },
    { href: "/technologies/media-filters", label: "Media Filters" },
    { href: "/technologies/water-chillers", label: "Water Chillers" },
    { href: "/technologies/self-cleaning-filtration", label: "Self Cleaning Filtration" },
    { href: "/technologies/cartridge-filter-housings", label: "Cartridge Filter Housings" },
  ];
  const [technologiesOpen, setTechnologiesOpen] = useState(false);
  return (
    <>
      {/* Custom scrollbar styles for submenu */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1020a0;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8fafc;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #1020a0 #f8fafc;
        }
      `}</style>
      <div className="bg-[#01008c] text-white text-sm py-1 hidden md:block top-0 px-4 lg:px-0">
        <div className="flex items-center justify-between max-w-[1140px] mx-auto font-sans">
          <div className="flex text-lg gap-5 items-center">
            <FaFacebook className="m-0 text-lg" />
            <FaXTwitter className="m-0 text-lg" />
            <FaWhatsapp className="m-0 text-lg" />
            <FaYoutube className="m-0 text-lg" />
            <FaInstagram className="m-0 text-lg" />
          </div>
          <div className="flex items-center space-x-12">
            <span className="flex text-base items-center gap-8">
              <FaPhone className="m-0" />
              +971 4 268 324
            </span>
            <span className="flex text-base items-center gap-8">
              <IoIosMail className="m-0 text-xl" />
              marketing@watereng.com
            </span>
          </div>
        </div>
      </div>
      <header className="bg-white sticky top-0 z-100 w-full shadow-md">
        <div className=" max-w-[1140px] flex justify-between items-center mx-auto pt-4 px-4 lg:px-0">
          <div className="flex items-center justify-between py-4">
            <img src="/Logo.png" alt="Water Engineering Logo" className="w-38" />
          </div>
          <nav className="hidden items-center lg:flex lg:gap-12 relative">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              if (link.dropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setTechnologiesOpen(true)}
                    onMouseLeave={() => setTechnologiesOpen(false)}
                  >
                    <Link
                      to={link.href}
                      className={`transition-colors font-semibold p-2 md:text-sm flex items-center gap-1 ${
                        isActive
                          ? "text-[#01008c]"
                          : "text-gray-600 hover:text-[#01008c]"
                      }`}
                    >
                      {link.name}
                      {link.icon && <span>{link.icon}</span>}
                    </Link>
                    <div
                      className={`custom-scrollbar absolute -left-0 top-10 min-w-[260px] max-h-[500px] overflow-hidden bg-white shadow-xl rounded-xl border border-zinc-200 z-50 transition-all duration-300 flex flex-col ${technologiesOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
                    >
                      <div className="overflow-y-auto" style={{maxHeight: '440px'}}>
                        {technologies.map((tech, idx) => {
                          const isActiveTech = location.pathname === tech.href;
                          const isLast = idx === technologies.length - 1;
                          return (
                            <Link
                              key={tech.href}
                              to={tech.href}
                              className={`block text-sm px-2 py-2 transition-colors ${
                                isActiveTech
                                  ? "bg-[#01008c] text-white"
                                  : "text-gray-700 hover:bg-[#ECF2F6] hover:text-[#01008c]"
                              } ${!isLast ? "border-b border-dotted" : ""}`}
                              onClick={() => setTechnologiesOpen(false)}
                            >
                              {tech.label}
                            </Link>
                          );
                        })}
                      </div>
                      <div className="sticky bottom-0 left-0 w-full flex justify-center items-center">
                        <Link
                          to="/technologies"
                          className="w-full block text-center bg-[#01008c] text-white text-sm py-4 transition hover:bg-[#1020a0] shadow"
                          onClick={() => setTechnologiesOpen(false)}
                        >
                          View All Technologies
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`transition-colors font-semibold p-2 md:text-sm ${
                    isActive
                      ? "text-[#01008c]"
                      : "text-gray-600 hover:text-[#01008c]"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {link.name}
                    {/* Only show icon for Technologies */}
                    {link.name === "Technologies" && link.icon && <span>{link.icon}</span>}
                  </div>
                </Link>
              );
            })}
          </nav>
          <button
            className="bg-zinc-300 py-1 px-3 rounded font-bold cursor-pointer flex lg:hidden transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <CgClose size={26} /> : <CgMenuRight size={26} />}
          </button>
        </div>
        <div
          className={`lg:hidden transition-all duration-300 ${
            menuOpen ? "max-h-screen overflow-y-auto" : "max-h-0 overflow-hidden"
          }`}
        >
          <Menu />
        </div>
      </header>
    </>
  );
}
