import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SubHero from "../components/ui/SubHero";
import { ShoppingCart, X, MessageCircle } from "lucide-react";

const Parts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const commercialProducts = [
    {
      name: "Alkaline Water Ionizer Machine",
      img: "/Water-Ionization.png",
      category: "commercial",
      description: "Advanced alkaline water ionizer for commercial use. Produces pH-balanced water with antioxidant properties. Perfect for offices and commercial spaces.",
      features: ["7-Stage Filtration", "pH Range: 4.0-10.0", "ORP Control", "LCD Display"],
    },
    {
      name: "Copper Silver Ionization System",
      img: "/INNOVATORS (17).png",
      category: "commercial",
      description: "Eco-friendly water treatment using copper-silver ionization. Eliminates bacteria and algae without chemicals. Ideal for pools and cooling towers.",
      features: ["Chemical-Free", "Low Maintenance", "Long-Lasting", "Eco-Friendly"],
    },
    {
      name: "Portable RO Water Purifier System",
      img: "/INNOVATORS (32).png",
      category: "commercial",
      description: "Compact and portable RO system for on-the-go purification. Perfect for events, outdoor activities, and temporary setups.",
      features: ["Easy Transport", "Quick Setup", "High Efficiency", "Durable Build"],
    },
    {
      name: "Self Cleaning Water Filter",
      img: "/INNOVATORS (30).png",
      category: "commercial",
      description: "Automatic self-cleaning filter reduces maintenance. Advanced technology ensures consistent water quality without manual intervention.",
      features: ["Auto-Cleaning", "Reduced Maintenance", "High Flow Rate", "Smart Technology"],
    },
    {
      name: "Stainless Steel Bag Filter Housing",
      img: "/img6.png",
      category: "commercial",
      description: "Heavy-duty stainless steel housing for bag filters. Corrosion-resistant and designed for high-pressure applications.",
      features: ["316L Stainless Steel", "High Pressure Rated", "Multiple Sizes", "Easy Maintenance"],
    },
    {
      name: "Stainless Steel RO Water Dispenser Cooler",
      img: "/img5.png",
      category: "commercial",
      description: "Premium stainless steel water dispenser with RO purification and cooling. Perfect for offices and commercial establishments.",
      features: ["Hot & Cold", "Built-in RO", "Stainless Steel", "Large Capacity"],
    },
    {
      name: "Swimming Pool Chlorination System",
      img: "/Img4.png",
      category: "commercial",
      description: "Automated chlorination system for swimming pools. Maintains optimal chlorine levels for safe and clean pool water.",
      features: ["Automatic Dosing", "Digital Control", "Safety Features", "Easy Installation"],
    },
    {
      name: "Water Chiller Systems",
      img: "/INNOVATORS (20).png",
      category: "commercial",
      description: "Industrial-grade water chiller for consistent temperature control. Energy-efficient cooling for various applications.",
      features: ["Energy Efficient", "Digital Display", "Multiple Capacities", "Quiet Operation"],
    },
    {
      name: "Water Makers RO Systems",
      img: "img2.png",
      category: "commercial",
      description: "High-capacity RO water makers for commercial applications. Produces large volumes of purified water efficiently.",
      features: ["High Output", "Energy Saving", "Auto-Flush", "Quality Components"],
    },
  ];

  const domesticProducts = [
    {
      name: "Water Softener for Home",
      img: "/INNOVATORS (28).png",
      category: "domestic",
      description: "Whole house water softener removes hardness and protects appliances. Enjoy soft water throughout your home in UAE.",
      features: ["Salt-Based Softening", "Auto Regeneration", "Digital Control", "Easy Installation"],
    },
    {
      name: "Home Water Filter System",
      img: "/INNOVATORS (29).png",
      category: "domestic",
      description: "Complete home water filtration system for pure drinking water. Multi-stage filtration removes contaminants effectively.",
      features: ["Multi-Stage Filtration", "Easy Filter Change", "Compact Design", "NSF Certified"],
    },
    {
      name: "Water Chiller Dispenser",
      img: "/INNOVATORS (20).png",
      category: "domestic",
      description: "Compact water dispenser with chilling function. Perfect for homes and small offices requiring cold drinking water.",
      features: ["Hot & Cold", "Energy Efficient", "Child Lock", "Sleek Design"],
    },
    {
      name: "Ultraviolet UV Sterilization System",
      img: "/INNOVATORS (13).png",
      category: "domestic",
      description: "UV sterilization system kills 99.9% of bacteria and viruses. Chemical-free water purification for safe drinking water.",
      features: ["99.9% Effective", "No Chemicals", "Low Maintenance", "LED Indicator"],
    },
    {
      name: "UltraFiltration UF Water System",
      img: "/INNOVATORS (27).png",
      category: "domestic",
      description: "UF membrane technology for superior filtration. Retains essential minerals while removing contaminants.",
      features: ["Mineral Retention", "0.01 Micron", "No Electricity", "High Flow Rate"],
    },
    {
      name: "Shower Water Filter",
      img: "/INNOVATORS (14).png",
      category: "domestic",
      description: "Shower filter removes chlorine and impurities. Enjoy healthier skin and hair with filtered shower water.",
      features: ["Chlorine Removal", "Easy Installation", "Long Lasting", "Universal Fit"],
    },
    {
      name: "Lab Aquarium Deionizer DI System",
      img: "/INNOVATORS (16).png",
      category: "domestic",
      description: "Deionization system for ultra-pure water. Perfect for laboratories, aquariums, and sensitive applications.",
      features: ["Ultra Pure Water", "Mixed Bed Resin", "Color Indicator", "Compact Size"],
    },
    {
      name: "Water Filter Cartridges",
      img: "/INNOVATORS (25).png",
      category: "domestic",
      description: "Replacement filter cartridges for various water systems. High-quality filtration media ensures optimal performance.",
      features: ["Multiple Sizes", "Premium Media", "Easy Replacement", "Long Lifespan"],
    },
    {
      name: "Alkaline Water Filter",
      img: "/INNOVATORS (12).png",
      category: "domestic",
      description: "Alkaline filter adds beneficial minerals and increases pH. Enjoy healthy alkaline water at home in Dubai.",
      features: ["pH Enhancement", "Mineral Addition", "Easy Install", "Healthy Water"],
    },
  ];

  const IndustrialProducts = [
    {
      name: "Industrial Deionizer DI System",
      img: "/Industrial-Deionizer-System-1024x683.jpg",
      category: "industrial",
      description: "Heavy-duty deionization system for industrial applications. Produces ultra-pure water for manufacturing processes.",
      features: ["High Capacity", "Dual Tank", "Auto Regeneration", "Quality Resins"],
    },
    {
      name: "Industrial RO Membrane",
      img: "/INNOVATORS (22).png",
      category: "industrial",
      description: "Premium industrial-grade RO membranes. High rejection rate and durability for demanding applications in UAE.",
      features: ["High Rejection", "Long Lifespan", "Various Sizes", "NSF Certified"],
    },
    {
      name: "Industrial Water Softener System",
      img: "/Industrial-Water-Softener-1024x683.jpg",
      category: "industrial",
      description: "Large-capacity water softener for industrial use. Protects equipment and improves process efficiency.",
      features: ["High Flow Rate", "Industrial Grade", "Auto Controls", "Durable Build"],
    },
    {
      name: "Multimedia Water Filter",
      img: "/INNOVATORS (31).png",
      category: "industrial",
      description: "Multi-layer filtration for turbidity and sediment removal. Essential pre-treatment for RO systems and industrial processes.",
      features: ["Multi-Media Layers", "High Flow", "Backwash System", "FRP Vessel"],
    },
    {
      name: "Sea Water RO Plant System",
      img: "/Sea-Water-RO-Plant-1024x683.jpg",
      category: "industrial",
      description: "Advanced seawater desalination RO plant. Convert seawater to potable water for coastal and marine applications.",
      features: ["High Pressure", "Energy Recovery", "Corrosion Resistant", "Auto Operation"],
    },
    {
      name: "Industrial RO Plant",
      img: "/Industrial-RO-Plant-1024x683.jpg",
      category: "industrial",
      description: "Complete industrial RO plant for large-scale water purification. Customizable capacity and configuration for UAE industries.",
      features: ["Customizable", "High Output", "PLC Control", "Quality Components"],
    },
    {
      name: "Self Cleaning Water Filter",
      img: "/INNOVATORS (30).png",
      category: "industrial",
      description: "Industrial self-cleaning filter with automatic backwash. Minimal downtime and maintenance for continuous operation.",
      features: ["Automatic Cleaning", "Continuous Flow", "PLC Control", "Heavy Duty"],
    },
    {
      name: "Brackish Water RO Plant",
      img: "/Reverse-osmosis.png",
      category: "industrial",
      description: "Brackish water RO plant for groundwater treatment. Lower pressure requirements make it energy-efficient.",
      features: ["Energy Efficient", "Lower Pressure", "High Recovery", "Auto Flush"],
    },
    {
      name: "Ultraviolet UV Water Sterilizers",
      img: "/INNOVATORS (26).png",
      category: "industrial",
      description: "Industrial UV sterilizers for high-flow applications. Ensures microbiological safety without chemicals.",
      features: ["High Flow Rate", "Stainless Steel", "Lamp Monitor", "Safe & Effective"],
    },
    {
      name: "Containerized RO Water Plant",
      img: "/Containerized-RO-Plant-1024x683.jpg",
      category: "industrial",
      description: "Mobile containerized RO plant for remote locations. Complete water treatment solution in a shipping container.",
      features: ["Mobile Solution", "Plug & Play", "Weather Proof", "Complete System"],
    },
  ];

  const allProducts = [...commercialProducts, ...domesticProducts, ...IndustrialProducts];

  const filteredProducts = activeCategory === "all" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  const handleBuyNow = (product) => {
    const message = `Hello! I'm interested in purchasing the *${product.name}*.%0A%0ACould you please provide me with more details about pricing, availability, and delivery options in UAE?%0A%0AThank you!`;
    const whatsappUrl = `https://wa.me/971559131523?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Header />
      <SubHero
        title={"Parts & Components"}
        img={"/parts-Image-BG-scaled.jpg"}
        desc={"Quality water purifier parts and RO plant components in UAE for every water treatment solution. Our comprehensive range of industrial RO membranes, water softener parts, and water filter cartridges keeps your systems running at peak efficiency across Dubai."}
      />

      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-[#01008c] text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setActiveCategory("commercial")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === "commercial"
                  ? "bg-[#01008c] text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow"
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setActiveCategory("industrial")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === "industrial"
                  ? "bg-[#01008c] text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow"
              }`}
            >
              Industrial
            </button>
            <button
              onClick={() => setActiveCategory("domestic")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === "domestic"
                  ? "bg-[#01008c] text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow"
              }`}
            >
              Domestic
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative overflow-hidden h-56 bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#01008c] capitalize">
                    {product.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <button className="bg-white text-[#01008c] px-4 py-2 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ShoppingCart size={18} />
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-800 text-base mb-2 line-clamp-2 min-h-[48px]">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {product.description}
                  </p>
                  <button 
                    className="w-full bg-[linear-gradient(180deg,#01008c_0%,#063977_100%)] hover:-translate-y-2.5 transition duration-400 cursor-pointer py-4 px-8 font-semibold rounded-sm text-sm text-white flex items-center justify-center gap-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(product);
                    }}
                  >
                    <ShoppingCart size={18} />
                    Quick View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-2xl animate-slideUp mt-24"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                <X size={24} className="text-gray-700" />
              </button>

              {/* Product Image */}
              <div className="relative h-50 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#01008c] text-white px-4 py-2 rounded-full text-sm font-semibold capitalize shadow-lg">
                  {selectedProduct.category}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedProduct.name}
                </h2>
                
                <p className="text-gray-600 text-base mb-6 leading-relaxed hidden md:block">
                  {selectedProduct.description}
                </p>

                {/* Features */}
                <div className="mb-8 hidden md:block">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    Key Features:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProduct.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#01008c] rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleBuyNow(selectedProduct)}
                  className="w-full bg-[linear-gradient(180deg,#01008c_0%,#063977_100%)] hover:-translate-y-2.5 transition duration-400 cursor-pointer py-4 px-8 font-semibold rounded-sm text-sm text-white flex items-center justify-center gap-3"
                >
                  <MessageCircle size={20} />
                  Buy Now via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default Parts;
