import React from "react";

interface LogoProps {
  title: string;
}

const Logo: React.FC<LogoProps> = ({ title }) => {
  return (
    <div className="logo">
      <h1>{title}</h1>
    </div>
  );
};

export default Logo;
