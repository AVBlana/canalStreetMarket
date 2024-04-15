"use client";

import { useEffect, useState } from "react";

const TAIL_LENGTH = 20;

const Cursor: React.FC = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [cursorHistory, setCursorHistory] = useState<
    Array<{ x: number; y: number }>
  >(Array(TAIL_LENGTH).fill({ x: 0, y: 0 }));

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const updatedCursorHistory = [...cursorHistory];
    updatedCursorHistory.shift();
    updatedCursorHistory.push({ x: mouseX, y: mouseY });
    setCursorHistory(updatedCursorHistory);
  }, [mouseX, mouseY]);

  return (
    <div
      id="cursor"
      className="fixed w-28 h-28 top-0 left-0 pointer-events-none mix-blend-difference filter-goo"
    >
      {cursorHistory.map((position, index) => (
        <div
          key={index}
          id="cursor-circle"
          className="w-28 h-28 rounded-full bg-faf7ee absolute top-0 left-0"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${
              index / TAIL_LENGTH
            })`,
          }}
        />
      ))}
    </div>
  );
};

export default Cursor;
