import HeroGraphic from '/hero-graphics.svg';
import ProfilePic from '/md-shamim-hossain.png';
import Github from '/github-icon.svg';
import LinkedIn from '/linkedin-icon.svg';

const Hero = () => {
  return (
    <section id="hero_section" className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-20">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center text-center lg:text-left">

        {/* Right Side - Hero Graphic (Appears First on Small Screens) */}
        <div className="w-full lg:w-[45%] flex justify-center lg:order-2">
          <img src={HeroGraphic} alt="Hero Graphic Image" className="w-[90%] max-w-[500px] sm:max-w-[400px]" />
        </div>

        {/* Left Side - Profile Info */}
        <div className="flex flex-col lg:flex-row lg:order-1 items-center lg:items-start gap-6 w-full lg:w-[45%] mt-10 lg:mt-0">
          {/* Profile Picture */}
          <div className="w-[90px] sm:w-[110px] h-[90px] sm:h-[110px] rounded-full bg-[#dcdcdc] overflow-hidden">
            <img src={ProfilePic} alt="Md. Shamim Hossain" className="w-full h-full object-cover" />
          </div>
          
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-[16px] sm:text-[18px] text-[#666666]">Hi, my name is</p>
            <h1 className="text-[22px] sm:text-[26px] font-semibold">Md. Shamim Hossain</h1>
            <div className="w-[200px] sm:w-[290px] h-[1px] bg-[#E5E5E5] my-3"></div>

            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="Github icon" className="w-[22px] sm:w-[24px] hover:opacity-80 transition-opacity" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="LinkedIn icon" className="w-[22px] sm:w-[24px] hover:opacity-80 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
