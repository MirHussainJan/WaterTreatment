
import { Check, MoveRight } from "lucide-react";
export default function MergeSection({title, dec, videoUrl, Heading, description, heading1,des1, heading2, des2, heading3, des3, heading4, des4}) {
  return (
    <>
      <section className="w-full bg-[#ECF2F6] py-10 md:py-30">
        <main className="max-w-[1140px] mx-auto flex flex-col lg:flex-row gap-10 px-2">
          <div className="flex justify-center flex-col gap-4">
            <p className="text-4xl md:text-5xl text-[#01008c] titles capitalize">{title}</p>
            <p>{dec}</p>
            <a href="" className="flex gap-2 hover:text-purple-700">Visit Youtube <MoveRight/></a>
          </div>

          <div className="mt-4 md:mt-0">
            <iframe
              // width="560"
              // height="315"
              src={videoUrl}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="rounded-xl shadow-2xl shadow-zinc-700 w-full h-[215px] lg:w-[560px] md:h-[315px]"
            ></iframe>
          </div>
        </main>
      </section>
      <section className="bg-[#ECF2F6] py-5 ">
        <main className=" max-w-[1140px] mx-auto flex flex-col xl:flex-row gap-15 pb-5 lg:px-4">
          <div className="xl:w-[50%]">
            <div className="w-[95%] mx-auto lg:w-full md:mx-auto h-80 xl:h-full bg-[url(/Water-Desalination-Plants-UAE.jpg)] bg-cover md:rounded-2xl"></div>
          </div>
          <div className="px-4 lg:px-0 xl:w-[50%]">
            <div>
              <button className="bg-white text-[#01008c] px-4 py-2 rounded-full">
                WHY CHOOSE US
              </button>
            </div>
            <div>
              <p className="text-4xl md:text-5xl  text-[#01008c] capitalize  titles">
                  {Heading}
              </p>
            </div>
            <div className="text-zinc-600 mt-5">
              {description}
            </div>
            <div className="flex gap-6 pt-5 ">
              
              <div className="flex flex-col gap-4 md:gap-17 xl:gap-10">
                <div className="flex gap-4 items-center">
                    <div className="p-3 relative rounded-full bg-[#01008c] text-white flex items-center justify-center font-black z-2">
                    <Check size={30} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-zinc-800 text-xl">
                      {heading1}
                    </p>
                    <p className="text-zinc-600">
                      {des1}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="p-3 relative rounded-full bg-[#01008c] text-white flex items-center justify-center font-black z-2">
                    <Check size={30} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-zinc-800 text-xl">
                      {heading2}
                    </p>
                    <p className="text-zinc-600">
                      {des2}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="p-3 relative rounded-full bg-[#01008c] text-white flex items-center justify-center font-black z-2">
                    <Check size={30} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-zinc-800 text-xl">
                      {heading3}
                    </p>
                    <p className="text-zinc-600">
                      {des3}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="p-3 relative rounded-full bg-[#01008c] text-white flex items-center justify-center font-black z-2">
                    <Check size={30} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold text-zinc-800 text-xl">
                      {heading4}
                    </p>
                    <p className="text-zinc-600">
                      {des4}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
