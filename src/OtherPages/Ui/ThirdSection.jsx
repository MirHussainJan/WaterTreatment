import React from 'react'

export default function ThirdSection({ text1, dec1, dec2, dec3 }) {
    return (
        <>
            <section className='w-full py-16 bg-white'>
                <main className="mx-4 max-w-[1140px] md:mx-auto flex flex-col gap-4 px-0 md:px-4 xl:px-0">
                    <div className='flex gap-2 text-2xl md:text-3xl font-bold text-[#01008c] titles'>
                        <p className=' border-zinc-400'>{text1}</p>
                    </div>
                        <hr className='border-zinc-400 border-1 w-25'/>
                    <ol className='list-decimal flex flex-col gap-2 pl-4 md:pl-10 text-sm md:text-base'>
                        <li className='text-justify'>{dec1}</li>
                        <li className='text-justify'>{dec2}</li>
                        <li className='text-justify'>{dec3}</li>
                    </ol>
                </main>
            </section>

        </>
    )
}
