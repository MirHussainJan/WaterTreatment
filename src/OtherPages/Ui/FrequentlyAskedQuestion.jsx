import React, { useState } from "react";
import { ChevronDown, MoveUp } from "lucide-react";
export default function FrequentlyAskedQuestion() {
  const [showUp, setShowUp] = useState(0);
  const faq = [
    {
      question: "What is a custom purification system?",
      answer:"A custom purification system is designed specifically to meet unique water quality needs. It utilizes advanced filtration methods to ensure clean water, making it suitable for various applications, including residential, industrial, and commercial use.",
    },
    {
      question: "How often should custom purification system maintenance?",
      answer:"Regular maintenance is essential for optimal performance. We recommend scheduling custom purification system maintenance at least once a year to ensure it operates efficiently, prevents potential issues, and extends the system's lifetime for reliable water purification.",
    },
    {
      question: "What does a custom purification system include?",
      answer:"Our custom purification system service includes installation, routine inspections, and thorough cleaning of components. Also, we provide performance testing to identify any issues and ensure your system consistently delivers clean, safe water customized to your needs.",
    },
  ];
  return (
    <>
      <section className="w-full py-16 bg-[#ECF2F6]">
        <main className="max-w-[1140px] mx-auto px-5">
          <p className="text-4xl font-bold text-[#01008c] mb-6 titles text-center">
            Frequently Asked Questions
          </p>
          <p className="text-center md:px-60 mb-6 text-zinc-500">
            These certifications guarantee our exceptional performance in terms
            of customer service and safety standards.
          </p>

          {faq.map((item, index) => (
            <div
              key={index}
              className="mb-5 bg-white px-6 py-4 rounded-2xl flex flex-col md:w-[78%] mx-auto">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-sm pr-1 md:pr-0">{item.question}</h3>

                <button
                  className="cursor-pointer"
                  onClick={() => setShowUp(showUp === index ? null : index)}>
                  <div className="transition-transform duration-300">
                    {showUp === index ? (
                      <MoveUp className="scale-110 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="scale-100 transition-transform duration-300" />
                    )}
                  </div>
                </button>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  showUp === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}>
                <p className="text-gray-600 pt-2 text-xs md:pt-6 md:text-base">{item.answer}</p>
              </div>
            </div>
          ))}
        </main>
      </section>
    </>
   
  );
}
