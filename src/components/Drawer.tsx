import React from "react";
import flag from "../assets/us-flag-icon-20.png.webp";
import logo from "../assets/logo-slim-cropped.png.webp";
import { IoMdClose } from "react-icons/io";
import Dropdown from "./DropDown"; // Import the Dropdown component

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  toggleDropdown: (index: number, state: boolean) => void;
  isOpenDropdown: { [key: number]: boolean };
  links: (string | any)[];
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  toggleDropdown,
  isOpenDropdown,
  links,
}) => {
  return (
    <div
      className={`z-20 p-4 fixed top-0 left-0 w-[350px] ssms:w-[280px] h-full bg-[#f7f7f7] border-r border-gray-200 shadow-lg transition-transform transform duration-500 ease-in lg:flex hidden ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <div className="flex flex-col w-full">
        <div className="relative w-full flex justify-between items-center py-[10px]">
          <div>
            <img src={logo} alt="logo" width={130} />
          </div>
          <div>
            <button
              onClick={onClose}
              className="p-2 border  text-[rgba(0,0,0,0.5)]"
            >
              <IoMdClose size={20} />
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          {links.map((link, index) => (
            <span
              key={index}
              className="relative py-2"
              onMouseEnter={() => toggleDropdown(index, true)}
              onMouseLeave={() => toggleDropdown(index, false)}
            >
              {index === 8 ? (
                <img src={flag} alt="flag" className="w-8 h-8 inline-block" />
              ) : (
                <a
                  href="#"
                  className="font-cairo font-medium capitalize text-[16px] text-[#222D39] hover:text-[#4696D1] transition-colors duration-200 ease-in"
                >
                  {link}
                </a>
              )}
              {(index === 2 || index === 8) && (
                <>
                  <div
                    className="inline-block align-middle text-[#222D39] absolute right-0"
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
                  </div>  
                  <Dropdown
                    isOpen={isOpenDropdown[index]}
                    items={["Dummy Item 1", "Dummy Item 2", "Dummy Item 3"]}
                    onMouseEnter={() => toggleDropdown(index, true)}
                    onMouseLeave={() => toggleDropdown(index, false)}
                  />
                </>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
