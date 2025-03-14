import React from "react";
import "./EmailRow.css";

export interface EmailType {
  id: number;
  sender: string;
  subject: string;
  preview: string;
  date: string;
  category: string;
  read: boolean;
}

interface EmailRowProps {
  email: EmailType;
  isSelected: boolean;
  onToggleSelect: () => void;
}

const EmailRow: React.FC<EmailRowProps> = ({
  email,
  isSelected,
  onToggleSelect,
}) => {
  return (
    <div
      className={`email-row ${email.read ? "read" : "unread"} ${
        isSelected ? "selected" : ""
      }`}
    >
      <div className="email-checkbox">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggleSelect}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      <div className="email-content">
        <div className="email-sender">{email.sender}</div>
        <div className="email-subject-preview">
          <span className="email-subject">{email.subject}</span>
          <span className="email-preview"> - {email.preview}</span>
        </div>
      </div>
      <div className="email-date">{email.date}</div>
    </div>
  );
};

export default EmailRow;
