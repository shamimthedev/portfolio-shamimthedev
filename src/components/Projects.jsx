import Project from "./Project"


const Projects = () => {
  return (
    <section id="projects" className="py-[110px]" style={{ backgroundImage: "url('/projects-background.png')" }}>
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ">
        <div className="text-center lg:text-left">
          <h2 className="font-semibold text-[28px] sm:text-[30px]">Projects</h2>
          <p className="text-[15px] text-[#666] mt-2">Here are the projects I developed, prototyped or participated in</p>
        </div>

        <div className="mt-16 flex justify-between gap-5 flex-wrap">
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </section>
  )
}

export default Projects