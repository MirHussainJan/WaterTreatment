import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { CgMenuRight } from "react-icons/cg";
import { IoIosMail } from "react-icons/io";
import Menu from "./ui/Menu";

export default function Header() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Technologies", href: "#" },
    { name: "Industries", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Parts", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header className="bg-white fixed top-0 z-100 w-full shadow-md">
      <div className="bg-[#01008c] text-white text-sm py-1 hidden md:block px-4 lg:px-0">
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

      <div className="flex items-end md:items-center max-w-[1140px] justify-between mx-auto py-4 px-4 lg:px-0 ">
        <div className="flex items-end lg:items-center justify-between py-4">
          <img src="/Logo.png" alt="Water Engineering Logo" className="w-38" />
        </div>
        <nav className="hidden items-center lg:flex lg:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActive(link.name);
                setMenuOpen(false);
              }}
              className={`transition-colors font-semibold p-2 md:text-sm ${
                active === link.name
                  ? "text-[#01008c]"
                  : "text-gray-600 hover:text-[#01008c]"
              }`}
              style={active === link.name ? { color: "#01008c" } : {}}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <button
          className="bg-zinc-300 py-1 px-3 rounded font-bold cursor-pointer flex lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <CgMenuRight size={26} />
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
  );
}