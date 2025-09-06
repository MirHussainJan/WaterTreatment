import { Link } from 'react-router-dom'

const SubHero = ({title, desc, img}) => {
  return (
    <div className='relative flex flex-col py-24 items-center justify-between gap-4' style={{backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      {/* Black blurred overlay */}
      <div
        className="absolute inset-0 bg-black/60 z-0"
      ></div>
      <div className="relative z-10 flex flex-col items-center gap-4 w-full">
        <h1 className="text-2xl md:text-5xl text-white font-bold text-center titles">{title}</h1>
        <p className="text-sm md:text-base text-white text-center max-w-3xl">{desc}</p>
        <Link to="/" className="px-5 py-1 bg-white text-sm rounded-full">Home</Link>
      </div>
    </div>
  )
}

export default SubHero