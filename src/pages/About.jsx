
import SubHero from '../components/ui/SubHero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Action from '../components/ui/Action'
import { Phone, Check } from 'lucide-react'
import HeroCarousel from '../components/HeroSection'

import Clients from '../components/ClientTestimonials'

const About = () => {
    return (
        <div className="min-h-screen bg-white relative">
            <Header />
            <SubHero title="About Us" decs="We believe every drop of water holds potential for excellence. For over two decades, we’ve turned this belief into reality, delivering pure water solutions that matter." img="https://waterengineering.ae/wp-content/uploads/2024/12/About-us-1st-Image-scaled.jpg" />
            <section className='w-full  py-2 bg-[#ECF2F6] pt-15'>
                <main className='max-w-[1140px] mx-auto py-4  flex gap-9 flex-col md:flex-row'>
                    <div className='w-full md:w-[60%] flex flex-col gap-4'>
                       <div><button className='bg-white px-4 py-2 rounded-full'>OUR STORY</button></div>
                       <div><p className='px-4 md:px-0 text-4xl md:text-[40px] text-[#01008c]  titles'>High Standard & Quality Services</p></div>
                       <div >
                            <div className='flex gap-2 px-2 md:px-0'>
                                    <div className='flex items-center text-7xl font-inter text-[#01008c]'><p>S</p></div>
                                    <div className=''><p className='text-zinc-700'>ince 1999, we've been more than just a water treatment company - we're problem solvers, innovators, and partners in progress. Through 350+ installations across 18 countries, we've consistently delivered solutions that</p></div>
                            </div>
                            <div>
                                    <p className='text-zinc-700 px-4 md:px-0'>matter, earning the trust of over 5,000 customers worldwide. Based in the UAE, our expertise spans from simple filtration systems to complex industrial solutions. We bring together global technology standards with local expertise, ensuring every drop of water meets the highest quality benchmarks. It's not just about treating water - it's about building lasting partnerships and creating sustainable solutions that stand the test of time.</p>
                            </div>
                       </div>
                       <div className='flex gap-6 items-start flex-col md:flex-row px-4 md:px-0'>
                            <button className='bg-[#01008c] px-6 py-3 rounded-full text-white '>Read More</button> 
                            <div className='flex gap-6 items-center'>
                                <button className='bg-white px-4 py-2 rounded-full flex gap-2'><div className='flex items-center gap-2 py-2'><Phone size={18} fill='black' /></div></button>
                                <p>(0) 123 456 789</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[40%]  bg-white'>
                        <img src="https://waterengineering.ae/wp-content/uploads/2024/12/High-Standard-Quality-Services-01-1024x1024.jpg" alt="" />
                    </div>
                </main>
            </section>
            <section className='w-full  py-2 bg-[#ECF2F6] '>
                <main className='max-w-[1140px] mx-auto py-4 rounded-2xl' >
                    <HeroCarousel />
                </main>
            </section>
            <section className='bg-[#ECF2F6] py-5'>
                <main className=' max-w-[1140px] mx-auto flex gap-4 pb-5'>
                    <div className='w-[50%]'>
                        <div>
                            <button className='bg-white text-[#01008c] px-4 py-2 rounded-full'>OUR PROCESS</button>
                        </div>
                        <div><p className='px-4 md:px-0 text-4xl md:text-[40px] text-[#01008c]  titles'>Quality Water Solutions Guaranteed</p></div>
                        <div className='text-zinc-600'>Pure water solutions, backed by our quality guarantee. We deliver excellence you can count on, every single time.</div>
                        <div className='flex gap-6 pt-5'>
                            <div className='flex gap-20 flex-col relative py-2'>
                                <div className='w-12 relative h-12 rounded-full bg-[#01008c] text-white flex items-center justify-center font-black z-2'><Check size={30} /></div>
                                <div className='w-12 relative h-12 rounded-full bg-[#01008c] text-white flex items-center justify-center font-black z-2'><Check size={30} /></div>
                                <div className='w-12 relative h-12 rounded-full bg-[#01008c] text-white flex items-center justify-center font-black z-2'><Check size={30} /></div>
                                <div className='bg-[#01008c] w-[2px] left-1/2 h-[90%] absolute z-[1]'></div>
                            </div>
                            <div className='flex flex-col gap-13'>
                                <div>
                                    <p className='font-bold text-[#01008c] text-xl'>Our Promise</p>
                                    <p className='text-zinc-600'>Delivering excellence in every drop. Quality water solutions you can trust.</p>
                                </div>
                                <div>
                                    <p className='font-bold text-[#01008c] text-xl'>Our Mission</p>
                                    <p className='text-zinc-600'>To provide innovative water solutions that transform industries. Making pure water accessible to all.</p>
                                </div>
                                <div>
                                    <p className='font-bold text-[#01008c] text-xl'>Our Vision</p>
                                    <p className='text-zinc-600'>To lead global water treatment innovation. Creating sustainable solutions for a better tomorrow.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <div className='w-140 h-130 bg-[url(https://waterengineering.ae/wp-content/uploads/2024/09/Water-Desalination-Plants-UAE.jpg)] bg-cover rounded-2xl'>
                            
                        </div>
                    </div>
                </main>
            </section>
            <Clients />
            <Footer />

            <Action />
        </div>
    )
}

export default About