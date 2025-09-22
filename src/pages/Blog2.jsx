import Header from "../components/Header";
import Footer from "../components/Footer";
import SubHero from "../components/ui/SubHero";

export default function Blog2() {
  return (
    <>
      <Header />
      <SubHero title="Issues with Water Filtration Systems and How to Fix Them" desc="Find out the common problems with water filtration systems, like clogging, leaks, and reduced flow, and learn practical solutions to keep your water clean and safe." img="/img2.png" />
      <section className="max-w-[1140px] mx-auto py-12 px-4">
        {/* Introduction Section */}
        <h2 className="text-2xl font-bold mb-4 text-[#01008c]">Issues with Water Filtration Systems and How to Fix Them</h2>
        <img src="/public/img6.png" alt="Generic Water Filtration" className="rounded-xl w-full max-w-lg mb-6 mx-auto" />
        <p className="text-gray-700 mb-8">Water filtration systems are essential for providing clean, safe water in homes and businesses. However, like any system, they can encounter problems that affect performance and water quality. This guide explores common issues, solutions, and maintenance tips to keep your filtration system running smoothly.</p>

        {/* Common Problems Table Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2 text-[#01008c]">Common Problems and Solutions</h3>
          <table className="w-full mb-4 border border-gray-300">
            <thead>
              <tr className="bg-[#ECF2F6]">
                <th className="p-2 border">Problem</th>
                <th className="p-2 border">Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border">Clogged Filters</td><td className="p-2 border">Replace filters regularly and flush the system as recommended.</td></tr>
              <tr><td className="p-2 border">Leaks</td><td className="p-2 border">Check for loose fittings and damaged seals; tighten or replace as needed.</td></tr>
              <tr><td className="p-2 border">Reduced Water Flow</td><td className="p-2 border">Clean or replace clogged filters and check for blockages in pipes.</td></tr>
              <tr><td className="p-2 border">Unpleasant Taste/Odor</td><td className="p-2 border">Replace carbon filters and sanitize the system.</td></tr>
              <tr><td className="p-2 border">Noisy Operation</td><td className="p-2 border">Air trapped in the system; bleed air and check for proper installation.</td></tr>
            </tbody>
          </table>
        </div>

        {/* Maintenance Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2 text-[#01008c]">Maintenance Tips</h3>
          <img src="/public/img4.png" alt="Maintenance" className="rounded-xl w-full max-w-lg mb-6 mx-auto" />
          <ul className="list-disc pl-6 text-gray-700">
            <li>Follow manufacturer’s instructions for filter changes.</li>
            <li>Inspect system for leaks and wear monthly.</li>
            <li>Flush the system after filter changes.</li>
            <li>Keep a maintenance log for reminders.</li>
            <li>Schedule professional servicing annually.</li>
          </ul>
        </div>

        {/* Troubleshooting Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2 text-[#01008c]">Troubleshooting Guide</h3>
          <div className="flex flex-col md:flex-row gap-8">
            <img src="/public/img5.png" alt="Troubleshooting" className="rounded-xl w-full md:w-1/2 mb-4 md:mb-0" />
            <div>
              <ul className="list-disc pl-6 text-gray-700">
                <li>If water flow drops suddenly, check for filter clogs or closed valves.</li>
                <li>Persistent bad taste may indicate the need for carbon filter replacement.</li>
                <li>Leaks often result from worn O-rings or loose connections—inspect and replace as needed.</li>
                <li>Unusual noises can be caused by trapped air; bleed the system if necessary.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2 text-[#01008c]">Frequently Asked Questions</h3>
          <ul className="list-decimal pl-6 text-gray-700 mb-8">
            <li><strong>How often should I change my filters?</strong> Most filters need replacement every 3-6 months, but check your manual.</li>
            <li><strong>What if my water still tastes bad?</strong> Try replacing carbon filters and sanitizing the system.</li>
            <li><strong>Can I use generic filters?</strong> Use manufacturer-recommended filters for best results.</li>
            <li><strong>Why is my system noisy?</strong> Air in the system or loose parts can cause noise; check installation and bleed air if needed.</li>
            <li><strong>Is professional servicing necessary?</strong> Annual professional checks help maintain system performance and safety.</li>
          </ul>
        </div>

        {/* Conclusion Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-2 text-[#01008c]">Conclusion</h3>
          <img src="/public/img6.png" alt="Clean Water" className="rounded-xl w-full max-w-lg mb-6 mx-auto" />
          <p className="text-gray-700">By addressing these issues promptly and following regular maintenance, you can ensure your water filtration system delivers safe, clean water for years to come. Proper care protects your investment and your health.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
