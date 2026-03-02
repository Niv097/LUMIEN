"use client";

import React, { createContext, useContext, useState } from "react";

interface ModalContextType {
    isConnectModalOpen: boolean;
    openConnectModal: () => void;
    closeConnectModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

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
