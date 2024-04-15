// AccordionPanel.tsx

import React from "react";
import "./AccordionPanel.css";

interface AccordionPanelProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
  backgroundColor: string;
}

const AccordionPanel: React.FC<AccordionPanelProps> = ({
  title,
  isActive,
  onClick,
  backgroundColor,
}) => {
  return (
    <div
      className={`panel ${isActive ? "active" : ""}`}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      <p className="panel-content">{title}</p>
      {isActive && (
        <div className="panel-details">
          {/* Place additional content here when panel is active */}
          {/* Example: <p>Additional Content</p> */}
        </div>
      )}
    </div>
  );
};

export default AccordionPanel;
