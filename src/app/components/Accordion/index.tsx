// Accordion.tsx
"use client";

import React, { useState } from "react";
import AccordionPanel from "../AccordionPanel";
import ContentHome from "../ContentHome";
import ContentFood from "../ContentFood";
import ContentRetail from "../ContentRetail";
import ContentCommunity from "../ContentCommunity";
import { LogoIcon } from "../LogoIcon";

interface PanelItem {
  title: string;
  icon: string | React.ReactElement;
  backgroundColor: string;
  contentComponent: React.ReactElement;
}

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const panels: PanelItem[] = [
    {
      title: "Home",
      icon: <LogoIcon size={activeIndex === 0 ? 60 : 40} />,
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
    <div className="outer flex min-h-screen">
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
        </AccordionPanel>
      ))}
    </div>
  );
};

export default Accordion;
