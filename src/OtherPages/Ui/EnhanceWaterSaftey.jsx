import React from 'react'
import { Link } from 'react-router-dom'

export default function EnhanceWaterSafety({title, dec, point1, point2, point3, point4}) {
  return (
    <section className='w-full py-16 bg-white'>
        <main className='mx-3 max-w-[1140px] md:mx-4 xl:mx-auto bg-[#ECF2F6] rounded-2xl flex flex-col md:flex-row gap-10'>
            <div className='h-80 md:h-auto w-full md:w-[35%]  bg-[url("https://waterengineering.ae/wp-content/uploads/2024/10/abstract-2-819x1024.jpg")] bg-cover bg-center rounded-t-2xl md:rounded-t-none md:rounded-l-2xl'>

            </div>
            <div className='md:w-[60%] px-4 md:px-4 md:pl-16 py-2 md:py-40 '>
                <p className='text-2xl md:text-4xl font-bold mb-2 md:mb-4 titles text-zinc-700'>{title}</p>
                <p className='md:mb-4 text-zinc-500 text-sm md:text-base'>{dec}</p>
                <ol className='list-disc space-y-2 px-5 md:px-8 xl:px-10 flex flex-col gap-2 mt-2 md:mt-10 text-sm md:text-base'>
                    <li>{point1}</li>
                    <li>{point2}</li>
                    <li>{point3}</li>
                    <li>{point4}</li>
                </ol>
                <button onClick={() => window.scrollTo(0, 0)} className='mt-8 mb-4 bg-[linear-gradient(180deg,#01008c_0%,#063977_100%)] cursor-pointer py-4 px-10 rounded-sm text-sm text-white'><Link to="/contact">Get In Touch</Link></button>
            </div>
        </main>
    </section>
  )
}
