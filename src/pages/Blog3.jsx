import Header from "../components/Header";
import Footer from "../components/Footer";
import SubHero from "../components/ui/SubHero";

export default function Blog3() {
  return (
    <>
      <Header />
      <SubHero title="Whole Home Water Filtration System: Pure Water Everywhere" desc="Upgrade to a whole home water filtration system for filtered water at every tap, improving health, taste, and appliance longevity throughout your house." img="/img3.png" />
      <section className="max-w-[1140px] mx-auto py-12 px-4">
        {/* Introduction Section */}
        <h2 className="text-2xl font-bold mb-4 text-[#01008c]">Whole Home Water Filtration System: Pure Water Everywhere</h2>
        <img src="/public/img6.png" alt="Generic Home Filtration" className="rounded-xl w-full max-w-lg mb-6 mx-auto" />
        <p className="text-gray-700 mb-8">A whole home water filtration system ensures that every tap in your house delivers clean, filtered water. This not only improves your health but also protects your appliances and plumbing from contaminants and scale buildup. In this guide, we’ll cover the features, installation, maintenance, and benefits of whole home filtration systems.</p>

        {/* Features Table Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2 text-[#01008c]">Key Features and Benefits</h3>
          <table className="w-full mb-4 border border-gray-300">
            <thead>
              <tr className="bg-[#ECF2F6]">
                <th className="p-2 border">Feature</th>
                <th className="p-2 border">Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border">Whole Home Coverage</td><td className="p-2 border">Filtered water at every tap, shower, and appliance.</td></tr>
              <tr><td className="p-2 border">Improved Taste & Odor</td><td className="p-2 border">Removes chlorine, sediment, and contaminants for better-tasting water.</td></tr>
              <tr><td className="p-2 border">Healthier Skin & Hair</td><td className="p-2 border">Reduces exposure to harsh chemicals and minerals.</td></tr>
              <tr><td className="p-2 border">Appliance Protection</td><td className="p-2 border">Prevents scale and sediment buildup, extending appliance life.</td></tr>
              <tr><td className="p-2 border">Easy Maintenance</td><td className="p-2 border">Simple filter changes and system checks.</td></tr>
              <tr><td className="p-2 border">Cost Savings</td><td className="p-2 border">Reduces bottled water and repair costs.</td></tr>
            </tbody>
          </table>
        </div>

        {/* Installation Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2 text-[#01008c]">Installation Process</h3>
          <div className="flex flex-col md:flex-row gap-8">
            <img src="/public/img4.png" alt="Installation" className="rounded-xl w-full md:w-1/2 mb-4 md:mb-0" />
            <div>
              <ol className="list-decimal pl-6 text-gray-700">
                <li>Assessment of water quality and needs.</li>
                <li>Selection of appropriate filtration system.</li>
                <li>Professional installation at main water line.</li>
                <li>Testing and system demonstration.</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Maintenance Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2 text-[#01008c]">Maintenance Tips</h3>
          <img src="/public/img3.png" alt="Maintenance" className="rounded-xl w-full max-w-lg mb-6 mx-auto" />
          <ul className="list-disc pl-6 text-gray-700">
            <li>Change filters as recommended by the manufacturer.</li>
            <li>Inspect system for leaks and wear every 6 months.</li>
            <li>Flush the system after filter changes.</li>
            <li>Schedule professional servicing annually.</li>
          </ul>
        </div>

        {/* Frequently Asked Questions Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2 text-[#01008c]">Frequently Asked Questions</h3>
          <ul className="list-decimal pl-6 text-gray-700 mb-8">
            <li><strong>How often do I change filters?</strong> Most systems require filter changes every 6-12 months.</li>
            <li><strong>Will it remove all contaminants?</strong> It removes most common contaminants, but check system specs for details.</li>
            <li><strong>Is installation disruptive?</strong> Professional installation is quick and minimally invasive.</li>
            <li><strong>Can I install a system myself?</strong> Some systems are DIY-friendly, but professional installation is recommended for best results.</li>
            <li><strong>Does it improve water taste?</strong> Yes, most users notice a significant improvement in taste and odor.</li>
          </ul>
        </div>

        {/* Conclusion Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2 text-[#01008c]">Conclusion</h3>
          <img src="/public/img6.png" alt="Clean Water" className="rounded-xl w-full max-w-lg mb-6 mx-auto" />
          <p className="text-gray-700">Investing in a whole home filtration system is a step towards a healthier lifestyle and a more efficient household. Enjoy pure water everywhere, every day!</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
