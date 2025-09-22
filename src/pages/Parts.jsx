import Footer from "../components/Footer";
import Header from "../components/Header";
import SubHero from "../components/ui/SubHero";

const Parts = () => {
  const commercialProducts = [
    {
      name: "Alkaline Ionizer Water Machine",
      img: "/Water-Ionization.png",
    },
    {
      name: "Copper Silver Ionization",
      img: "/INNOVATORS (17).png",
    },
    {
      name: "Portable RO System",
      img: "/INNOVATORS (32).png",
    },
    {
      name: "Self Cleaning Filter",
      img: "/INNOVATORS (30).png",
    },
    {
      name: "Stainless Steel Bag Filter",
      img: "/img6.png",
    },
    {
      name: "Stainless Steel RO Water Dispenser",
      img: "/img5.png",
    },
    {
      name: "Swimming Pool Chlorination System",
      img: "/Img4.png",
    },
    {
      name: "Water Chiller",
      img: "/INNOVATORS (20).png",
    },
    {
      name: "Water Makers",
      img: "img2.png",
    },
  ];
  const domesticProducts = [
    {
      name: "Water Softener",
      img: "/INNOVATORS (28).png",
    },
    {
      name: "Water Filter System",
      img: "/INNOVATORS (29).png",
    },
    {
      name: "Water Chiller",
      img: "/INNOVATORS (20).png",
    },
    {
      name: "Ultraviolet UV System",
      img: "/INNOVATORS (13).png",
    },
    {
      name: "UltraFiltration UF System",
      img: "/INNOVATORS (27).png",
    },
    {
      name: "Shower Filter",
      img: "/INNOVATORS (14).png",
    },
    {
      name: "Lab Aquarium Deionizer",
      img: "/INNOVATORS (16).png",
    },
    {
      name: "Filter Cartridges",
      img: "/INNOVATORS (25).png",
    },
    {
      name: "Alkaline Filter",
      img: "/INNOVATORS (12).png",
    },
  ];
  const IndustrialProducts = [
    {
      name: "Industrial Deionizer System",
      img: "/Industrial-Deionizer-System-1024x683.jpg",
    },
    {
      name: "Industrial RO Membrane",
      img: "/INNOVATORS (22).png",
    },
    {
      name: "Industrial Water Softener",
      img: "/Industrial-Water-Softener-1024x683.jpg",
    },
    {
      name: "Multimedia Filter",
      img: "/INNOVATORS (31).png",
    },
    {
      name: "Sea Water RO Plant",
      img: "/Sea-Water-RO-Plant-1024x683.jpg",
    },
    {
      name: "Industrial RO Plant",
      img: "/Industrial-RO-Plant-1024x683.jpg",
    },
    {
      name: "Self Cleaning Filter",
      img: "/INNOVATORS (30).png",
    },
    {
      name: "Brackish Water RO Plant",
      img: "/Reverse-osmosis.png",
    },
    {
      name: "Ultraviolet UV Sterilizers",
      img: "/INNOVATORS (26).png",
    },
    {
      name: "Containerized RO Plant",
      img: "/Containerized-RO-Plant-1024x683.jpg",
    },
  ];
  return (
    <>
      <Header />
      <SubHero
        title={"Parts"}
        img={
          "/parts-Image-BG-scaled.jpg"
        }
        desc={
          "Quality components for every water treatment solution. Our comprehensive range of parts keeps your systems running at peak efficiency."
        }
      />
      <section className="max-w-[1140px] mx-auto px-4 py-16 md:px-0">
        <h1 className="text-2xl font-bold text-gray-600 pb-3 border-b border-b-gray-600">
          Commercial Parts
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 mb-32">
          {commercialProducts.map((product, index) => (
            <div
              key={index}
              className="mt-8 flex flex-col items-center gap-6"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-[180px] object-cover rounded-lg shadow-lg"
              />
              <h2 className="text-base text-center font-semibold text-gray-600">
                {product.name}
              </h2>
            </div>
          ))}
        </div>
        <h1 className="text-2xl font-bold text-gray-600 pb-3 border-b border-b-gray-600">
          Industrial Parts
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 mb-32">
          {IndustrialProducts.map((product, index) => (
            <div
              key={index}
              className="mt-8 flex flex-col items-center gap-6"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-[180px] object-cover rounded-lg shadow-lg"
              />
              <h2 className="text-base text-center font-semibold text-gray-600">
                {product.name}
              </h2>
            </div>
          ))}
        </div>
        <h1 className="text-2xl font-bold text-gray-600 pb-3 border-b border-b-gray-600">
          Domestic Parts
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {domesticProducts.map((product, index) => (
            <div
              key={index}
              className="mt-8 flex flex-col items-center gap-6"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-[180px] object-cover rounded-lg shadow-lg"
              />
              <h2 className="text-base text-center font-semibold text-gray-600">
                {product.name}
              </h2>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Parts;
