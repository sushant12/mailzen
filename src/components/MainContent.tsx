import React from "react";
import EmailRow, { EmailType } from "./EmailRow";
import "./MainContent.css";

interface MainContentProps {
  activeTab: "primary" | "promotions" | "social" | "updates";
  setActiveTab: (tab: "primary" | "promotions" | "social" | "updates") => void;
  filteredEmails: EmailType[];
  selectedEmails: number[];
  toggleEmailSelection: (id: number) => void;
  selectedSidebarItem: string;
}

const MainContent: React.FC<MainContentProps> = ({
  activeTab,
  setActiveTab,
  filteredEmails,
  selectedEmails,
  toggleEmailSelection,
  selectedSidebarItem,
}) => {
  return (
    <main className="main-content">
      <div className="content-header">
        <h2 className="view-title">
          {selectedSidebarItem.charAt(0).toUpperCase() +
            selectedSidebarItem.slice(1)}
        </h2>
      </div>

      {selectedSidebarItem === "inbox" && (
        <div className="tabs-container">
          <div className="tabs">
            <div
              className={`tab ${activeTab === "primary" ? "active" : ""}`}
              onClick={() => setActiveTab("primary")}
            >
              <span className="tab-icon">●</span>
              <span className="tab-label">Primary</span>
            </div>
            <div
              className={`tab ${activeTab === "promotions" ? "active" : ""}`}
              onClick={() => setActiveTab("promotions")}
            >
              <span className="tab-icon">●</span>
              <span className="tab-label">Promotions</span>
            </div>
            <div
              className={`tab ${activeTab === "social" ? "active" : ""}`}
              onClick={() => setActiveTab("social")}
            >
              <span className="tab-icon">●</span>
              <span className="tab-label">Social</span>
            </div>
            <div
              className={`tab ${activeTab === "updates" ? "active" : ""}`}
              onClick={() => setActiveTab("updates")}
            >
              <span className="tab-icon">●</span>
              <span className="tab-label">Updates</span>
            </div>
          </div>
        </div>
      )}

      <div className="emails-container">
        <div className="emails-header">
          <div className="select-all">
            <input type="checkbox" id="select-all" />
            <label htmlFor="select-all"></label>
          </div>
          <div className="header-actions">
            <button className="action-btn">
              <span className="action-icon">↻</span>
              <span className="action-text">Refresh</span>
            </button>
            <button className="action-btn">
              <span className="action-icon">⋮</span>
              <span className="action-text">More</span>
            </button>
          </div>
        </div>

        <div className="emails-list">
          {filteredEmails.length === 0 ? (
            <div className="no-emails">
              <p>No emails to display in {selectedSidebarItem}</p>
            </div>
          ) : (
            filteredEmails.map((email) => (
              <EmailRow
                key={email.id}
                email={email}
                isSelected={selectedEmails.includes(email.id)}
                onToggleSelect={() => toggleEmailSelection(email.id)}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
