import React from "react";
import SidebarItem from "./SidebarItem";
import "./Sidebar.css";

export interface SidebarItemType {
  id: string;
  label: string;
}

interface SidebarProps {
  items: SidebarItemType[];
  selectedItemId: string;
  onSelectItem: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  items,
  selectedItemId,
  onSelectItem,
}) => {
  return (
    <aside className="sidebar">
      <ul>
        {items.map((item) => (
          <SidebarItem
            key={item.id}
            id={item.id}
            label={item.label}
            isSelected={selectedItemId === item.id}
            onClick={() => onSelectItem(item.id)}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
