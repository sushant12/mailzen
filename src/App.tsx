import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router";
import "./App.css";
import catProfile from "./assets/cat.jpeg";
import Sidebar, { SidebarItemType } from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { EmailType } from "./components/EmailRow";

// Mock data for emails
const mockEmails: EmailType[] = [
  {
    id: 1,
    sender: "John Doe",
    subject: "Meeting tomorrow",
    preview: "Hi, just wanted to confirm our meeting...",
    date: "10:30 AM",
    category: "primary",
    read: false,
  },
  {
    id: 2,
    sender: "Amazon",
    subject: "Your order has shipped",
    preview: "Your recent order #12345 has been shipped...",
    date: "May 20",
    category: "promotions",
    read: true,
  },
  {
    id: 3,
    sender: "Twitter",
    subject: "New notification",
    preview: "@user mentioned you in a comment...",
    date: "May 19",
    category: "social",
    read: true,
  },
  {
    id: 4,
    sender: "LinkedIn",
    subject: "Job opportunity",
    preview: "A new job matching your profile is available...",
    date: "May 18",
    category: "updates",
    read: false,
  },
  {
    id: 5,
    sender: "Alex Smith",
    subject: "Weekend plans",
    preview: "Are you free this weekend? I was thinking we could...",
    date: "May 17",
    category: "primary",
    read: true,
  },
  {
    id: 6,
    sender: "Netflix",
    subject: "New shows available",
    preview: "Check out the latest releases on Netflix...",
    date: "May 16",
    category: "promotions",
    read: true,
  },
];

// Mock data for other categories
const mockSentEmails: EmailType[] = [
  {
    id: 101,
    sender: "Me",
    subject: "Project update",
    preview: "Here's the latest update on our project...",
    date: "9:15 AM",
    category: "sent",
    read: true,
  },
  {
    id: 102,
    sender: "Me",
    subject: "Weekend plans",
    preview: "Let me know if you're available this weekend...",
    date: "May 19",
    category: "sent",
    read: true,
  },
];

const mockDraftEmails: EmailType[] = [
  {
    id: 201,
    sender: "Draft",
    subject: "Ideas for next quarter",
    preview: "Here are some thoughts on our strategy...",
    date: "May 20",
    category: "draft",
    read: true,
  },
];

const mockTrashEmails: EmailType[] = [
  {
    id: 301,
    sender: "Newsletter",
    subject: "Weekly digest",
    preview: "Check out what happened this week...",
    date: "May 15",
    category: "trash",
    read: true,
  },
];

const mockSpamEmails: EmailType[] = [
  {
    id: 401,
    sender: "Unknown",
    subject: "You won a prize!",
    preview: "Click here to claim your reward...",
    date: "May 14",
    category: "spam",
    read: true,
  },
];

const sidebarItems: SidebarItemType[] = [
  { id: "inbox", label: "Inbox" },
  { id: "sent", label: "Sent" },
  { id: "draft", label: "Draft" },
  { id: "trash", label: "Trash" },
  { id: "spam", label: "Spam" },
];

function App() {
  const [activeTab, setActiveTab] = useState<
    "primary" | "promotions" | "social" | "updates"
  >("primary");
  const [selectedEmails, setSelectedEmails] = useState<number[]>([]);
  const [selectedSidebarItem, setSelectedSidebarItem] = useState("inbox");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.slice(1) || "inbox";
    const validPath = sidebarItems.some((item) => item.id === path)
      ? path
      : "inbox";
    setSelectedSidebarItem(validPath);
  }, [location.pathname]);

  const getEmailsForView = () => {
    switch (selectedSidebarItem) {
      case "inbox":
        return mockEmails.filter((email) => email.category === activeTab);
      case "sent":
        return mockSentEmails;
      case "draft":
        return mockDraftEmails;
      case "trash":
        return mockTrashEmails;
      case "spam":
        return mockSpamEmails;
      default:
        return [];
    }
  };

  const filteredEmails = getEmailsForView();

  const toggleEmailSelection = (id: number) => {
    if (selectedEmails.includes(id)) {
      setSelectedEmails(selectedEmails.filter((emailId) => emailId !== id));
    } else {
      setSelectedEmails([...selectedEmails, id]);
    }
  };

  const handleSidebarItemSelect = (id: string) => {
    setSelectedSidebarItem(id);
    navigate(`/${id}`);
  };

  return (
    <div className="mail-app">
      <Header profileImage={catProfile} />

      <div className="app-body">
        <Sidebar
          items={sidebarItems}
          selectedItemId={selectedSidebarItem}
          onSelectItem={handleSidebarItemSelect}
        />

        <Routes>
          <Route
            path="/"
            element={
              <MainContent
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                filteredEmails={filteredEmails}
                selectedEmails={selectedEmails}
                toggleEmailSelection={toggleEmailSelection}
                selectedSidebarItem={selectedSidebarItem}
              />
            }
          />
          <Route
            path="/:viewId"
            element={
              <MainContent
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                filteredEmails={filteredEmails}
                selectedEmails={selectedEmails}
                toggleEmailSelection={toggleEmailSelection}
                selectedSidebarItem={selectedSidebarItem}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
