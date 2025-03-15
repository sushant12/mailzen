import React from "react";
import Logo from "./header/Logo";
import SearchBar from "./header/SearchBar";
import ProfileAvatar from "./header/ProfileAvatar";

interface HeaderProps {
  profileImage: string;
}

const Header: React.FC<HeaderProps> = ({ profileImage }) => {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  return (
    <header className="app-header">
      <Logo title="MailZen" />
      <SearchBar onSearch={handleSearch} />
      <ProfileAvatar imageSrc={profileImage} onClick={handleProfileClick} />
    </header>
  );
};

export default Header;
