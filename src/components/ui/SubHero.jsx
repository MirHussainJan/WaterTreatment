
export default function SubHero({ title, decs, img }) {
    return (
        <section className="w-full py-18 bg-top" style={{ backgroundImage: `url(${img})` }}>        
            <main className="max-w-[1140px] mx-auto px-4 flex flex-col gap-5 ">
                <div className="text-6xl font-black text-center text-white titles">{title}</div>
                <div className="w-full text-center px-35 text-white">{decs}</div>
                <div className="flex justify-center">
                    <button className="bg-white px-6 py-2 rounded-full font-bold flex">Home</button>
                </div>
            </main>
        </section>
    )
}
