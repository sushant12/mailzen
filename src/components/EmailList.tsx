import React from "react";
import EmailRow, { EmailType } from "./EmailRow";

interface EmailListProps {
  emails: EmailType[];
  selectedEmails: number[];
  onToggleEmailSelection: (id: number) => void;
}

const EmailList: React.FC<EmailListProps> = ({
  emails,
  selectedEmails,
  onToggleEmailSelection,
}) => {
  return (
    <div className="email-list">
      {emails.map((email) => (
        <EmailRow
          key={email.id}
          email={email}
          isSelected={selectedEmails.includes(email.id)}
          onToggleSelect={() => onToggleEmailSelection(email.id)}
        />
      ))}
    </div>
  );
};

export default EmailList;
