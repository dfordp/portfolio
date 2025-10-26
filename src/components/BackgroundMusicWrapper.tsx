"use client"

import { useEffect, useRef } from "react";
import { setBackgroundMusicController } from "@/components/ui/resizable-navbar";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setBackgroundMusicController({
      pause: () => audioRef.current?.pause(),
      play: () => audioRef.current?.play(),
    });
  }, []);

  return <audio ref={audioRef} src="/Akeboshi.mp3" autoPlay loop />;
};

export default BackgroundMusic;