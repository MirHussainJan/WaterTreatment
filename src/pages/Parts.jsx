import Footer from "../components/Footer";
import Header from "../components/Header";
import SubHero from "../components/ui/SubHero";

const Parts = () => {
  const commercialProducts = [
    {
      name: "Alkaline Ionizer Water Machine",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/ALKALINE-IONIZER-WATER-MACHINE-1024x683.jpg",
    },
    {
      name: "Copper Silver Ionization",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Copper-Silver-Ionization-1024x683.jpg",
    },
    {
      name: "Portable RO System",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Portable-RO-System-1024x683.jpg",
    },
    {
      name: "Self Cleaning Filter",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Self-Cleaning-Filter-1-1024x683.jpg",
    },
    {
      name: "Stainless Steel Bag Filter",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Stainless-Steel-Bag-Filter-1024x683.jpg",
    },
    {
      name: "Stainless Steel RO Water Dispenser",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Stainless-Steel-RO-Water-Dispenser-1024x683.jpg",
    },
    {
      name: "Swimming Pool Chlorination System",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Swimming-Pool-Chlorination-System-1024x683.jpg",
    },
    {
      name: "Water Chiller",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Water-Chiller-1-1024x683.jpg",
    },
    {
      name: "Water Makers",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Water-Makers-1024x683.jpg",
    },
  ];
  const domesticProducts = [
    {
      name: "Water Softener",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Water-Softener-1024x683.jpg",
    },
    {
      name: "Water Filter System",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Water-Filter-Sysytem-1024x683.jpg",
    },
    {
      name: "Water Chiller",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Water-Chiller-1024x683.jpg",
    },
    {
      name: "Ultraviolet UV System",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Ultraviolet-UV-System-1024x683.jpg",
    },
    {
      name: "UltraFiltration UF System",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/UltraFiltration-UF-System-1024x683.jpg",
    },
    {
      name: "Shower Filter",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Shower-Filter-1024x683.jpg",
    },
    {
      name: "Lab Aquarium Deionizer",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Lab-Aquarium-Deionizer-1024x683.jpg",
    },
    {
      name: "Filter Cartridges",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Filter-Cartridges-1024x683.jpg",
    },
    {
      name: "Alkaline Filter",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Alkaline-Filter-1024x683.jpg",
    },
  ];
  const IndustrialProducts = [
    {
      name: "Industrial Deionizer System",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Industrial-Deionizer-System-1024x683.jpg",
    },
    {
      name: "Industrial RO Membrane",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Industrial-RO-Membrane-1024x683.jpg",
    },
    {
      name: "Industrial Water Softener",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Industrial-Water-Softener-1024x683.jpg",
    },
    {
      name: "Multimedia Filter",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Multimedia-Filter-1024x683.jpg",
    },
    {
      name: "Sea Water RO Plant",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Sea-Water-RO-Plant-1024x683.jpg",
    },
    {
      name: "Industrial RO Plant",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Industrial-RO-Plant-1024x683.jpg",
    },
    {
      name: "Self Cleaning Filter",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Self-Cleaning-Filter-1024x683.jpg",
    },
    {
      name: "Brackish Water RO Plant",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Brackish-Water-RO-Plant-1024x683.jpg",
    },
    {
      name: "Ultraviolet UV Sterilizers",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Ultraviolet-UV-Sterilizers-1024x683.jpg",
    },
    {
      name: "Containerized RO Plant",
      img: "https://waterengineering.ae/wp-content/uploads/2024/12/Containerized-RO-Plant-1024x683.jpg",
    },
  ];
  return (
    <>
      <Header />
      <SubHero
        title={"Parts"}
        img={
          "https://waterengineering.ae/wp-content/uploads/2025/01/parts-Image-BG-scaled.jpg"
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
                className="w-full h-auto object-cover rounded-lg shadow-lg"
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
                className="w-full h-auto object-cover rounded-lg shadow-lg"
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
                className="w-full h-auto object-cover rounded-lg shadow-lg"
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
