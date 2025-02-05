import { useState } from "react";
import Project from "./Project";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const SelectedProjects = () => {

    const selectedProject = [
        {
            id: 1,
            title: "Furniture E-commerce",
            desc: "React & Tailwind furniture site.",
            categories: ["React", "Tailwind"],
            link: "https://github.com/shamimthedev/HouseDecor--react-furniture-project",
            liveLink: "https://house-decor-react-furniture-project.vercel.app/",
        },
        {
            id: 2,
            title: "Portfolio Website",
            desc: "Personal website built with Next.js.",
            categories: ["Next.js", "React"],
            link: "https://github.com/shamimthedev/portfolio-project",
            liveLink: "https://portfolio-project.vercel.app/",
        },
        {
            id: 3,
            title: "E-learning Platform",
            desc: "Learning platform with MERN stack.",
            categories: ["MERN Stack", "Redux"],
            link: "https://github.com/shamimthedev/e-learning",
            liveLink: "https://e-learning-app.vercel.app/",
        },
        {
            id: 4,
            title: "Food Ordering App",
            desc: "Food delivery system with Firebase.",
            categories: ["React", "Firebase"],
            link: "https://github.com/shamimthedev/food-ordering-app",
            liveLink: "https://food-ordering-app.vercel.app/",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section
            id="projects"
            className="pt-[110px] pb-[100px] bg-cover bg-center"
            style={{ backgroundImage: "url('/projects-background.png')" }}
        >
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative">
                <div className="text-center lg:text-left">
                    <h2 className="font-semibold text-[28px] sm:text-[30px]">Selected Projects</h2>
                    <p className="text-[15px] text-[#666] mt-2">
                        These are some of my most important and featured projects.
                    </p>
                </div>

                {/* Slider with Filtered Projects */}
                <div className="relative mt-16 px-8"> {/* Added horizontal padding */}
                    <Slider {...settings} className="w-full">
                        {selectedProject.map((project) => (
                            <div key={project.id} className="px-6"> {/* Increased horizontal padding */}
                                <div className="h-full flex items-center justify-center">
                                    <Project
                                        title={project.title}
                                        desc={project.desc}
                                        categories={project.categories}
                                        link={project.link}
                                        liveLink={project.liveLink}
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </section>
    );
};

export default SelectedProjects;
