import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
export default function Menu() {
    const [active1, setActive1] = useState(false);
    const [active2, setActive2] = useState(false);
  return (
    <>
        <menu className=" flex flex-col gap-2 overflow-auto">
            <div className="px-12 border-b border-dashed border-zinc-300 py-2"><a href="/">Home</a></div>
            {/* <div className="px-12 border-b border-dashed border-zinc-300 py-2"><a href="/about">About Us</a></div> */}
            <div className="px-12 border-b border-dashed border-zinc-300 py-2">
                <button type="button" className="flex justify-between items-center gap-2 cursor-pointer" onClick={() => setActive1(!active1)}>
                    <p href="">Technologies</p><FaAngleDown />
                </button>
                
            </div>
                <div className={`flex flex-col gap-2 text-sm transition-all duration-300 ${active1 ? 'max-h-160 overflow-y-auto' : 'max-h-0 overflow-hidden'}`}
                >
                    <a href="/technologies" className="border-b border-dashed border-zinc-300 px-14 py-2">Water Ionization</a>
                    <a href="/technologies" className="px-15 border-b border-dashed border-zinc-300 py-2">Sedimentation</a>
                    <a href="/technologies" className="px-15 border-b border-dashed border-zinc-300 py-2">Ion Exchange</a>
                    <a href="/technologies" className="px-15 border-b border-dashed border-zinc-300 py-2">Deionization</a>
                    <a href="/technologies" className="px-15 border-b border-dashed border-zinc-300 py-2">Ultraviolet Disinfection</a>
                    <a href="/technologies" className="px-15 border-b border-dashed border-zinc-300 py-2">Copper Silver Ionization</a>
                    <a href="/technologies" className="px-15 border-b border-dashed border-zinc-300 py-2">Activated Carbon Filtration</a>
                    <a href="/technologies" className="px-15 border-b border-dashed border-zinc-300 py-2">Water Chillers</a>
                    <a href="/technologies" className="px-15 border-b border-dashed border-zinc-300 py-2">Media Filters</a>


                </div>
            <div className="px-12 border-b border-dashed border-zinc-300 py-2">
                <button className="flex justify-between items-center gap-2 cursor-pointer" onClick={() => setActive2(!active2)} type="button">
                    <p href="">Industries</p><FaAngleDown />
                </button>
            </div>
            <div className={`flex flex-col gap-2 text-sm transition-all duration-300 ${active2 ? 'max-h-160 overflow-y-auto' : 'max-h-0 overflow-hidden'}`}
            >
                <a href="/industries" className="border-b border-dashed border-zinc-300 px-14 py-2">Water Ionization</a>
                <a href="/industries" className="px-15 border-b border-dashed border-zinc-300 py-2">Sedimentation</a>
                <a href="/industries" className="px-15 border-b border-dashed border-zinc-300 py-2">Ion Exchange</a>
                    <a href="/industries" className="px-15 border-b border-dashed border-zinc-300 py-2">Deionization</a>
                    <a href="/industries" className="px-15 border-b border-dashed border-zinc-300 py-2">Ultraviolet Disinfection</a>
                    <a href="/industries" className="px-15 border-b border-dashed border-zinc-300 py-2">Copper Silver Ionization</a>
                    <a href="/industries" className="px-15 border-b border-dashed border-zinc-300 py-2">Activated Carbon Filtration</a>
                    <a href="/industries" className="px-15 border-b border-dashed border-zinc-300 py-2">Water Chillers</a>
                    <a href="/industries" className="px-15 border-b border-dashed border-zinc-300 py-2">Media Filters</a>


                </div>
            <div className="px-12 border-b border-dashed border-zinc-300 py-2"><a href="">Blogs</a></div>
            <div className="px-12 border-b border-dashed border-zinc-300 py-2"><a href="">Parts</a></div>
            <div className="px-12 py-2"><a href="/contact">Contact Us</a></div>
        </menu>
    </>
  )
}
