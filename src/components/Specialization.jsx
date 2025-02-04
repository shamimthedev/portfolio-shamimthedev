import JSIcon from '/js-icon.svg'
import BootstrapIcon from '/bootstrap-icon.svg'
import Html5Icon from '/html5-icon.svg'
import CSS3Icon from '/css3-icon.svg'
import GitIcon from '/git-icon.svg'
import TailwindIcon from '/tailwind-css.svg'

const Specialization = () => {
  return (
    <section id="specialization" className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <h2 className="font-semibold text-[30px] text-center lg:text-left">Specializations</h2>
      <p className="max-w-[900px] mt-[15px] text-[15px] text-justify">Technologies I'm familiar with </p>

      <div className="web-icons flex justify-between flex-wrap">
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
        <div className="tailwind h-[150px] w-[150px] rounded-[7px] bg-[#c4c4c4] flex items-center justify-center">
          <img src={TailwindIcon} alt="TailwindIcon" />
        </div>
      </div>
    </section >
  )
}

export default Specialization