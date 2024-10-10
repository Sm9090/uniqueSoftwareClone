import React from "react";

interface DropdownProps {
  isOpen: boolean;
  items: string[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  isOpen,
  items,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={`mt-2 w-full bg-white border border-gray-200 shadow-lg rounded-md transition-opacity duration-500 ease-in-out
      ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <ul>
        {items.map((item, index) => (
          <li key={index} className="px-4 py-2 hover:bg-gray-100">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
