import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

interface Props {
  src: string;
}

export default function FloatingAudioPlayer({ src }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // start muted

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // ✅ Step 1: Autoplay muted (allowed)
    audio.muted = true;
    audio.play().then(() => {
      setIsPlaying(true);
    });

    // ✅ Step 2: On scroll → unmute + restart audio (fixes silent issue)
    const handleScroll = () => {
      if (!audio) return;

      audio.muted = false;
      setIsMuted(false);

      // ✅ Restart audio to force sound to play
      audio.pause();
      audio.currentTime = 0;
      audio.play().then(() => {
        setIsPlaying(true);
      });

      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop />

      <div className="fixed bottom-6 left-6 bg-white shadow-xl rounded-full px-5 py-3 flex items-center gap-4 z-50 border border-gray-200">
        <button
          onClick={togglePlay}
          className="text-black text-xl hover:cursor-pointer hover:opacity-70"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <button
          onClick={toggleMute}
          className="text-black text-xl hover:cursor-pointer hover:opacity-70"
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </div>
    </>
  );
}