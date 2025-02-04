import HeroGraphic from '/hero-graphics.svg'
import ProfilePic from '/md-shamim-hossain.png'

const Hero = () => {
  return (
    <section id="hero_section" className='max-w-6xl mx-auto mt-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
      <div className="flex justify-between items-center">
        <div className="left">
          <img src={ProfilePic} alt="Md. Shamim Hossain" className='w-[115px] h-[115px] rounded-full bg-[#A9C3F3]'/>
        </div>
        <div className="right">
          <img src={HeroGraphic} alt="Hero Graphic Image" />
        </div>
      </div>
    </section>
  )
}

export default Hero