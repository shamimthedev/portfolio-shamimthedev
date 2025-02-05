import ProjectDemo from '/project-demo-img.png'
import GithubIcon from '/github-icon.svg'
import LinkIcon from '/external-link-icon.svg'
import { Link } from 'react-router'

const Project = ({ title, desc, category, link, liveLink }) => {
  return (
    <div className="w-[320px] h-[400px] rounded-t-[7px] overflow-hidden shadow-3xl flex flex-col bg-white">
      <img src={ProjectDemo} alt="" className="w-full h-[180px] object-cover" />

      <div className="flex flex-col flex-1 pt-7 pl-[26px] pb-[22px] pr-[22px]">
        <h3 className="mb-4 font-semibold text-[20px]">{title}</h3>
        <p className="text-[15px] flex-1">{desc}</p>

        <div className="project-btn mt-2 flex gap-[10px] items-center">
          <button className="font-semibold text-xs bg-blueish text-white px-[6px] py-1 rounded-[4px]">
            {category}
          </button>
          <button className="font-semibold text-xs bg-blueish text-white px-[6px] py-1 rounded-[4px]">
            React
          </button>
        </div>

        <div className="project-icons mt-auto flex gap-[25px] justify-end items-center">
          <Link to={link}>
            <img src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link to={liveLink}>
            <img src={LinkIcon} alt="Live Demo Icon" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project
