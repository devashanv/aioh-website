// components/Modal.tsx
import React from 'react';

import { IoIosCloseCircleOutline } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const SiteMap: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center w-full overflow-y-scroll">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-white bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Panel */}
      <div className="relative bg-red-100 w-full rounded-lg shadow-xl animate-in fade-in zoom-in duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 bg-primary hover:text-gray-600 transition-colors"
        >
            <IoIosCloseCircleOutline />
        </button>

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default SiteMap;