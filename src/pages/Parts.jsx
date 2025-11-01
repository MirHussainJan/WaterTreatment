import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SubHero from "../components/ui/SubHero";
import { ShoppingCart, X, MessageCircle, Search, Building2, Home, Factory, Grid3x3 } from "lucide-react";

const Parts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

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
      img: "/img5.png",
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

  // Filter products by category and search query
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Group products by category for display
  const groupedProducts = {
    commercial: filteredProducts.filter(p => p.category === "commercial"),
    domestic: filteredProducts.filter(p => p.category === "domestic"),
    industrial: filteredProducts.filter(p => p.category === "industrial"),
  };

  const categories = [
    { id: "all", name: "All Products", icon: Grid3x3 },
    { id: "commercial", name: "Commercial", icon: Building2 },
    { id: "industrial", name: "Industrial", icon: Factory },
    { id: "domestic", name: "Domestic", icon: Home },
  ];

  const handleBuyNow = (product) => {
    const message = `Hello! I'm interested in purchasing the *${product.name}*.%0A%0ACould you please provide me with more details about pricing, availability, and delivery options in UAE?%0A%0AThank you!`;
    const whatsappUrl = `https://wa.me/971559131523?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Product Card Component
  const ProductCard = ({ product, onClick }) => (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-[#01008c]/30 flex flex-col justify-between"
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-50">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-gray-900 text-base text-center line-clamp-2 min-h-[2rem] group-hover:text-[#01008c] transition-colors duration-300">
          {product.name}
        </h3>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <SubHero
        title={"Parts & Components"}
        img={"/parts-Image-BG-scaled.jpg"}
        desc={"Quality water purifier parts and RO plant components in UAE for every water treatment solution. Our comprehensive range of industrial RO membranes, water softener parts, and water filter cartridges keeps your systems running at peak efficiency across Dubai."}
      />

      <section className="bg-white py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-md border border-gray-200 focus-within:border-[#01008c] focus-within:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 px-4">
                  <Search className="text-gray-400 flex-shrink-0" size={20} />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 py-3 text-gray-700 placeholder-gray-400 bg-transparent outline-none text-sm"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X size={18} />
                    </button>
                  )}
                </div>
                
                {/* Search Results Preview */}
                {searchQuery && filteredProducts.length > 0 && (
                  <div className="mt-2 border-t border-gray-100 pt-2 max-h-80 overflow-y-auto">
                    <div className="space-y-1 px-2 pb-2">
                      {filteredProducts.slice(0, 5).map((product, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setSelectedProduct(product);
                            setSearchQuery("");
                          }}
                          className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md cursor-pointer transition-colors duration-200"
                        >
                          <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                            <img
                              src={product.img}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-800 text-xs truncate">
                              {product.name}
                            </h4>
                            <p className="text-xs text-gray-500 capitalize">
                              {product.category}
                            </p>
                          </div>
                        </div>
                      ))}
                      {filteredProducts.length > 5 && (
                        <p className="text-center text-xs text-gray-500 py-2">
                          +{filteredProducts.length - 5} more
                        </p>
                      )}
                    </div>
                  </div>
                )}
                
                {searchQuery && filteredProducts.length === 0 && (
                  <div className="mt-2 border-t border-gray-100 pt-4 pb-3 text-center">
                    <p className="text-gray-500 text-xs">No products found</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setSearchQuery("");
                  }}
                  className={`group relative px-5 py-2.5 rounded-2xl font-medium text-sm transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-[#01008c] text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <IconComponent size={16} />
                    <span>{category.name}</span>
                    {category.id !== "all" && (
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        activeCategory === category.id 
                          ? "bg-white/20" 
                          : "bg-gray-100"
                      }`}>
                        {groupedProducts[category.id]?.length || 0}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Products Display */}
          {activeCategory === "all" && !searchQuery ? (
            <>
              {/* Commercial Products */}
              {groupedProducts.commercial.length > 0 && (
                <div className="mb-20">
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#01008c] flex items-center justify-center shadow-md">
                        <Building2 size={22} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Commercial</h2>
                        <p className="text-sm text-gray-500">Professional water treatment systems</p>
                      </div>
                    </div>
                    <hr className="border-gray-200" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {groupedProducts.commercial.map((product, index) => (
                      <ProductCard key={index} product={product} onClick={() => setSelectedProduct(product)} />
                    ))}
                  </div>
                </div>
              )}

              {/* Domestic Products */}
              {groupedProducts.domestic.length > 0 && (
                <div className="mb-20">
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#01008c] flex items-center justify-center shadow-md">
                        <Home size={22} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Domestic</h2>
                        <p className="text-sm text-gray-500">Perfect for homes and residential use</p>
                      </div>
                    </div>
                    <hr className="border-gray-200" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {groupedProducts.domestic.map((product, index) => (
                      <ProductCard key={index} product={product} onClick={() => setSelectedProduct(product)} />
                    ))}
                  </div>
                </div>
              )}

              {/* Industrial Products */}
              {groupedProducts.industrial.length > 0 && (
                <div className="mb-20">
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[#01008c] flex items-center justify-center shadow-md">
                        <Factory size={22} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Industrial</h2>
                        <p className="text-sm text-gray-500">Heavy-duty systems for large operations</p>
                      </div>
                    </div>
                    <hr className="border-gray-200" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {groupedProducts.industrial.map((product, index) => (
                      <ProductCard key={index} product={product} onClick={() => setSelectedProduct(product)} />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Filtered Products Grid */
            <div>
              {filteredProducts.length > 0 ? (
                <>
                  <div className="text-center mb-8">
                    <p className="text-sm text-gray-600">
                      Showing <span className="font-semibold text-[#01008c]">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'}
                    </p>
                    <hr className="border-gray-200 mt-4 max-w-md mx-auto" />
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {filteredProducts.map((product, index) => (
                      <ProductCard key={index} product={product} onClick={() => setSelectedProduct(product)} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-16">
                  <Search className="mx-auto text-gray-300 mb-3" size={48} />
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">No products found</h3>
                  <p className="text-sm text-gray-500">Try adjusting your filters</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 max-h-[90vh] overflow-y-auto">
              {/* Image Section */}
              <div className="relative bg-gray-50 flex items-center justify-center p-8">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-3 right-3 z-10 bg-white p-2 rounded-lg hover:bg-gray-100 transition-colors shadow-md"
                >
                  <X size={18} className="text-gray-700" />
                </button>
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  className="w-full h-auto max-h-[350px] object-contain"
                />
              </div>

              {/* Details Section */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#01008c] text-white rounded-md text-xs font-medium mb-4">
                    {selectedProduct.category === "commercial" ? <Building2 size={14} /> : 
                     selectedProduct.category === "industrial" ? <Factory size={14} /> : <Home size={14} />}
                    <span className="capitalize">{selectedProduct.category}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {selectedProduct.name}
                  </h2>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {selectedProduct.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                      Key Features
                    </h3>
                    <div className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-[#01008c] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleBuyNow(selectedProduct)}
                  className="w-full bg-[#01008c] hover:bg-[#063977] text-white py-3 px-6 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <MessageCircle size={18} />
                  <span>Contact on WhatsApp</span>
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
