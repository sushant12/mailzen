# MailZen Component Structure

This diagram represents the component hierarchy and data flow in the MailZen application.

```mermaid
classDiagram
    App --> Header : profileImage
    App --> Sidebar : items, selectedItemId, onSelectItem
    App --> MainContent : activeTab, setActiveTab, filteredEmails, selectedEmails, toggleEmailSelection, selectedSidebarItem
    
    class App {
        +useState: activeTab
        +useState: selectedEmails
        +useState: selectedSidebarItem
        +mockEmails: EmailType[]
        +mockSentEmails: EmailType[]
        +mockDraftEmails: EmailType[]
        +mockTrashEmails: EmailType[]
        +mockSpamEmails: EmailType[]
        +sidebarItems: SidebarItemType[]
        +getEmailsForView()
        +toggleEmailSelection(id)
        +handleSidebarItemSelect(id)
    }
    
    class Header {
        +profileImage: string
    }
    
    class Sidebar {
        +items: SidebarItemType[]
        +selectedItemId: string
        +onSelectItem: function
    }
    
    class MainContent {
        +activeTab: string
        +setActiveTab: function
        +filteredEmails: EmailType[]
        +selectedEmails: number[]
        +toggleEmailSelection: function
        +selectedSidebarItem: string
        +renderEmails()
        +handleTabChange()
    }
    
    class EmailRow {
        +email: EmailType
        +isSelected: boolean
        +onToggleSelect: function
    }
    
    class EmailType {
        +id: number
        +sender: string
        +subject: string
        +preview: string
        +date: string
        +category: string
        +read: boolean
    }
    
    class SidebarItemType {
        +id: string
        +label: string
    }
    
    MainContent --> EmailRow : email, isSelected, onToggleSelect
```

## Data Flow

1. App component maintains the application state
2. State flows down to child components as props
3. Child components trigger events that update the App state
4. Routes determine what content is displayed in MainContent

## Key State Management

- Email selection state is managed in App and passed to MainContent
- Active category tab state is managed in App
- Selected sidebar item determines which emails are displayed
