import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom";

export default function BlogSection() {
  const blogs = [
    {
      title: "Top 10 Benefits of Using Water Softeners for Your Home",
      desc: "Learn how water softeners transform your home by eliminating hard minerals, improving appliance longevity, and enhancing water quality for daily use.",
      img: "/img1.png",
      link: "/blog1"
    },
    {
      title: "Issues with Water Filtration Systems and How to Fix Them",
      desc: "Find out the common problems with water filtration systems, like clogging, leaks, and reduced flow, and learn practical solutions to keep your water clean and safe.",
      img: "/img2.png",
      link: "/blog2"
    },
    {
      title: "Whole Home Water Filtration System: Pure Water Everywhere",
      desc: "Upgrade to a whole home water filtration system for filtered water at every tap, improving health, taste, and appliance longevity throughout your house.",
      img: "/img3.png",
      link: "/blog3"
    },
  ]

  return (
    <section className="py-16 bg-[#ECF2F6] flex-wrap md:px-4">
      <div className="max-w-[1140px] mx-auto ">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-gray-600 font-semibold tracking-wide uppercase">
            Expert Insights & Updates
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#01008c] mb-6 titles">
            Innovators Blogs
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="flex justify-content-center gap-12 flex-col lg:flex-row">
          {blogs.map((blog, index) => (
            <Link to={blog.link} key={index} className="relative mx-auto w-[80%] group">
              <div className={`w-full h-[220px] bg-center bg-cover rounded-2xl relative transition-all duration-300 group-hover:scale-105`} style={{ backgroundImage: `url(${blog.img})` }}>
                <div className="absolute w-20 h-20 -bottom-6 -right-2"><img src="https://waterengineering.ae/wp-content/uploads/2024/09/Group-6.svg" alt="" /></div>
              </div>
              <div className="pt-6">
                <h3 className="text-lg font-semibold cursor-pointer text-gray-500 mb-2 group-hover:text-gray-800">
                  {blog.title}
                </h3>
                <hr className="border-gray-200" />
                <p className="text-gray-500 text-sm pt-4">{blog.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
