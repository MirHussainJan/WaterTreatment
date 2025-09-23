import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
export default function Menu() {
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
    const location = useLocation();
    const activeClass = "bg-[#01008c] text-white";
  return (
    <>
        <menu className=" flex flex-col overflow-auto">
            <div className={`px-12 border-b border-dashed border-zinc-300 py-4 ${location.pathname === '/' ? activeClass : ''}`}><a href="/">Home</a></div>
            <div className={`px-12 border-b border-dashed border-zinc-300 py-4 ${location.pathname.startsWith('/about') ? activeClass : ''}`}><a href="/about">About Us</a></div>
                        <div className={`px-12 border-b border-dashed border-zinc-300 py-4 flex items-center justify-between cursor-pointer ${location.pathname.startsWith('/technologies') ? activeClass : ''}`}
                                onClick={() => setActive1(!active1)}>
                                <span className="flex items-center gap-2">
                                    <a href="/technologies">Technologies</a>
                                    <FaAngleDown className={`transition-transform duration-300 ${active1 ? 'rotate-180' : ''}`} />
                                </span>
                        </div>
                        {active1 && (
                            <div className="transition-all duration-300 flex flex-col gap-2 bg-[#f8fafc] py-2 px-16 border-b border-dashed border-zinc-300">
                                <a href="/technologies/water-purification" className="py-2 text-gray-700 hover:text-[#01008c]">Custom Purification Systems</a>
                                <a href="/technologies/water-softening" className="py-2 text-gray-700 hover:text-[#01008c]">Water Softening</a>
                                <a href="/technologies/Desalination" className="py-2 text-gray-700 hover:text-[#01008c]">Desalination</a>
                                <a href="/technologies/reverse-osmosis" className="py-2 text-gray-700 hover:text-[#01008c]">Reverse Osmosis</a>
                                <a href="/technologies/deionization" className="py-2 text-gray-700 hover:text-[#01008c]">Deionization</a>
                                <a href="/technologies/water-ionization" className="py-2 text-gray-700 hover:text-[#01008c]">Water Ionization</a>
                                <a href="/technologies/sterilization-water-treatment-systems" className="py-2 text-gray-700 hover:text-[#01008c]">Sterilization Water Treatment</a>
                                <a href="/technologies/ultravoilet-disinfection" className="py-2 text-gray-700 hover:text-[#01008c]">Ultravoilet Disinfection</a>
                                <a href="/technologies/ion-exchange" className="py-2 text-gray-700 hover:text-[#01008c]">Ion Exchange</a>
                                <a href="/technologies/activated-carbon-filtration" className="py-2 text-gray-700 hover:text-[#01008c]">Activated Carbon Filtration</a>
                                <a href="/technologies/sedimentation" className="py-2 text-gray-700 hover:text-[#01008c]">Sedimentation</a>
                                <a href="/technologies/copper-silver-ionization" className="py-2 text-gray-700 hover:text-[#01008c]">Copper Silver Ionization</a>
                                <a href="/technologies/membrane-cleaning-systems" className="py-2 text-gray-700 hover:text-[#01008c]">Membrane Cleaning Systems</a>
                                <a href="/technologies/media-filters" className="py-2 text-gray-700 hover:text-[#01008c]">Media Filters</a>
                                <a href="/technologies/water-chillers" className="py-2 text-gray-700 hover:text-[#01008c]">Water Chillers</a>
                                <a href="/technologies/self-cleaning-filtration" className="py-2 text-gray-700 hover:text-[#01008c]">Self Cleaning Filtration</a>
                                <a href="/technologies/cartridge-filter-housings" className="py-2 text-gray-700 hover:text-[#01008c]">Cartridge Filter Housings</a>
                            </div>
                        )}
            <div className={`px-12 border-b border-dashed border-zinc-300 py-4 ${location.pathname.startsWith('/industries') ? activeClass : ''}`}>
                <a href="/industries">Industries</a>
            </div>
            <div className={`px-12 border-b border-dashed border-zinc-300 py-4 ${location.pathname.startsWith('/blogs') ? activeClass : ''}`}><a href="/blogs">Blogs</a></div>
            <div className={`px-12 border-b border-dashed border-zinc-300 py-4 ${location.pathname.startsWith('/parts') ? activeClass : ''}`}><a href="/parts">Parts</a></div>
            <div className={`px-12 py-4 ${location.pathname.startsWith('/contact') ? activeClass : ''}`}><a href="/contact">Contact Us</a></div>
        </menu>
    </>
  )
}
