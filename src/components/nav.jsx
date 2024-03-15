import { useState } from "react";

const Nav = () => {
  const open = "./images/icon-hamburger.svg";
  const close = "./images/icon-close.svg";
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="relative p-10 bg-white md:py-5 md:px-0">
      <nav className="flex items-center justify-between w-11/12 mx-auto">
        <span>
          <img className="w-[112px] h-[18px]" src="./images/logo.svg" alt="logo" />
        </span>
        <div className="md:w-3/4 lg:w-1/2">
          <span className="block md:hidden">
            <img
              className="w-[32px] h-[32px]"
              onClick={handleClick}
              src={isOpen ? close : open}
              alt="hamburger"
            />
          </span>
          <ul
            className={` ${
              isOpen ? "translate-y-0" : "translate-y-[-120%] md:translate-y-0"
            }`}
          >
            <li>HOW WE WORK</li>
            <li>BLOG</li>
            <li>ACCOUNT</li>
            <li className="w-3/4  text-center btn md:!border-DarkViolet md:hover:bg-VeryDarkViolet md:hover:!text-VeryLightGray">
              VIEW PLANS
            </li>
            <li className="block md:hidden">
              <img
                className="absolute bottom-0 left-0"
                src="./images/bg-pattern-mobile-nav.svg"
                alt="nav"
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
