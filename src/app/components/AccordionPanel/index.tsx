// AccordionPanel.tsx

import React from "react";
import "./AccordionPanel.css";

interface AccordionPanelProps {
  title: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
  backgroundColor: string;
  children: React.ReactNode;
}

const AccordionPanel: React.FC<AccordionPanelProps> = ({
  title,
  icon,
  isActive,
  onClick,
  backgroundColor,
  children,
}) => {
  return (
    <div
      className={`panel ${isActive ? "active" : ""}`}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      <div
        className={`panel-header ${
          isActive ? "active-header" : "inactive-header"
        }`}
      >
        <p className="panel-icon">{icon}</p>
        <p className="panel-title">{title}</p>
      </div>

      {isActive && (
        <div className="panel-details">
          {/* Place additional content here when panel is active */}
          {/* Example: <p>Additional Content</p> */}
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionPanel;
