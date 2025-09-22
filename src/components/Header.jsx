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
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // 👈 gets current route pathname

  const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Technologies", href: "/technologies", icon: <ChevronDown size={16} /> },
  { name: "Industries", href: "/industries", icon: <ChevronDown size={16} /> },
  { name: "Blogs", href: "/blogs" },
  { name: "Parts", href: "/parts" },
  { name: "Contact Us", href: "/contact" },
];

  return (
    <>
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
          <nav className="hidden items-center lg:flex lg:gap-12">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
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
                    {link.icon && <span>{link.icon}</span>}
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
