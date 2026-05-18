import { createPortal } from "react-dom";
import React, { createContext, useContext, useEffect, useState } from "react";

import { TbDots } from "react-icons/tb";
import { LuListFilter } from "react-icons/lu";

import { useOutsideClick } from "@/components/hooks/useOutsideClick";

type Position = {
  x: number;
  y: number;
  align: string;
};

interface MenusContextType {
  isOpen: boolean;
  open: React.Dispatch<React.SetStateAction<boolean>>;
  close: () => void;
  position: Position | null;
  setPosition: React.Dispatch<React.SetStateAction<Position | null>>;
}

const MenusContext = createContext<MenusContextType>({} as MenusContextType);

export default function Menus({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<Position | null>(null);

  const close = () => setIsOpen(false);
  const open = setIsOpen;

  return (
    <MenusContext.Provider value={{ isOpen, open, close, position, setPosition }}>
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({type = false, align = "right"}: { type?: boolean; align?: "left" | "right" }) {
  const { isOpen, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    const button = target.closest("button");
    if (!button) return;
    
    const rect = button.getBoundingClientRect();
    
    // Calculate x based on alignment
    const x = align === "left" 
      ? rect.x 
      : window.innerWidth - rect.width - rect.x;

    setPosition({
      x: x,
      y: rect.y + rect.height + 2,
      align: align // Store alignment to use in Lists
    });

    isOpen ? close() : open(true);
  }

  return (
    <button
      aria-label="toggle menu"
      className={"cursor-pointer"}
      onClick={handleClick}
    >
      {type ? (
        <LuListFilter className={"secondary-text-color h-6 w-6"} /> 
      ):(
        <TbDots className={"secondary-text-color h-6 w-6"} />
      )}
    </button>
  );
}

function Lists({ children }: { children: React.ReactNode }) {
  const { isOpen, position, close } = useContext(MenusContext);
  const ref = useOutsideClick<HTMLUListElement>(close, false);

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("scroll", close, true);
    return () => window.removeEventListener("scroll", close, true);
  }, [isOpen, close]);

  if (!isOpen) return null;

  const style: React.CSSProperties = {
    top: `${position?.y}px`
  };

  if (position?.align === "left") {
    style.left = `${position?.x}px`;
  } else {
    style.right = `${position?.x}px`;
  }

  return createPortal(
    <ul
      ref={ref}
      className={"fixed z-50 border border-stone-300 bg-white shadow-md rounded-md"}
      style={style}
    >
      {children}
    </ul>,
    document.body
  );
}

function Buttons({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        className={`w-full text-left px-2.5 py-2 text-sm text-dark hover:bg-primary/70 hover:text-white transition-colors duration-300 rounded-md flex items-center gap-2 cursor-pointer ${className || ""}`}
        onClick={handleClick}
      >
        {children}
      </button>
    </li>
  );
}

Menus.Toggle = Toggle;
Menus.Lists = Lists;
Menus.Buttons = Buttons;
