"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextType {
  isContactModalOpen: boolean;
  setContactModalOpen: (isOpen: boolean) => void;
  toggleContactModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const toggleContactModal = () => {
    setContactModalOpen(!isContactModalOpen);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
