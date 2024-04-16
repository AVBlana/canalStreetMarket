// Accordion.tsx
"use client";

import React, { useState } from "react";
import AccordionPanel from "../AccordionPanel";
import ContentHome from "../ContentHome";
import ContentFood from "../ContentFood";
import ContentRetail from "../ContentRetail";
import ContentCommunity from "../ContentCommunity";

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const panels = [
    {
      title: "Home",
      icon: "文化",
      backgroundColor: "#fff",
      contentComponent: <ContentHome />,
    },
    {
      title: "Food",
      icon: "餐饮",
      backgroundColor: "#5ea3ec",
      contentComponent: <ContentFood />,
    },
    {
      title: "Retail",
      icon: "購物",
      backgroundColor: "#f64444",
      contentComponent: <ContentRetail />,
    },
    {
      title: "Community",
      icon: "文化",
      backgroundColor: "#ffb400",
      contentComponent: <ContentCommunity />,
    },
  ];

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="outer flex h-screen overflow-x-scroll">
      {panels.map((panel, index) => (
        <AccordionPanel
          key={index}
          title={panel.title}
          icon={panel.icon}
          backgroundColor={panel.backgroundColor}
          isActive={index === activeIndex}
          onClick={() => handleClick(index)}
        >
          {panel.contentComponent}
          {/* Pass dynamic content as children to AccordionPanel */}
        </AccordionPanel>
      ))}
    </div>
  );
};

export default Accordion;
