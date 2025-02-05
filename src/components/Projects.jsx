import { useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projectData = [
    {
      id: 1,
      title: "House Decor Furniture Ecommerce",
      desc: "A furniture ecommerce made with React and Tailwind CSS.",
      categories: ["React", "Tailwind"],
      link: "https://github.com/shamimthedev/HouseDecor--react-furniture-project",
      liveLink: "https://house-decor-react-furniture-project.vercel.app/",
    },
    {
      id: 2,
      title: "Portfolio Website",
      desc: "A personal portfolio built using Next.js and Tailwind CSS.",
      categories: ["Next.js", "Tailwind"],
      link: "https://github.com/shamimthedev/portfolio-project",
      liveLink: "https://portfolio-project.vercel.app/",
    },
    {
      id: 3,
      title: "E-learning Platform",
      desc: "An online learning platform with authentication and payment integration.",
      categories: ["MERN Stack", "Redux"],
      link: "https://github.com/shamimthedev/e-learning",
      liveLink: "https://e-learning-app.vercel.app/",
    },
    {
      id: 4,
      title: "Food Ordering App",
      desc: "A food ordering system built with Firebase and Tailwind.",
      categories: ["React", "Firebase"],
      link: "https://github.com/shamimthedev/food-ordering-app",
      liveLink: "https://food-ordering-app.vercel.app/",
    },
  ];

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === "All" 
    ? projectData 
    : projectData.filter((project) =>
        project.categories.includes(selectedCategory)
      );

  return (
    <section
      id="projects"
      className="pt-[110px] pb-[100px]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative">
        <div className="text-center lg:text-left">
          <h2 className="font-semibold text-[28px] sm:text-[30px]">All Projects</h2>
          <p className="text-[15px] text-[#666] mt-2">
            Here are the projects I developed, prototyped, or participated in
          </p>
        </div>

        {/* Category buttons */}
        <div className="mt-8 mb-4 flex justify-center gap-[15px] flex-wrap">
          {["All", "React", "Tailwind", "Next.js", "MERN Stack"].map((category) => (
            <button
              key={category}
              className={`mb-4 font-semibold text-xs px-[12px] py-[6px] rounded-[4px] cursor-pointer ${
                selectedCategory === category
                  ? "bg-blueish text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => handleCategoryFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects container with horizontal display */}
        <div className="flex flex-wrap gap-[20px] justify-center">
          {filteredProjects.map((project) => (
            <div key={project.id} className="w-[320px]">
              <Project
                title={project.title}
                desc={project.desc}
                categories={project.categories}
                link={project.link}
                liveLink={project.liveLink}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
