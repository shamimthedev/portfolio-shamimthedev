import JSIcon from '/javascript.svg';
import BootstrapIcon from '/bootstrap-icon.svg';
import Html5Icon from '/html5-icon.svg';
import CSS3Icon from '/css3-icon.svg';
import GitIcon from '/git-icon.svg';
import CircleIcon from '/circle-icon.svg';
import CircleArrow from '/circle-arrow.svg';
import TailwindIcon from '/tailwind96.svg';
import NextIcon from '/next-js.svg';
import ReactIcon from '/react-icon.svg';
import jQueryIcon from '/jquery-icon.svg';
import FigmaIcon from '/figma.svg';
import SassIcon from '/sass.svg';

const Specialization = () => {
  return (
    <section id="specialization" className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-20 overflow-hidden">
      <div className="text-center lg:text-left">
        <h2 className="font-semibold text-[32px] sm:text-[30px] text-[#333]">Specializations</h2>
        <p className="text-[15px] text-[#666] mt-2">I specialize in building modern, responsive websites using a wide range of technologies.</p>
      </div>

      {/* Grid Icons */}
      <div className="max-w-[900px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center mt-10 w-full">
        {[ 
          { src: JSIcon, alt: "JavaScript" },
          { src: Html5Icon, alt: "HTML5" },
          { src: CSS3Icon, alt: "CSS3" },
          { src: GitIcon, alt: "Git" },
          { src: FigmaIcon, alt: "Figma" },
          { src: BootstrapIcon, alt: "Bootstrap" },
          { src: TailwindIcon, alt: "Tailwind CSS" },
          { src: SassIcon, alt: "Sass" },
          { src: jQueryIcon, alt: "jQuery" },
          { src: ReactIcon, alt: "React.js" },
          { src: NextIcon, alt: "Next.js" },
        ].map((icon, index) => (
          <div key={index} className="h-[110px] sm:h-[130px] w-[110px] sm:w-[130px] rounded-lg bg-[#828282] flex items-center justify-center shadow-md">
            <img src={icon.src} alt={icon.alt} className="w-[50%] sm:w-[60%]" />
          </div>
        ))}
      </div>

      {/* Speech Bubble */}
      <div className="relative mt-24 lg:mt-24 xl:mt-16 flex justify-end w-full">
        <div className="relative right-0 top-[-60px] max-w-[350px] sm:max-w-[400px]">
          <img src={CircleIcon} alt="Speech Bubble" className="w-full h-auto" />
          <p className="text-[12px] sm:text-sm absolute bottom-6 left-8 w-[80%] text-center italic text-[#333]">
            These are the technologies I currently use, but learning new things is a hobby for me.
          </p>
          <img src={CircleArrow} alt="Speech Bubble Arrow" className="absolute bottom-24 left-36 sm:left-44 md:left-32 lg:left-24 xl:left-[-50px]" />
        </div>
      </div>

    </section>
  );
};

export default Specialization;
