import React from "react";

interface ProfileAvatarProps {
  imageSrc: string;
  alt?: string;
  onClick?: () => void;
}

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  imageSrc,
  alt = "Profile",
  onClick,
}) => {
  return (
    <div className="profile">
      <div className="avatar" onClick={onClick}>
        <img src={imageSrc} alt={alt} className="profile-image" />
      </div>
    </div>
  );
};

export default ProfileAvatar;
