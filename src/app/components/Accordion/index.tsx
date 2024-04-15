// Accordion.tsx
"use client";

import React, { useState } from "react";
import AccordionPanel from "../AccordionPanel";

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const panels = [
    { title: "HOME", backgroundColor: "#fff" },
    { title: "ONE", backgroundColor: "#5ea3ec" },
    { title: "TWO", backgroundColor: "#f64444" },
    { title: "THREE", backgroundColor: "#ffb400" },
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
          backgroundColor={panel.backgroundColor}
          isActive={index === activeIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
