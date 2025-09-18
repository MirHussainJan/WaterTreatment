import { Section } from "lucide-react";

export default function HeroSection({ title, description, imgUrl }) {
  return (
    <>
      <style>
        {`
          #btn {
            transition: transform 0.3s ease-in-out;
          }

          #btn:hover {
            transform: translateY(-10px);
            cursor: pointer;
          }
        `}
      </style>

      <section className="w-full  bg-red-500 bg-cover bg-center" style={{backgroundImage: `url(${imgUrl})`,}}>
        <section className="w-full h-full bg-black/70 py-10 md:py-26">
          <main className="max-w-[1140px] mx-auto px-5">
          <h1 className="text-3xl md:text-6xl font-bold text-white text-center titles">
            {title}
          </h1>
          <p className="text-white text-center mt-4 mx-auto px-0  md:px-25 text-sm md:text-base">
            {description}
          </p>
          <div className="flex justify-center">
            <button id="btn" className="mt-6 px-7 py-4 bg-black bg-linear-to-b from-[#01008C] to-[#09529fd9] text-sm text-white">
              Read Details
            </button>
          </div>
        </main>
        </section>
      </section>
    </>
  );
}

