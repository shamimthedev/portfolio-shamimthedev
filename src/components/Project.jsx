import ProjectDemo from '/project-demo-img.png'
import GithubIcon from '/github-icon.svg'
import LinkIcon from '/external-link-icon.svg'

const Project = () => {
  return (
    <div className="w-[320px] rounded-t-[7px] overflow-hidden shadow-3xl">
        <img src={ProjectDemo} alt="" className='w-full'/>
        <div className="project-details pt-7 pl-[26px] pb-[22px] pr-[22px] bg-white">
          <h3 className='mb-4 font-semibold text-[20px]'>Project Title</h3>
          <p className='mb-[17px] text-[15px]'>here are the projects I developed, prototyped or participated in</p>
          <div className="project-btn mb-[30px] flex gap-[10px] items-center ">
            <button className='font-semibold text-xs bg-blueish text-white px-[6px] py-1 rounded-[4px]'>JavaScript</button>
            <button className='font-semibold text-xs bg-blueish text-white px-[6px] py-1 rounded-[4px]'>React</button>
          </div>
          <div className="project-icons flex gap-[25px] justify-end items-center">
            <img src={GithubIcon} alt="Github Icon" />
            <img src={LinkIcon} alt="Link Icon" />
          </div>
        </div>
      </div>
  )
}

export default Project