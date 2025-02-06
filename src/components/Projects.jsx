import { useState } from "react";
import Project from "./Project";
import Kosi from '/kosi-cover.png'
import HouseDecor from '/housedecor-cover.png'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projectData = [
    {
      id: 1,
      src: Kosi,
      title: "Kosi - Furniture Ecommerce",
      desc: "A furniture ecommerce made with React and Tailwind CSS.",
      categories: ["React", "Tailwind"],
      link: "https://github.com/shamimthedev/Kosi--react-ecommerce",
      liveLink: "https://kosi-react-ecommerce.vercel.app/",
    },
    {
      id: 2,
      src: HouseDecor,
      title: "Housedecor - A Furniture Store",
      desc: "Everything you need for your living room",
      categories: ["React", "Redux", "Tailwind"],
      link: "https://github.com/shamimthedev/HouseDecor--react-furniture-project",
      liveLink: "https://house-decor-react-furniture-project.vercel.app/",
    },
    {
      id: 3,
      src: Kosi,
      title: "E-learning Platform",
      desc: "An online learning platform with authentication and payment integration.",
      categories: ["MERN Stack", "Redux"],
      link: "https://github.com/shamimthedev/e-learning",
      liveLink: "https://e-learning-app.vercel.app/",
    },
    {
      id: 4,
      src: Kosi,
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
          <h2 className="font-semibold text-[32px] text-[#333] sm:text-[30px]">All Projects</h2>
          <p className="text-[15px] text-[#666] mt-2">
            Here are the projects I developed, prototyped, or participated in
          </p>
        </div>

        {/* Category buttons */}
        <div className="mt-8 mb-4 flex justify-center gap-[15px] flex-wrap">
          {["All", "React", "Tailwind", "Next.js", "MERN Stack"].map((category) => (
            <button
              key={category}
              className={`mb-4 font-semibold text-xs px-[12px] py-[6px] rounded-[4px] cursor-pointer ${selectedCategory === category
                ? "bg-blueish text-white" // For selected category
                : "bg-gray-200 text-[#444] hover:text-[#1A7AC3]" // For unselected category
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
                src={project.src}
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
