import { FaPlay } from "react-icons/fa";
export default function VideoSection() {
  return (
    <section className="py-16 bg-[url(https://waterengineering.ae/wp-content/uploads/2024/09/vw_shape_bg_1.png)] bg-cover  mx-auto">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="text-center mb-12">
          <p className="text-gray-600 font-semibold tracking-wide uppercase">Visual Journey</p>
          <h2 className="text-2xl md:text-4xl font-bold text-[#01008c] mb-6 w-[40%] mx-auto">See Our Solutions In Action</h2>
        </div>

        <div className="flex items-center max-w-3xl bg-[url(https://waterengineering.ae/wp-content/uploads/2024/09/Water-Desalination-Plants-UAE.jpg)] rounded-4xl mx-auto bg-cover">
          <div className="w-full relative bg-gradient-to-tr from-[#399324]/82  to-[#111C6F]/90 rounded-4xl overflow-hidden">
          <div className=" w-full">
            <div className="aspect-video flex items-center justify-center">
              <div className="bg-transparent p-7 flex  rounded-full border border-zinc-300/40">
                  <button className="w-25 h-25 bg-[#01008C] rounded-full flex items-center justify-center text-2xl text-white hover:bg-blue-800 cursor-pointer transition-all duration-300">
                    <FaPlay />

                  </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
