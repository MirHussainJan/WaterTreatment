import { RiTwitterXFill } from "react-icons/ri";
import { FaArrowRight, FaLocationDot, FaPhone} from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { LuMail} from "react-icons/lu";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


export default function Footer() 
{
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-4 flex flex-col flex-wrap" style={{ backgroundImage: "url('https://waterengineering.ae/wp-content/uploads/2024/09/Footer-image-scaled.jpg')" }}>
      <section className="container px-4 mx-auto md:px-10 flex flex-col md:flex-row justify-between md:items-center mb-10 border-b border-gray-700 pb-10 max-w-[1140px]">
          <div className="w-40 h-15 mb-4 md:w-45 md:h-20 bg-white py-1 rounded-lg flex items-center px-2">
               <img className=" w-full " src="/Logo.png" alt="" />
          </div>
          <div className="flex gap-3 "> 
            <a href="" className=" font-black bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white text-blue-900 transition-all duration-300 "><FaFacebookF size={25}/></a>
            <a href="" className="bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white text-blue-900 transition-all duration-300"><RiTwitterXFill size={25}/></a>
            <a href="" className="bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white text-blue-900 transition-all duration-300"><IoLogoWhatsapp size={25}/></a>
            <a href="" className="bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white text-blue-900 transition-all duration-300"><FaYoutube size={25}/></a>
            <a href="" className="bg-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-900 hover:text-white text-blue-900 transition-all duration-300"><FaInstagram size={25}/></a>
          </div>
          <div className="flex flex-col items-start justify-start">
            <p className="text-lg  text-green-500">GIVE US A CALL</p>
            <p className="text-3xl font-black ">+92300000</p>
          </div>

      </section>

      <div className="container md:px-0 px-4 mx-auto max-w-[1140px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-xl font-bold">About</span>
            </div>
            
            <p className="text-white">Serving industries worldwide with premium water treatment solutions for over decades. As a trusted leader with 5,000+ satisfied customers, Innovators delivers pure excellence in every drop.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-white text-lg">
              <div className = "flex items-center gap-4">
                <div><FaLocationDot /></div>
                <div><a href="">Office and Showroom Warehouse # S11 Near Arabian Adventures DIP 2 DUBAI UAE</a>
                </div></div>
              <div className = "flex items-center gap-4">
                  <div><LuMail /></div>
                  <div>marketing@ultratecuae.com</div>
              </div>
              <div className = "flex items-center gap-4">
                  <div><FaPhone /></div>
                  <div>+971 4 269 524</div>
              </div>
            </ul>
          </div>

          <div className="ps-12">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white flex flex-col">
              <a href="#" className=" w-25 flex gap-2 items-center hover:translate-x-2 transition-transform hover:text-gray-400 duration-200"><FaArrowRight />About Us</a>
              <a href="/contact" className=" w-25 flex gap-2 items-center hover:translate-x-2 transition-transform hover:text-gray-400 duration-200"><FaArrowRight />Contact</a>
              <a href="/blogs" className=" w-25 flex gap-2 items-center hover:translate-x-2 transition-transform hover:text-gray-400 duration-200"><FaArrowRight />Blogs</a>
              <a href="/technologies" className=" w-25 flex gap-2 items-center hover:translate-x-2 transition-transform hover:text-gray-400 duration-200"><FaArrowRight />Produts</a>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Explore</h3>
            <div className="flex flex-col text-white space-y-2">
              <a href="/industries">Industries</a>
              <a href="/parts">Parts</a>
              <a href="/technologies">Technologies</a>
              <a href="/contact">Locations</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 text-center text-white text-xl">
          <p>&copy; 2024 Innovators. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
