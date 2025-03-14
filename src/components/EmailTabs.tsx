import React from "react";

type TabType = "primary" | "promotions" | "social" | "updates";

interface EmailTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const EmailTabs: React.FC<EmailTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="email-tabs">
      <button
        className={activeTab === "primary" ? "active" : ""}
        onClick={() => onTabChange("primary")}
      >
        Primary
      </button>
      <button
        className={activeTab === "promotions" ? "active" : ""}
        onClick={() => onTabChange("promotions")}
      >
        Promotions
      </button>
      <button
        className={activeTab === "social" ? "active" : ""}
        onClick={() => onTabChange("social")}
      >
        Social
      </button>
      <button
        className={activeTab === "updates" ? "active" : ""}
        onClick={() => onTabChange("updates")}
      >
        Updates
      </button>
    </div>
  );
};

export default EmailTabs;
