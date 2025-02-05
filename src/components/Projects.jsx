import Project from "./Project";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const Projects = () => {
  var settings = {
    dots: false, // Removed dots
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides by default
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablets & small screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projectData = [
    {
      id: 1,
      title: "House Decor Furniture Ecommerce",
      desc: "A furniture ecommerce made with React and Tailwind CSS.",
      category: "JavaScript, React, Tailwind",
      link: "https://github.com/shamimthedev/HouseDecor--react-furniture-project",
      liveLink: "https://house-decor-react-furniture-project.vercel.app/",
    },
    {
      id: 2,
      title: "Portfolio Website",
      desc: "A personal portfolio built using Next.js and Tailwind CSS.",
      category: "Next.js, Tailwind, React",
      link: "https://github.com/shamimthedev/portfolio-project",
      liveLink: "https://portfolio-project.vercel.app/",
    },
    {
      id: 3,
      title: "E-learning Platform",
      desc: "An online learning platform with authentication and payment integration.",
      category: "MERN Stack, Redux, Tailwind",
      link: "https://github.com/shamimthedev/e-learning",
      liveLink: "https://e-learning-app.vercel.app/",
    },
    {
      id: 4,
      title: "Food Ordering App",
      desc: "A food ordering system built with Firebase and Tailwind.",
      category: "React, Firebase, Tailwind",
      link: "https://github.com/shamimthedev/food-ordering-app",
      liveLink: "https://food-ordering-app.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-[110px] bg-cover bg-center"
      style={{ backgroundImage: "url('/projects-background.png')" }}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative">
        <div className="text-center lg:text-left">
          <h2 className="font-semibold text-[28px] sm:text-[30px]">Projects</h2>
          <p className="text-[15px] text-[#666] mt-2">
            Here are the projects I developed, prototyped, or participated in
          </p>
        </div>

        {/* Arrows Touching Container & Slider Centered */}
        <div className="relative mt-16 flex items-center">
          {/* Left Arrow */}
          <div className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2">
            <PrevArrow />
          </div>

          {/* Slider Container with padding */}
          <div className="w-full mx-auto px-8">
            <Slider {...settings} className="w-full">
              {projectData.map((project) => (
                <div key={project.id} className="px-3">
                  <div className="h-full flex">
                    <Project
                      title={project.title}
                      desc={project.desc}
                      category={project.category}
                      link={project.link}
                      liveLink={project.liveLink}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Right Arrow */}
          <div className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2">
            <NextArrow />
          </div>
        </div>
      </div>
    </section>

  );
};

export default Projects;
