import React from "react";
import logo from "../assets/logo-slim-cropped.png.webp";
import flag from "../assets/us-flag-icon-20.png.webp";
import Drawer from "./Drawer";
import HamburgerMenu from "./Hamburger";
import Dropdown from "./DropDown";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState({ 2: false, 8: false });
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const links: (string | any)[] = [
    "About Us",
    "Our Process",
    "Core Services",
    "Porfolio",
    "Industry",
    "Blogs",
    "Careers",
    "Contact Us",
    flag,
  ];

  const toggleDropdown = (index: number, state: boolean) => {
    setIsOpen((prev) => ({ ...prev, [index]: state }));
  };

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };
  return (
    <div className="flex justify-center lg2:justify-normal lg:block">
      <div className=" px-[5%] ">
        <div className="h-[80px] flex  items-center lg:justify-between ">
          <div className="w-[180px] lg:w-full">
            <img src={logo} alt="logo" width={130} className="lg:w-[15%] md:w-[130px]" />
          </div>
          <div className="lg:flex hidden items-center">
            <HamburgerMenu onClick={toggleDrawer} />
          </div>
          <div className="lg:hidden max-w-[1240px]   flex justify-end items-center p-[10px] lg2:px-0  ">
            {links.map((link, index) => (
              <span
                key={index}
                className=" relative pl-[30px]  "
                onMouseEnter={() => toggleDropdown(index, true)}
                onMouseLeave={() => toggleDropdown(index, false)}
              >
                {index === 8 ? (
                  <img
                    src={flag}
                    alt="flag "
                    className="w-8 h-8 inline-block "
                  />
                ) : (
                  <a
                    href="#"
                    className="font-cairo font-medium capitalize text-[16px] text-[#484848] hover:text-[#4696D1]  transition-colors duration-200 ease-in"
                  >
                    {link}
                  </a>
                )}
                {(index === 2 || index === 8) && (
                  <>
                    <a
                      href=""
                      className="inline-block align-middle text-[#222D39]"
                    >
                      <svg
                        className="w-5 h-5 transition-transform duration-500 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </a>
                    <Dropdown
                    isOpen={isOpen[index]}
                    items={["Dummy Item 1", "Dummy Item 2", "Dummy Item 3"]}
                    onMouseEnter={() => toggleDropdown(index, true)}
                    onMouseLeave={() => toggleDropdown(index, false)}
                  />
                  </>
                )}
              </span>
            ))}
          </div>
          <Drawer
            isOpen={isDrawerOpen}
            onClose={toggleDrawer}
            toggleDropdown={toggleDropdown}
            isOpenDropdown={isOpen}
            links={links}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
