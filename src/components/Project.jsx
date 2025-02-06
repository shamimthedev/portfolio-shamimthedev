import ProjectDemo from '/project-demo-img.png'
import GithubIcon from '/github-icon.svg'
import LinkIcon from '/external-link-icon.svg'
import { Link } from 'react-router-dom'

const Project = ({ title, src, desc, categories, link, liveLink }) => {
  return (
    <div className="w-[320px] h-[440px] rounded-t-[7px] overflow-hidden shadow-3xl flex flex-col bg-white">
      <img src={src} alt="" className="w-full h-[180px] object-fill" />

      <div className="flex flex-col flex-1 pt-7 pl-[26px] pb-[22px] pr-[22px]">
        <h3 className="mb-4 font-semibold text-[20px] text-[#333]">{title}</h3>
        <p className="text-[15px] flex-1 text-[#666]">{desc}</p>

        <div className="project-btn mt-2 flex gap-[10px] items-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className="font-semibold text-xs bg-blueish text-white px-[6px] py-1 rounded-[4px] hover:bg-[#1A7AC3]"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-icons mt-[30px] flex gap-[25px] justify-end items-center">
          <Link to={link} className='text-[#666] hover:text-[#2290E2]'>
            <img src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link to={liveLink} className='text-[#666] hover:text-[#2290E2]'>
            <img src={LinkIcon} alt="Live Demo Icon" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project
