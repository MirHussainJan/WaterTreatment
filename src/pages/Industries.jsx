import Footer from "../components/Footer";
import Header from "../components/Header";
import SubHero from "../components/ui/SubHero";

const Industries = () => {
  const blogs = [
    {
      title: "Reliable Water Solutions for Hospitals and Medical Labs",
      desc: "Ensure hospitals and medical labs maintain top water quality with Water Engineering advanced treatment systems, designed for safety and optimal",
      img: "Reliable-Water-Solutions-for-Hospitals-and-Medical-Labs-01-1024x528.jpg",
    },
    {
      title: "Water Quality Management for Construction and Concrete Production",
      desc: "Ensure hospitals and medical labs maintain top water quality with Water Engineering advanced treatment systems, designed for safety and optimal",
      img: "/Banner-10-1024x480.jpg",
    },
    {
      title: "Innovative Water Filtration for Paints and Coatings Manufacturing",
      desc: "Optimize your paints and coatings manufacturing process with Water Engineering.ae advanced water systems, ensuring superior product quality and efficient production",
      img: "/Banner-09-1024x480.jpg",
    },
    {
      title: "Water Filtration for Perfume and Fragrance Manufacturing",
      desc: "Ensure the highest water quality for perfume and fragrance manufacturing with Water Engineering.ae specialized treatment systems, enhancing purity and production",
      img: "/Banner-08-1024x480.jpg",
    },
    {
      title: "Water Treatment Solutions for Paper and Pulp Industry",
      desc: "Ensure consistent quality in paper and pulp production with Water Engineering.ae specialized water treatment systems, enhancing efficiency and meeting industry",
      img: "/Banner-07-1024x480.jpg",
    },
    {
      title: "Advanced Water Solutions for Oil and Gas Refining",
      desc: "Ensure optimal water quality for oil and gas operations with Water Engineering.ae advanced treatment systems, designed for efficiency, safety, and environmental compliance.",
      img: "/Banner-06-1024x480.jpg",
    },
    {
      title: "Reliable Water Systems for Chemical Manufacturing",
      desc: "Transform your Chemical Manufacturing processes with Water Engineering.ai advanced treatment solutions, ensuring optimal water purity for reliable production.",
      img: "/Banner-05-1024x480.jpg",
    },
    {
      title: "Industrial Water Filtration for Textile and Dyeing Industry",
      desc: "Ensure high-quality water for textiles and dyeing with Water Engineering.ae advanced treatment solutions, enhancing efficiency and maintaining vibrant, consistent results.",
      img: "/Banner-04-1024x480.jpg",
    },
    {
      title: "Efficient Filtration Systems for Food and Beverage Industries",
      desc: "Enhance your food and beverage quality with Water Engineering.ae advanced filtration systems, ensuring purity and safety throughout the production process.",
      img: "/Banner-03-1024x480.jpg",
    },
    {
      title: "Best pharmaceuticals water purification systems",
      desc: "Transform your pharmaceutical operations with Water Engineering.ae advanced Pharmaceuticals purification systems, ensuring optimal water quality for every process.",
      img: "/Banner-02-1024x480.jpg",
    },
    {
      title: "Essential Water Filter Systems for Agriculture and Gardening Use",
      desc: "Enhance your Agriculture and Gardening practices with Water Engineering.ae advanced water treatment systems, ensuring clean and sustainable water use for optimal growth.",
      img: "/Banner-01-1024x480.jpg",
    },
    {
      title: "Best water filtration systems for hotel and Restaurants",
      desc: "Elevate water quality in Hotel and Restaurants with advanced treatment systems from Water Engineering.ae that ensure guest safety, staff health, and operational efficiency.",
      img: "https://www.bluedropwater.com/wp-content/uploads/2020/12/food-service-filtration-1-873x999.jpg.webp",
    },
  ];
  return (
    <>
      <Header />
      <SubHero
        title="Industries We Serve"
        desc="We provide comprehensive water treatment solutions across a variety of industries, ensuring optimal water quality and sustainability."
        img="/Industries-Image-BG-scaled.jpg"
      />
      <section className="w-full bg-[#F2F2F5]">
        <div className="grid md:grid-cols-2 grid-cols-1 justify-between gap-8 flex-col lg:flex-row max-w-[1140px] mx-auto py-16 md:px-0 px-4">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl overflow-hidden w-full flex gap-4"
            >
              <div
                className={`w-[700px] h-full bg-top bg-cover`}
                style={{ backgroundImage: `url(${blog.img})` }}
              ></div>
              <div className="absolute w-30 h-30 -bottom-10 -right-2">
                <img
                  src="https://waterengineering.ae/wp-content/uploads/2024/09/Group-6.svg"
                  alt=""
                />
              </div>

              <div className="pt-2 md:pt-4 pe-2 md:pe-6 pb-20 md:pb-24">
                <h3 className="text-base md:text-xl font-semibold cursor-pointer text-gray-600 mb-2 hover:text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm pt-2 md:pt-4">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Industries;
