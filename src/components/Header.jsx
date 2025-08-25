import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

export default function Header() {
  const [active, setActive] = useState("Home");
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
    <header className="bg-white fixed top-0 z-1 w-full">
      <div className="bg-[#01008c] text-white text-sm py-2">
        <div className="container mx-auto px-48 flex justify-between items-center  font-sans">
          <div className="flex text-lg gap-6 items-center">
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

      <div className="container mx-auto px-48 py-9">
        <div className="flex items-center justify-between">
          <img src="/Logo.png" alt="Water Engineering Logo" className="w-36" />

          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                className={`transition-colors font-semibold text-sm ${
                  active === link.name
                    ? "text-[#01008c]" // active link in exact blue
                    : "text-gray-600 hover:text-[#01008c]" // others in gray, hover in blue
                }`}
                style={active === link.name ? { color: "#01008c" } : {}}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
