
export default function SecondSection({ title, desc}) {
  return (
    <>
    <section className='w-full py-8  md:py-16 bg-[#ECF2F6] md:px-4 xl:px-0'>
        <main className="max-w-[1140px] mx-auto flex flex-col lg:flex-row  gap-4">
            <div className='w-full lg:w-[55%] py-5'>
                  <p className='text-2xl md:text-4xl px-4 md:px-0 font-bold text-[#01008c] mb-6 titles'>{title}</p>
                  <p className='text-base text-gray-600 px-4 md:px-0'>{desc}</p>
            </div>
            <div className='px-4 md:px-0 lg:w-[45%] h-100'>
                <img className='w-full h-full object-cover' src="/abstract-2-819x1024.jpg" alt="" />
            </div>

        </main>
    </section>
    </>
  )
}

