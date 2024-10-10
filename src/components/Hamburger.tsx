import React from "react";
import { HiMenu } from "react-icons/hi";

interface HamburgerMenuProps {
  onClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-[#222D39] p-2 border">
      <HiMenu size={20} />
    </button>
  );
};

export default HamburgerMenu;
