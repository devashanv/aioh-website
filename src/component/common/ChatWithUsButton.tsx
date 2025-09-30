import { useState } from "react";
import chatsupport from "../../assets/img/logo/chatsupport.png";

const ChatWithUsButton: React.FC = () => {
  const [show] = useState(true);

  return (
    show && (
      <div className="fixed bottom-8 right-8 z-50">
        {/* Animated Blue Ping Circles */}
        <div className="relative w-[70px] h-[70px] flex items-center justify-center">
          <div className="absolute w-full h-full rounded-full bg-blue-400 opacity-75 animate-ping" />
          <div className="absolute w-[50px] h-[50px] rounded-full bg-blue-400 opacity-75 animate-ping delay-200" />
          <div className="absolute w-[30px] h-[30px] rounded-full bg-blue-500 opacity-80 animate-ping delay-500" />

          {/* Clickable Link Button */}
          <a
            href="https://wa.me/94768572709"
            target="_blank"           // open in new tab (remove if not needed)
            rel="noopener noreferrer" // security for external links
            className="relative z-10 flex items-center justify-center p-3 rounded-full bg-blue-500 shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
          >
            <img
              src={chatsupport}
              alt="Chat Support"
              className="w-[28px] h-[28px] object-contain"
            />
          </a>
        </div>
      </div>
    )
  );
};

export default ChatWithUsButton;
