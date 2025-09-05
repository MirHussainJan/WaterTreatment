import { ArrowUpRight } from "lucide-react"

export default function BlogSection() {
  const blogs = [
    {
      title: "Top 10 Benefits of Using Water Softeners for Your Home",
      desc: "Learn how water softeners transform your home by eliminating hard ....",
      img: "https://iili.io/KCsCgEb.png",
    },
    {
      title: "Issues with Water Filtration Systems and How to Fix Them",
      desc: "Find out the common problems with water filtration systems, like ....",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/water_system.png",
    },
    {
      title: "Whole Home Water Filtration System: Pure Water Everywhere",
      desc: "Upgrade to a whole home water filtration system for filtered ....",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-13-at-1.02.12-PM.jpeg ",
    },
  ]

  return (
    <section className="py-16 bg-[#ECF2F6] flex-wrap">
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
            <div
              key={index}
              className="relative mx-auto w-[80%]"
            >
              <div className={`w-full h-[220px] bg-center bg-cover rounded-2xl relative`} style={{ backgroundImage: `url(${blog.img})` }}>
                {/* Blog Image */}
                {/* <img
                src={blog.img}
                alt={blog.title}
                className=""
              /> */}

                <div className="absolute w-20 h-20 -bottom-6 -right-2"><img src="https://waterengineering.ae/wp-content/uploads/2024/09/Group-6.svg" alt="" /></div>

              </div>

              {/* Blog Content */}
              <div className="pt-6">
                <h3 className="text-lg font-semibold cursor-pointer text-gray-500 mb-2 hover:text-gray-800">
                  {blog.title}
                </h3>
                <hr className="border-gray-200" />
                <p className="text-gray-500 text-sm pt-4">{blog.desc}</p>
              </div>

              {/* Arrow Button */}
              {/* <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#F3F7FA] flex items-center justify-center hover:bg-gray-200 transition">
                <ArrowUpRight className="w-5 h-5 text-gray-700" />
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
