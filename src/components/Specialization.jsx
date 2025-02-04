import JSIcon from '/js-icon.svg'
import BootstrapIcon from '/bootstrap-icon.svg'
import Html5Icon from '/html5-icon.svg'
import CSS3Icon from '/css3-icon.svg'
import GitIcon from '/git-icon.svg'
import CircleIcon from '/circle-icon.svg'
import TailwindIcon from '/tailwind96.svg'
import NextIcon from '/next-js.svg'
import ReactIcon from '/react-icon.svg'
import jQueryIcon from '/jquery-icon.svg'
import FigmaIcon from '/figma.svg'
import SassIcon from '/sass.svg'

const Specialization = () => {
  return (
    <section id="specialization" className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <h2 className="font-semibold text-[30px] text-center lg:text-left">Specializations</h2>
      <p className="max-w-[900px] mt-[15px] text-[15px] text-justify">Technologies I'm familiar with </p>

      <div className="icons-wrapper relative">
        <div className="web-icons flex flex-wrap gap-[29px]">
          <div className="JS h-[150px] w-[150px] rounded-[7px] overflow-hidden">
            <img src={JSIcon} alt="JSIcon" />
          </div>
          <div className="Html5 h-[150px] w-[150px] rounded-[7px] bg-[#c4c4c4] flex items-center justify-center">
            <img src={Html5Icon} alt="Html5Icon" />
          </div>
          <div className="CSS3 h-[150px] w-[150px] rounded-[7px] bg-[#828282] flex items-center justify-center">
            <img src={CSS3Icon} alt="CSS3Icon" />
          </div>
          <div className="Git h-[150px] w-[150px] rounded-[7px] bg-[#9E9E9E] flex items-center justify-center">
            <img src={GitIcon} alt="GitIcon" />
          </div>
          <div className="bootstrap h-[150px] w-[150px] rounded-[7px] bg-[#c4c4c4] flex items-center justify-center">
            <img src={BootstrapIcon} alt="BootstrapIcon" />
          </div>
          <div className="Tailwind h-[150px] w-[150px] rounded-[7px] bg-[#c4c4c4] flex items-center justify-center">
            <img src={TailwindIcon} alt="TailwindIcon" />
          </div>
          <div className="NextIcon h-[150px] w-[150px] rounded-[7px] bg-[#c4c4c4] flex items-center justify-center">
            <img src={NextIcon} alt="NextIcon" />
          </div>
          <div className="NextIcon h-[150px] w-[150px] rounded-[7px] bg-[#c4c4c4] flex items-center justify-center">
            <img src={ReactIcon} alt="NextIcon" />
          </div>
          <div className="jQueryIcon h-[150px] w-[150px] rounded-[7px] bg-[#c4c4c4] flex items-center justify-center">
            <img src={jQueryIcon} alt="jQueryIcon" />
          </div>
          <div className="FigmaIcon h-[150px] w-[150px] rounded-[7px] bg-[#c4c4c4] flex items-center justify-center">
            <img src={FigmaIcon} alt="FigmaIcon" />
          </div>
          <div className="SassIcon h-[150px] w-[150px] rounded-[7px] bg-[#c4c4c4] flex items-center justify-center">
            <img src={SassIcon} alt="SassIcon" />
          </div>
        </div>

        <div className="right-graphics absolute bottom-[-80px] right-0">
          <div className="relative">
            <img src={CircleIcon} alt="" />
            <p className='font-monkey text-[15px] w-[322px] absolute bottom-5 left-20'>these are the technologies i currently use, but learning new things is a hobby for me.</p>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Specialization