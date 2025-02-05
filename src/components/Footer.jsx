import { useState, useEffect } from "react";
import MailIcon from "/mail.svg";
import Github from "/github-icon.svg";
import LinkedIn from "/linkedin-icon.svg";
import BackToTop from "/back-to-top.svg";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="w-full py-[120px] bg-white relative">
      <div className="flex flex-col items-center justify-center max-w-[1320px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Contact Information */}
        <div className="flex flex-col gap-[15px]">
          {/* Mail */}
          <div className="flex gap-[15px] items-center">
            <a
              href="mailto:shamimthedev@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-[15px] items-center group"
            >
              <img
                src={MailIcon}
                alt="Mail"
                className="w-[27px] h-[27px] cursor-pointer"
              />
              <p className="text-[15px] relative after:block after:h-[2px] after:w-full after:bg-[#2271EB] after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                shamimthedev@gmail.com
              </p>
            </a>
          </div>

          {/* GitHub */}
          <div className="flex gap-[15px] items-center">
            <a
              href="https://github.com/shamimthedev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-[15px] items-center group"
            >
              <img
                src={Github}
                alt="GitHub"
                className="w-[27px] h-[27px] cursor-pointer"
              />
              <p className="text-[15px] relative after:block after:h-[2px] after:w-full after:bg-[#2271EB] after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                github.com/shamimthedev
              </p>
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex gap-[15px] items-center">
            <a
              href="https://www.linkedin.com/in/shamimthedev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-[15px] items-center group"
            >
              <img
                src={LinkedIn}
                alt="LinkedIn"
                className="w-[27px] h-[27px] cursor-pointer"
              />
              <p className="text-[15px] relative after:block after:h-[2px] after:w-full after:bg-[#2271EB] after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                www.linkedin.com/in/shamimthedev
              </p>
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <div
          onClick={scrollToTop}
          className={`fixed bottom-11 right-[50px] bg-[#9F9F9F] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#2271EB] hover:scale-110 ${
            showButton ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <img src={BackToTop} alt="Back to top" className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
