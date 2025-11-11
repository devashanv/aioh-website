// components/Modal.tsx
import React, { useEffect } from "react";

import { IoIosCloseCircleOutline } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const SiteMap: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow || "";
    const originalPaddingRight = document.body.style.paddingRight || "";

    if (isOpen) {
      // Compensate for the missing scrollbar to avoid layout shift
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }

      document.body.style.overflow = "hidden";
    }

    return () => {
      // Restore original styles when modal closes or component unmounts
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center w-full overflow-y-scroll">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-white bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed z-50 top-3 right-8 text-white text-2xl hover:text-white/80 cursor-pointer transition-colors"
      >
        <IoIosCloseCircleOutline />
      </button>

      {/* Modal Panel */}
      <div className="relative bg-red-100 w-full rounded-lg shadow-xl animate-in fade-in zoom-in duration-200">
        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default SiteMap;
