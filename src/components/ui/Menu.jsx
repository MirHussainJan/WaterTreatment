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
            <div className={`px-12 border-b border-dashed border-zinc-300 py-4 ${location.pathname.startsWith('/technologies') ? activeClass : ''}`}>
                <a href="/technologies">Technologies</a>
            </div>
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
