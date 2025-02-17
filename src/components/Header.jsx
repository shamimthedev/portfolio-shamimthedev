import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // Detect Scroll to Add Background and Shadow
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
            ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-4"}`}>

            {/* Container with max-width 1320px */}
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
                {/* Logo */}
                <Link to="/">
                    <h3 className="w-14 h-14 rounded-[6px] font-inter bg-blueish text-white text-[36px] flex items-center justify-center">
                        S
                    </h3>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-12">
                    <ul className="flex gap-8 font-medium text-[15px] lowercase">
                        {["About", "Specialization", "Projects", "Contact"].map((section) => (
                            <li key={section} className="relative">
                                <HashLink
                                    to={`#${section}`}
                                    className={`relative capitalize transition-all duration-300 
                                        after:absolute after:bottom-[-3px] after:left-0 after:w-full after:h-[2px] 
                                        after:bg-blueish after:content-[''] after:scale-x-0 
                                        after:origin-left hover:after:scale-x-100 
                                        after:transition-transform after:duration-300
                                        ${location.hash === `#${section}` 
                                            ? "text-blueish after:scale-x-100"
                                            : "text-[#333]" // Changed text color to match other sections
                                        }`}
                                >
                                    {section.replace("-", " ")}
                                </HashLink>
                            </li>
                        ))}
                    </ul>
                    <button className="px-4 py-2 text-white font-medium text-[15px] bg-[#2290E2] rounded-[6px] cursor-pointer transition-all duration-300 hover:bg-[#1A7AC3] hover:scale-105">
                        Download CV
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="md:hidden flex flex-col items-center gap-4 bg-white shadow-md py-4">
                    {["About", "Specialization", "Projects", "Contact"].map((section) => (
                        <HashLink
                            key={section}
                            to={`#${section}`}
                            className={`text-lg font-medium transition-all duration-300 ${location.hash === `#${section}` ? "text-[#2271EB]" : "text-[#333]"} `}
                            onClick={() => setMenuOpen(false)}
                        >
                            {section.replace("-", " ")}
                        </HashLink>
                    ))}
                    <button className="px-4 py-2 text-white font-medium text-[15px] bg-[#2290E2] rounded-[6px] cursor-pointer transition-all duration-300 hover:bg-[#1A7AC3] hover:scale-105">
                        Download CV
                    </button>
                </nav>
            )}
        </header>
    );
};

export default Header;

