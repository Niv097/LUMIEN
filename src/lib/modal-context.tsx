"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ModalContextType {
    isConnectModalOpen: boolean;
    openConnectModal: () => void;
    closeConnectModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

    // Lock body scroll when modal is open — prevents background scrolling on mobile
    useEffect(() => {
        if (isConnectModalOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = "0";
            document.body.style.right = "0";
            document.body.style.overflowY = "scroll"; // keep scrollbar so layout doesn't jump
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            document.body.style.overflowY = "";
            // Restore the page's previous scroll position
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
            }
        }
        return () => {
            // Cleanup on unmount
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            document.body.style.overflowY = "";
        };
    }, [isConnectModalOpen]);

    const openConnectModal = () => setIsConnectModalOpen(true);
    const closeConnectModal = () => setIsConnectModalOpen(false);

    return (
        <ModalContext.Provider value={{ isConnectModalOpen, openConnectModal, closeConnectModal }}>
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
}
