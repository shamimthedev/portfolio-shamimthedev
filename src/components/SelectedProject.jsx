import { useState } from "react";
import Project from "./Project";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Kosi from '/kosi-cover.png'
import HouseDecor from '/housedecor-cover.png'
import ShoppingCart from '/cart-context-api-cover.png'

const SelectedProjects = () => {

    const selectedProject = [
        {
            id: 1,
            src: Kosi,
            title: "Kosi - Furniture Ecommerce",
            desc: "A furniture ecommerce made with React and Tailwind CSS.",
            categories: ["React", "Redux", "Tailwind"],
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
            src: ShoppingCart,
            title: "Shopping Cart with ContextAPI",
            desc: "Add to Cart functionality with ContextAPI",
            categories: ["React", "Context API", 'Tailwind'],
            link: "https://github.com/shamimthedev/shopping-cart-with-context-api",
            liveLink: "https://github.com/shamimthedev/shopping-cart-with-context-api",
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
                    <h2 className="font-semibold text-[#333] text-[32px] sm:text-[30px]">Selected Projects</h2>
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
                                        src={project.src}
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
