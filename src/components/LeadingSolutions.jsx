import img from '../assets/Imgs/Main.png'
export default function LeadingSolutions() {
  return (
    <section className="py-16 max-w-[1140px] mx-auto bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 items-center justify-content-between gap-28">
          <div>
            <p className="text-gray-600 font-semibold text-xl uppercase mb-4">
              ENGINEERING PURE EXCELLENCE
            </p>
            <h2 className="text-5xl font-bold text-[#01008c] mb-6 titles">
              Leading UAE's Water Innovation
            </h2>
            <p className="text-gray-600 font-medium text-lg mb-4 text-justify">
              In 1999, Innovators set out on a transformative journey
              with a vision to revolutionize water treatment solutions.
            </p>
            <p className="text-gray-500 font-light text-justify">
              Today, we proudly serve clients across{" "}
              <strong className="font-bold">18 countries</strong> on three continents, with over{" "}
              <strong className="font-bold">5,000 satisfied customers</strong> and{" "}
              <strong className="font-bold">350+ successful installations</strong>. worldwide, particularly across the Middle East and North Africa standing at the forefront of comprehensive water treatment solutions.
            </p>
            <p className="text-gray-500 font-light mb-6 text-justify">
              Our commitment drives us to deliver cost-effective, custom-engineered systems that meet the specific needs of every client – from military institutions to healthcare facilities. With expertise sourced from global industry leaders, Water Engineering continues to set new standards in water treatment technology while pursuing our core mission: delivering pure water solutions for generations to come.
            </p>
            <button className="bg-[linear-gradient(180deg,#01008c_0%,#063977_100%)] hover:-translate-y-2.5 transition duration-400 cursor-pointer py-4 px-8 font-semibold rounded-sm text-sm text-white">
              Read Details
            </button>
          </div>

          <div className="flex justify-end">
            <img
              src={img}
              alt="Water treatment system"
              className="rounded-lg self-end"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
