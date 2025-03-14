import React from "react";
import { NavLink } from "react-router";

interface SidebarItemProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  id: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  isSelected,
  onClick,
  id,
}) => {
  return (
    <li className={isSelected ? "sidebar-item-selected" : "sidebar-item"}>
      <NavLink to={`/${id}`} onClick={onClick}>
        {label}
      </NavLink>
    </li>
  );
};

export default SidebarItem;
