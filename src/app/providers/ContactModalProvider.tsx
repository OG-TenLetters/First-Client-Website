"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ModalContextType {
  isContactModalOpen: boolean;
  setContactModalOpen: (isOpen: boolean) => void;
  toggleContactModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    if (isContactModalOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    };
  }, [isContactModalOpen]);

  const toggleContactModal = () => {
    setContactModalOpen(!isContactModalOpen);
  };

  return (
    <ModalContext.Provider
      value={{ isContactModalOpen, setContactModalOpen, toggleContactModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used with a ModalProvider");
  }
  return context;
}
